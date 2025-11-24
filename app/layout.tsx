import '../src/index.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FoundHer - Empowering African Women Founders',
  description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}