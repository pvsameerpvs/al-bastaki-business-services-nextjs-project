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
        subtitle="Highlights across formation support, registration coordination, amendments, and PRO-related workflows."
        image="/hero-main1.jpg"
      />

      <CaseStudiesSection
        title="Business setup highlights"
        description="Examples of the workflows we support through clear documentation, structured submissions, and coordinated follow-ups."
        items={items}
      />

      <PageCTA
        title="Planning a setup in the UAE?"
        description="Tell us your activity and timeline. We will guide you through the most practical route and steps."
      />
    </main>
  )
}
