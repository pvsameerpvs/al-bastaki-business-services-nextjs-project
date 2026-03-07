import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'
import ServiceLeadFormCard from '../../components/ServiceLeadFormCard'

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

      {/* ── INTRO + FORM SECTION (after hero) ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <div className="grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">

            {/* LEFT — content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-primary" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-gray-400 uppercase">Why us</span>
              </div>
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#1a2744] tracking-tight leading-[1.2]">
                Setup done right,<br className="hidden sm:block" /> without the friction
              </h2>
              <p className="mt-4 text-[14.5px] text-gray-500 leading-relaxed font-medium max-w-[58ch]">
                We organize submissions, follow up with authorities, and keep your business setup on track with clear documentation and reliable turnaround.
              </p>
              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Fewer delays', text: 'Structured follow-ups and clean submissions reduce back-and-forth.' },
                  { title: 'Clear checklists', text: 'Documentation requirements are explicit and tracked end to end.' },
                  { title: 'Practical timelines', text: 'Aligned to your constraints with coordinated next steps.' },
                  { title: 'Ongoing support', text: 'Renewals, amendments, and corporate services when you need them.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-[#F7F9FC] border border-gray-100 px-5 py-4">
                    <div className="text-[13.5px] font-bold text-gray-900">{item.title}</div>
                    <div className="mt-1 text-[13px] text-gray-500 font-medium leading-relaxed">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — compact form */}
            <div className="md:sticky md:top-24">
              <ServiceLeadFormCard
                compact
                title="Start your business setup"
                description="Tell us your activity and timeline."
                services={[
                  'Company Setup',
                  'PRO Services',
                  'Visa Processing',
                  'Amendments & Registration',
                  'Trademark Registration',
                  'Company Liquidation',
                  'Other',
                ]}
              />
            </div>

          </div>
        </div>
      </section>

      <ServiceFocusTabs
        eyebrow="What we handle"
        title="Registration, PRO, and corporate services without friction"
        description="We organize the moving parts across registration and corporate services so your setup stays compliant and predictable. Pick a focus area to see how we work and what is typically included."
        sideCards={[
          { title: 'Fewer delays', text: 'Structured follow-ups and clean submissions reduce back-and-forth.' },
          { title: 'Clear checklists', text: 'We keep documentation requirements explicit and track status end to end.' },
          { title: 'Practical timelines', text: 'We align the scope to your constraints and coordinate the next steps.' },
          { title: 'Ongoing support', text: 'Renewals, amendments, and corporate services when you need them.' },
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
          images={service.images}
        />
      )}

      <PageCTA
        title="Plan your business setup the right way"
        description="Tell us your activity and timeline. We will respond with a practical checklist and the next steps to move forward."
      />
    </main>
  )
}
