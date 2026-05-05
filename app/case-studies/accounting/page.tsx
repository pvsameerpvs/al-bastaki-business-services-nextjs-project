import PageHero from '../../../components/PageHero'
import PageCTA from '../../../components/PageCTA'
import CaseStudiesSection from '../../../components/CaseStudiesSection'

import { caseStudies } from '../../../lib/caseStudies'

export default function AccountingCaseStudiesPage() {
  const items = caseStudies.filter((c) => c.category === 'Accounting')

  return (
    <main>
      <PageHero
        badge="Case studies"
        title="Accounting Cases"
        subtitle="Highlights across bookkeeping, payroll support, VAT-related coordination, audit preparation, and reporting, built around confidentiality and accuracy."
        image="/stats-image.jpg"
      />

      <CaseStudiesSection
        title="Accounting highlights"
        description="Examples of accounting support shaped around business requirements, with accuracy, confidentiality, and reporting discipline as priorities."
        items={items}
      />

      <PageCTA
        title="Need accounting support with stronger control?"
        description="Share your requirements and we will recommend a practical accounting, payroll, VAT, or reporting scope for your business."
      />
    </main>
  )
}
