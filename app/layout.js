import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next"
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'

const title = 'Aniruddha Vanshiv — Operations, Trust & Safety, AI-Enabled Business Leadership'
const description = 'Associate Director with 13+ years across E-commerce, Trust & Safety, Customer Experience, Marketplace Operations, Reverse Logistics, and AI-enabled transformation.'
const url = process.env.NEXT_PUBLIC_BASE_URL || 'https://trust-scale-ai-1.preview.emergentagent.com'

export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: '%s · Aniruddha Vanshiv',
  },
  description,
  keywords: [
    'Aniruddha Vanshiv',
    'Associate Director',
    'Operations Leadership',
    'Trust & Safety',
    'Customer Experience',
    'Marketplace Operations',
    'Reverse Logistics',
    'AI-enabled Operations',
    'Flipkart',
    'E-commerce Leader',
    'Bengaluru',
  ],
  authors: [{ name: 'Aniruddha Vanshiv' }],
  creator: 'Aniruddha Vanshiv',
  publisher: 'Aniruddha Vanshiv',
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Aniruddha Vanshiv',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@aniruddhavanshiv',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'portfolio',
}

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  // JSON-LD person schema for SEO
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aniruddha Vanshiv',
    jobTitle: 'Associate Director — Operations, Trust & Safety, AI-Enabled Business Leadership',
    worksFor: { '@type': 'Organization', name: 'Flipkart' },
    address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
    email: 'aniruddha.vanshiv@gmail.com',
    telephone: '+91-9739299852',
    url,
    sameAs: ['https://www.linkedin.com/in/aniruddhavanshiv'],
    knowsAbout: [
      'Operations', 'Trust & Safety', 'Customer Experience', 'Marketplace Operations',
      'Reverse Logistics', 'Fraud Prevention', 'AI-enabled Operations', 'Program Management',
    ],
  }

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-neutral-100">
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
