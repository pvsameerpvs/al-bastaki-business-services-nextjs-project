import { notFound } from 'next/navigation'

import PageHero from '../../../components/PageHero'
import PageCTA from '../../../components/PageCTA'
import ServiceDetailSections from '../../../components/ServiceDetailSections'
import ServiceDetailFocusSection from '../../../components/ServiceDetailFocusSection'

import { getService, services, type ServiceSlug } from '../../../lib/services'
import { ctaBySlug, heroBadgeBySlug } from '../../../lib/service-detail-page-content'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = getService(params.slug as ServiceSlug)
  if (!service) return notFound()

  return (
    <main>
      <PageHero
        badge={heroBadgeBySlug[service.slug] ?? 'Service details'}
        title={service.title}
        subtitle={service.subtitle}
        image={service.coverImage}
      />

      <ServiceDetailFocusSection slug={service.slug} />

      <ServiceDetailSections
        intro={service.intro}
        keyPoints={service.keyPoints}
        deliverables={service.deliverables}
      />

      <PageCTA
        title={
          ctaBySlug[service.slug]?.title ??
          `Talk to us about ${service.title.toLowerCase()}`
        }
        description={
          ctaBySlug[service.slug]?.description ??
          'Share your requirements and timeline. We will respond with the next practical steps and the documents needed to proceed.'
        }
      />
    </main>
  )
}
