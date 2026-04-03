
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SmoothScroller from '../components/SmoothScroller'
import CustomCursor from '../components/CustomCursor'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { rethinkSans } from './fonts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://albastakiuae.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Al Bastaki Business Services LLC',
  description:
    'Business setup, company formation, accounting, consultancy, events, and IT support services in Dubai and across the UAE.',
  keywords: [
    'business setup dubai',
    'company formation uae',
    'accounting services dubai',
    'consultancy services uae',
    'PRO services dubai',
    'al bastaki business services',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/fevic.png', type: 'image/png' }],
    shortcut: ['/fevic.png'],
    apple: [{ url: '/fevic.png', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Al Bastaki Business Services LLC',
    title: 'Al Bastaki Business Services LLC',
    description:
      'Business setup and advisory services in Dubai and the UAE with structured, end-to-end support.',
    images: [
      {
        url: '/fevic.png',
        width: 311,
        height: 510,
        alt: 'Al Bastaki Business Services icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Al Bastaki Business Services LLC',
    description:
      'Business setup and advisory services in Dubai and the UAE with structured support.',
    images: ['/fevic.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="relative">
      <body className={rethinkSans.className}>
        <CustomCursor />
        <SmoothScroller>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroller>
        <WhatsAppFloat />
      </body>
    </html>
  )
}
