import '../src/index.css'
import type { Metadata } from 'next'
import { StructuredData } from '../src/components/StructuredData'

export const metadata: Metadata = {
  title: 'FoundHer - Empowering African Women Founders | Exclusive Network',
  description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships across 30+ countries.',
  keywords: 'African women entrepreneurs, women founders network, female entrepreneurs Africa, business networking, startup community, women in business',
  authors: [{ name: 'FoundHer Network' }],
  creator: 'FoundHer Network',
  publisher: 'FoundHer Network',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.foundhertable.com',
    title: 'FoundHer - Empowering African Women Founders',
    description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships across 30+ countries.',
    siteName: 'FoundHer',
    images: [
      {
        url: 'https://www.foundhertable.com/preview.png',
        width: 1200,
        height: 630,
        alt: 'FoundHer - Empowering African Women Founders Network',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FoundHer - Empowering African Women Founders',
    description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business across 30+ African countries.',
    images: ['https://www.foundhertable.com/preview.png'],
  },
  alternates: {
    canonical: 'https://www.foundhertable.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#420806" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Additional Open Graph tags for better compatibility */}
        <meta property="og:url" content="https://www.foundhertable.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FoundHer - Empowering African Women Founders" />
        <meta property="og:description" content="Join an exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships across 30+ countries." />
        <meta property="og:image" content="https://www.foundhertable.com/preview.png" />
        <meta property="og:image:secure_url" content="https://www.foundhertable.com/preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="FoundHer" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FoundHer - Empowering African Women Founders" />
        <meta name="twitter:description" content="Join an exclusive network of visionary African women entrepreneurs building the future of business across 30+ African countries." />
        <meta name="twitter:image" content="https://www.foundhertable.com/preview.png" />
      </head>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}