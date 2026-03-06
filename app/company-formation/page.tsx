import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import CompanyFormationOptions from '../../components/CompanyFormationOptions'

import { getService } from '../../lib/services'

export const metadata = {
  title: 'Company Formation | Al Bastaki Business Services LLC',
  description:
    'Company formation support in Dubai and the UAE. Compare setup routes, understand documentation requirements, and get end-to-end coordination from discovery to handover.',
}

export default function CompanyFormationPage() {
  const service = getService('company-formation')

  return (
    <main>
      <PageHero
        badge="Company formation"
        title={service?.title ?? 'Company Formation'}
        subtitle={
          service?.subtitle ??
          'Set up your business under the right legal framework with clear options, compliant execution, and end-to-end support.'
        }
        image={service?.coverImage ?? '/hero-main1.jpg'}
      />

      <CompanyFormationOptions />

      {service && (
        <ServiceDetailSections
          intro={service.intro}
          keyPoints={service.keyPoints}
          deliverables={service.deliverables}
        />
      )}

      <PageCTA
        title="Start your company formation with clarity"
        description="Share your activity, preferred jurisdiction, and timeline. We will respond with a practical route, document checklist, and the next steps to proceed."
      />
    </main>
  )
}
