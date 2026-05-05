
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
    'Premier corporate services partner in Dubai for company formation, business setup, PRO, accounting, consultancy, and IT support across the UAE and wider Middle East.',
  keywords: [
    'business setup dubai',
    'company formation uae',
    'premier business services',
    'accounting services dubai',
    'consultancy services uae',
    'PRO services dubai',
    'middle east business setup',
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
      'UAE-rooted business setup, company formation, accounting, consultancy, and corporate support with structured execution across the region.',
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
      'Leading business setup and advisory support in Dubai, the UAE, and the wider region.',
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
