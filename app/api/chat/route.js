import { NextResponse } from 'next/server';
import { retrieveRelevantContext } from '@/lib/rag';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages[messages.length - 1]?.content || "";

    // 1. Retrieve relevant JSON context using our RAG helper
    const retrievedContext = retrieveRelevantContext(latestMessage);

    // 2. Build system instructions and format history for Gemini
    const systemInstruction = `
      You are Aniruddha Vanshiv's AI Portfolio Guide, an executive digital concierge on aniruddhavanshiv.com.
      Your goal is to answer recruiter, hiring manager, and VP questions with executive precision.
      
      RULES:
      - Always speak in the third person ("Aniruddha led...", "His work achieved..."). Never claim to be Aniruddha.
      - Use ONLY the provided KNOWLEDGE BASE CONTEXT below. Do not invent roles, metrics, or employers.
      - If information is missing, state: "I don't have enough documented information in Aniruddha's portfolio to answer that reliably."

      KNOWLEDGE BASE CONTEXT:
      ${retrievedContext}
    `;

    // Map existing messages to Gemini's format
    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    // 3. Call Gemini API with streaming enabled
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2,
      }
    });

    // 4. Stream response back using Server-Sent Events (SSE) to match frontend
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            // Correct SDK property access for streaming text chunks
            const textChunk = chunk.text;
            if (textChunk) {
              const payload = JSON.stringify({ choices: [{ delta: { content: textChunk } }] });
              controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      }
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}