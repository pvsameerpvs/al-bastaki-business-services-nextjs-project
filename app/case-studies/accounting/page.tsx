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
        subtitle="Highlights across bookkeeping, payroll support, and VAT-related coordination — built around confidentiality and accuracy."
        image="/stats-image.jpg"
      />

      <CaseStudiesSection
        title="Accounting highlights"
        description="Examples of the accounting support we provide based on business requirements — with accuracy and confidentiality as a priority."
        items={items}
      />

      <PageCTA
        title="Need accounting support that stays precise?"
        description="Share your requirements and we will recommend a practical accounting scope for your business."
      />
    </main>
  )
}
