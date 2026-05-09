import './globals.css'

export const metadata = {
  title: 'Aniruddha Vanshiv — Operations, Trust & Safety, AI-Enabled Business Leadership',
  description: 'Associate Director with 13+ years across E-commerce, Trust & Safety, Customer Experience, Marketplace Operations, Reverse Logistics, and AI-enabled transformation.',
  metadataBase: new URL('https://trust-scale-ai-1.preview.emergentagent.com'),
  openGraph: {
    title: 'Aniruddha Vanshiv — Executive Portfolio',
    description: 'Building Scalable Operations, Trust Systems & AI-Enabled Business Experiences.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-neutral-100">
        {children}
      </body>
    </html>
  )
}
