import { Metadata } from 'next'
import Page from '../src/page'

export async function generateMetadata(): Promise<Metadata> {
  try {
    // Define the image URL - can be dynamic or static
    const imageUrl = 'https://www.foundhertable.com/preview.png'
    
    return {
      title: 'FoundHer - Empowering African Women Founders',
      description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships across 30+ countries.',
      openGraph: {
        title: 'FoundHer - Empowering African Women Founders',
        description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships across 30+ countries.',
        url: 'https://www.foundhertable.com/',
        siteName: 'FoundHer',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: 'FoundHer - Empowering African Women Founders Network',
            type: 'image/png'
          }
        ],
        type: 'website'
      },
      // Twitter fallback
      twitter: {
        card: 'summary_large_image',
        title: 'FoundHer - Empowering African Women Founders',
        description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business across 30+ countries.',
        images: [imageUrl]
      }
    }
  } catch (error) {
    // Fallback metadata if there's an error
    return {
      title: 'FoundHer - Empowering African Women Founders',
      description: 'Join an exclusive network of visionary African women entrepreneurs building the future of business.',
    }
  }
}

export default function HomePage() {
  return <Page />
}