import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import CaseStudiesSection from '../../components/CaseStudiesSection'

import { caseStudies } from '../../lib/caseStudies'

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        badge="Selected work"
        title="Case Studies"
        subtitle="A view into the service areas we support — from business setup coordination to accounting and compliance-related work."
        image="/hero-main2.jpg"
      />

      <CaseStudiesSection
        title="Practical outcomes across setup and support"
        description="These highlights reflect the type of work we coordinate and deliver: structured processes, clear documentation, and dependable follow-ups."
        items={caseStudies}
      />

      <PageCTA
        title="Want a tailored plan for your business?"
        description="Share your setup requirements and we will outline the most practical steps and service scope."
      />
    </main>
  )
}
