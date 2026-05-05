import PageHero from '../../../components/PageHero'
import PageCTA from '../../../components/PageCTA'
import CaseStudiesSection from '../../../components/CaseStudiesSection'

import { caseStudies } from '../../../lib/caseStudies'

export default function BusinessSetupCaseStudiesPage() {
  const items = caseStudies.filter((c) => c.category === 'Business Setup')

  return (
    <main>
      <PageHero
        badge="Case studies"
        title="Business Setup Cases"
        subtitle="Highlights across company formation support, registration coordination, amendments, visas, and PRO-related workflows."
        image="/hero-main1.jpg"
      />

      <CaseStudiesSection
        title="Business setup highlights"
        description="Examples of workflows we support through clear documentation, structured submissions, coordinated authority follow-ups, and clean handovers."
        items={items}
      />

      <PageCTA
        title="Planning a setup in the UAE?"
        description="Tell us your activity, current stage, and timeline. We will guide you through the most practical route, documents, and steps."
      />
    </main>
  )
}
