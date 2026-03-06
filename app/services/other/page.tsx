import PageHero from '../../../components/PageHero'
import PageCTA from '../../../components/PageCTA'
import ServiceDetailSections from '../../../components/ServiceDetailSections'

import { getService } from '../../../lib/services'

export default function OtherServicesPage() {
  const service = getService('other')
  if (!service) return null

  return (
    <main>
      <PageHero
        badge="Additional services"
        title={service.title}
        subtitle={service.subtitle}
        image={service.coverImage}
      />

      <ServiceDetailSections
        intro={service.intro}
        keyPoints={service.keyPoints}
        deliverables={service.deliverables}
      />

      <PageCTA
        title="Need a custom support scope?"
        description="Tell us what you need and we will recommend the most practical next steps and the right service mix."
      />
    </main>
  )
}
