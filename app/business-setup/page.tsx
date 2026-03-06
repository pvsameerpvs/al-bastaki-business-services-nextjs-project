import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'

import { getService } from '../../lib/services'

export const metadata = {
  title: 'Business Setup | Al Bastaki Business Services LLC',
  description:
    'Business setup support in Dubai and the UAE: registration coordination, PRO services, visas, amendments, and corporate services delivered with clear steps and reliable turnaround.',
}

export default function BusinessSetupPage() {
  const service = getService('business-setup')

  return (
    <main>
      <PageHero
        badge="Business setup"
        title={service?.title ?? 'Business Setup'}
        subtitle={
          service?.subtitle ??
          'Registration, PRO, and corporate services delivered with clarity, control, and reliable turnaround.'
        }
        image={service?.coverImage ?? '/hero-main2.jpg'}
      />

      <ServiceFocusTabs
        eyebrow="What we handle"
        title="Registration, PRO, and corporate services without friction"
        description="We organize the moving parts across registration and corporate services so your setup stays compliant and predictable. Pick a focus area to see how we work and what is typically included."
        sideCards={[
          {
            title: 'Fewer delays',
            text: 'Structured follow-ups and clean submissions reduce back-and-forth.',
          },
          {
            title: 'Clear checklists',
            text: 'We keep documentation requirements explicit and track status end to end.',
          },
          {
            title: 'Practical timelines',
            text: 'We align the scope to your constraints and coordinate the next steps.',
          },
          {
            title: 'Ongoing support',
            text: 'Renewals, amendments, and corporate services when you need them.',
          },
        ]}
        tabs={[
          {
            key: 'pro',
            label: 'PRO Services',
            kicker: 'Coordination and follow-ups',
            description:
              'We manage submissions and authority coordination with a structured checklist and practical timelines.',
            bullets: [
              'Document collection, reviews, and organization',
              'Submission coordination and tracking',
              'Clear status updates and next-step planning',
              'Support for common corporate service requests',
            ],
            meta: [
              { label: 'Best for', value: 'Teams that want predictable admin execution' },
              { label: 'Output', value: 'Clean submissions and tracked progress' },
            ],
          },
          {
            key: 'visas',
            label: 'Visa Processing',
            kicker: 'Step-by-step guidance',
            description:
              'We coordinate the process and required documents so your visa-related steps move forward smoothly.',
            bullets: [
              'Document checklist and preparation support',
              'Process coordination and follow-ups',
              'Timeline planning around your onboarding needs',
              'Practical guidance on next steps and handover',
            ],
            meta: [
              { label: 'Best for', value: 'Founders hiring or relocating teams' },
              { label: 'Output', value: 'A tracked process with clear requirements' },
            ],
          },
          {
            key: 'amendments',
            label: 'Amendments',
            kicker: 'Keep changes compliant',
            description:
              'When your company evolves, we help structure amendments and submissions to keep records accurate.',
            bullets: [
              'Change assessment and documentation checklist',
              'Submission coordination and progress tracking',
              'Clear guidance on approvals and dependencies',
              'Handover of updated documents and confirmations',
            ],
            meta: [
              { label: 'Best for', value: 'Companies updating details or scope' },
              { label: 'Output', value: 'Updated records with an audit-friendly trail' },
            ],
          },
          {
            key: 'trademark',
            label: 'Trademark',
            kicker: 'Brand protection support',
            description:
              'We coordinate the submission flow and documentation structure required for trademark registration steps.',
            bullets: [
              'Structured requirements and document preparation',
              'Submission coordination and follow-ups',
              'Clear milestones and timeline expectations',
              'Handover and next-step support where needed',
            ],
            meta: [
              { label: 'Best for', value: 'Brands formalizing protection early' },
              { label: 'Output', value: 'A coordinated process with tracked milestones' },
            ],
          },
          {
            key: 'liquidation',
            label: 'Liquidation',
            kicker: 'Structured close-out',
            description:
              'We help keep close-out steps organized, documented, and coordinated to reduce confusion and delays.',
            bullets: [
              'Checklist creation based on your scenario',
              'Document organization and submission coordination',
              'Follow-ups and approval tracking',
              'Final handover and closure confirmations',
            ],
            meta: [
              { label: 'Best for', value: 'Businesses planning an orderly exit' },
              { label: 'Output', value: 'A clear plan and tracked close-out progress' },
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
        title="Plan your business setup the right way"
        description="Tell us your activity and timeline. We will respond with a practical checklist and the next steps to move forward."
      />
    </main>
  )
}
