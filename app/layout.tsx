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
    url: 'https://foundhertable.com',
    title: 'FoundHer - Empowering African Women Founders',
    description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships.',
    siteName: 'FoundHer',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'FoundHer - Empowering African Women Founders Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FoundHer - Empowering African Women Founders',
    description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business.',
    images: ['/preview.png'],
  },
  alternates: {
    canonical: 'https://foundhertable.com',
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
      </head>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}