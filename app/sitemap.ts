import type { MetadataRoute } from 'next'

import { services } from '../lib/services'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://albastakiuae.com'

const staticRoutes = [
  '',
  '/about',
  '/services',
  '/services/other',
  '/company-formation',
  '/business-setup',
  '/accounting',
  '/consultancy',
  '/events',
  '/it',
  '/why-choose-us',
  '/team',
  '/testimonials',
  '/case-studies',
  '/case-studies/business-setup',
  '/case-studies/accounting',
  '/faqs',
  '/pages',
  '/blog',
  '/blog/news',
  '/blog/business-tips',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const serviceEntries = services
    .filter((service) => service.slug !== 'other')
    .map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  return [...staticEntries, ...serviceEntries]
}
