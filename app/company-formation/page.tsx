import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import CompanyFormationOptions from '../../components/CompanyFormationOptions'
import ServiceLeadFormCard from '../../components/ServiceLeadFormCard'

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

      {/* ── INTRO + FORM SECTION (right after hero) ── */}
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
                Form your company<br className="hidden sm:block" /> the right way
              </h2>
              <p className="mt-4 text-[14.5px] text-gray-500 leading-relaxed font-medium max-w-[58ch]">
                We guide you through the right legal framework, compare your options, and handle the documentation and coordination — so setup is compliant, predictable, and on time.
              </p>
              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Jurisdiction guidance', text: 'Mainland, freezone, or offshore — we help you choose the right fit.' },
                  { title: 'Option evaluation', text: 'We compare routes with clear trade-offs and compliance points.' },
                  { title: 'Document coordination', text: 'Structured checklists and submission support from day one.' },
                  { title: 'End-to-end delivery', text: 'Clear steps and timelines from first call to final handover.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-[#F7F9FC] border border-gray-100 px-5 py-4">
                    <div className="text-[13.5px] font-bold text-gray-900">{item.title}</div>
                    <div className="mt-1 text-[13px] text-gray-500 font-medium leading-relaxed">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — compact form (sticky on desktop) */}
            <div className="md:sticky md:top-24">
              <ServiceLeadFormCard
                compact
                title="Start your company formation"
                description="Tell us your activity and preferred jurisdiction."
                services={[
                  'Dubai Business Setup',
                  'Freezone Company Setup',
                  'Offshore Company Setup',
                  'Branch of Foreign Company',
                  'Other',
                ]}
              />
            </div>

          </div>
        </div>
      </section>

      <CompanyFormationOptions />

      {service && (
        <ServiceDetailSections
          intro={service.intro}
          keyPoints={service.keyPoints}
          deliverables={service.deliverables}
          images={service.images}
        />
      )}

      <PageCTA
        title="Start your company formation with clarity"
        description="Share your activity, preferred jurisdiction, and timeline. We will respond with a practical route, document checklist, and the next steps to proceed."
      />
    </main>
  )
}
