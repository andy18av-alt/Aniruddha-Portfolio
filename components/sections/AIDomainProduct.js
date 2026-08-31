import { Reveal, Eyebrow } from "./shared";

const tracks = [
  {
    number: "01",
    title: "AI, Data & Product Technology",
    description:
      "Building technical fluency to design, prototype, integrate, and operationalize AI-powered products and systems.",
    groups: [
      {
        title: "AI & Intelligence",
        items: [
          "Generative AI",
          "LLMs",
          "AI Agents",
          "RAG",
          "Multi-Agent Systems",
          "Decision Intelligence",
        ],
      },
      {
        title: "Product & Technology",
        items: [
          "API Integrations",
          "MCP",
          "SQL & Data Analysis",
          "Figma",
          "UI/UX",
          "Product Design",
          "AI-assisted Development",
        ],
      },
      {
        title: "Automation & Systems",
        items: [
          "Workflow Automation",
          "n8n",
          "Make",
          "Knowledge Systems",
          "AI Governance & Guardrails",
        ],
      },
    ],
  },

  {
    number: "02",
    title: "Industry AI",
    description:
      "Developing domain fluency to apply AI in complex, regulated, and knowledge-intensive environments.",
    groups: [
      {
        title: "Healthcare & HealthTech",
        description:
          "AI applications across healthcare workflows, administration, decision support, and customer/patient experiences.",
      },
      {
        title: "Insurance & Financial Services",
        description:
          "AI applications across risk, operations, customer experience, compliance, and decision systems.",
      },
      {
        title: "Legal & Compliance",
        description:
          "AI applications across legal research, knowledge workflows, documentation, and compliance.",
      },
    ],
    footer:
      "Expanding — applying the same AI and product thinking to additional industry contexts through structured learning and hands-on projects.",
  },

  {
    number: "03",
    title: "AI-Enabled Business Transformation",
    description:
      "Exploring how AI can reshape enterprise systems, workflows, decisions, and customer experiences to create measurable business value.",
    groups: [
      {
        title: "Product & Strategy",
        items: [
          "AI Product Strategy",
          "Digital Product Development",
          "Workflow & Process Design",
          "AI Opportunity Identification",
        ],
      },
      {
        title: "Customer & Experience",
        items: [
          "Customer Experience",
          "Customer Support & Success",
          "Personalization",
          "Knowledge & Service Systems",
        ],
      },
      {
        title: "Enterprise & Operations",
        items: [
          "Operating Model Transformation",
          "Process Automation",
          "Decision Systems",
          "Human-in-the-loop Workflows",
        ],
      },
      {
        title: "Data & Decision Making",
        items: [
          "Analytics",
          "Data Analysis",
          "Knowledge Management",
          "Executive Storytelling",
        ],
      },
    ],
  },
];

function CapabilityGroup({ group }) {
  return (
    <div className="mt-6">
      <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
        {group.title}
      </div>

      {group.items ? (
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="max-w-xl text-sm leading-6 text-neutral-400">
          {group.description}
        </p>
      )}
    </div>
  );
}

export default function AIDomainProduct() {
  return (
    <section
      id="ai-domain-product"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <Reveal>
          <Eyebrow num="06">AI × Domain × Product</Eyebrow>

          <div className="mt-8 max-w-4xl">
            <h2 className="text-3xl font-medium tracking-tight text-neutral-100 md:text-5xl">
              Building the fluency to apply AI across products, industries,
              and business functions.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-400 md:text-lg">
              My foundation is in product, operations, Trust &amp; Safety, and
              business transformation. I’m extending that foundation through
              hands-on work across AI, data, digital product, automation, and
              industry-specific applications — with a focus on turning
              technology into better decisions, workflows, and customer
              outcomes.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <Reveal
              key={track.number}
              delay={index * 0.08}
            >
              <article className="h-full rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 md:p-7">
                <div className="text-xs tabular-nums text-neutral-600">
                  {track.number}
                </div>

                <h3 className="mt-4 text-xl font-medium text-neutral-100">
                  {track.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  {track.description}
                </p>

                {track.groups.map((group) => (
                  <CapabilityGroup
                    key={group.title}
                    group={group}
                  />
                ))}

                {track.footer && (
                  <p className="mt-7 border-t border-neutral-800 pt-5 text-xs leading-5 text-neutral-500">
                    {track.footer}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-5 border-t border-neutral-800 pt-6 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            <span>
              <strong className="text-neutral-300">Applied</strong>{" "}
              — demonstrated through products, systems, or operating experience
            </span>

            <span>
              <strong className="text-neutral-300">Developing</strong>{" "}
              — actively building through hands-on projects and implementation
            </span>

            <span>
              <strong className="text-neutral-300">Expanding</strong>{" "}
              — extending capability into new industries and use cases
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}