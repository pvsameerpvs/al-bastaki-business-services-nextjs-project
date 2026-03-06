import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'

import { getService } from '../../lib/services'

export const metadata = {
  title: 'Accounting Services | Al Bastaki Business Services LLC',
  description:
    'Accounting and bookkeeping services in Dubai and the UAE: accurate reporting, payroll support, VAT coordination, and practical controls for better decision-making.',
}

export default function AccountingPage() {
  const service = getService('accounting')

  return (
    <main>
      <PageHero
        badge="Accounting"
        title={service?.title ?? 'Accounting Services'}
        subtitle={
          service?.subtitle ??
          'Practical accounting support with confidentiality, accuracy, and reliable reporting for decision-making.'
        }
        image={service?.coverImage ?? '/stats-image.jpg'}
      />

      <ServiceFocusTabs
        eyebrow="Accounting scope"
        title="Clean records, reliable reporting, and practical support"
        description="We help you stay organized with consistent bookkeeping, clear reporting, and structured support for common accounting requirements. Pick a focus area to see what we typically cover."
        sideCards={[
          { title: 'Confidentiality', text: 'We treat financial data with care and discipline.' },
          { title: 'Accuracy', text: 'Processes designed to reduce mistakes and surprises.' },
          { title: 'Clarity', text: 'Reporting built for decisions, not just compliance.' },
          { title: 'Consistency', text: 'Repeatable monthly cycles and clean handovers.' },
        ]}
        tabs={[
          {
            key: 'bookkeeping',
            label: 'Bookkeeping',
            kicker: 'Monthly financial hygiene',
            description:
              'We keep records structured and consistent so reporting stays dependable and audit-ready.',
            bullets: [
              'Clean categorization and structured documentation',
              'Monthly close support and reconciliations',
              'Reliable reporting for owners and managers',
              'Clear handover and file organization',
            ],
            meta: [
              { label: 'Best for', value: 'SMEs that need consistent monthly books' },
              { label: 'Output', value: 'Organized records and practical reports' },
            ],
          },
          {
            key: 'payroll',
            label: 'Payroll',
            kicker: 'Accurate and on-time',
            description:
              'We support payroll-related accounting needs with a structured process and clear timelines.',
            bullets: [
              'Payroll cycle coordination and documentation checks',
              'Consistency across recurring payroll steps',
              'Clear monthly handover and reporting',
              'Support aligned to your internal approval flow',
            ],
            meta: [
              { label: 'Best for', value: 'Teams that want a dependable payroll rhythm' },
              { label: 'Output', value: 'A predictable cycle with clear documentation' },
            ],
          },
          {
            key: 'vat',
            label: 'VAT Support',
            kicker: 'Structured requirements',
            description:
              'We help keep VAT-related documentation and reporting organized around your business needs.',
            bullets: [
              'Document checklist and organization support',
              'Process coordination and timeline planning',
              'Clear inputs needed from your team',
              'Clean archiving for reference and continuity',
            ],
            meta: [
              { label: 'Best for', value: 'Businesses that want structured VAT readiness' },
              { label: 'Output', value: 'Organized documentation and clear reporting inputs' },
            ],
          },
          {
            key: 'audit',
            label: 'Audit Support',
            kicker: 'Stay prepared',
            description:
              'We help you keep records tidy and provide the supporting documentation needed for audit processes.',
            bullets: [
              'Organized records and supporting documentation',
              'Clear requests list and handover structure',
              'Consistent reporting formats',
              'Practical follow-ups and coordination',
            ],
            meta: [
              { label: 'Best for', value: 'Companies that need audit-ready organization' },
              { label: 'Output', value: 'Structured files and smoother audit coordination' },
            ],
          },
          {
            key: 'banking',
            label: 'Bank Account Opening',
            kicker: 'Organized documentation',
            description:
              'We support document preparation and coordination to keep the process organized and efficient.',
            bullets: [
              'Checklist of common documentation needs',
              'Document organization and submission readiness',
              'Timeline planning and follow-ups',
              'Clear next steps and handover',
            ],
            meta: [
              { label: 'Best for', value: 'New businesses preparing banking documentation' },
              { label: 'Output', value: 'A clean, structured document pack' },
            ],
          },
        ]}
      />

      {service && (
        <ServiceDetailSections
          intro={service.intro}
          keyPoints={service.keyPoints}
          deliverables={service.deliverables}
        />
      )}

      <PageCTA
        title="Get accounting support that stays practical"
        description="Share your business size and reporting needs. We will recommend a scope and the next steps to start cleanly."
      />
    </main>
  )
}
