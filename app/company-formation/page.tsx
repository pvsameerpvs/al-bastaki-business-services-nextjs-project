import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import CompanyFormationOptions from '../../components/CompanyFormationOptions'
import ServiceLeadFormCard from '../../components/ServiceLeadFormCard'

import { getService } from '../../lib/services'
import { focusTabsContentBySlug, ctaBySlug } from '../../lib/service-detail-page-content'

export const metadata = {
  title: 'Company Formation | Al Bastaki Business Services LLC',
  description:
    'Company formation support in Dubai and the UAE from a trusted corporate services partner. Compare mainland, free zone, offshore, and branch routes with clear documentation and authority coordination.',
}

export default function CompanyFormationPage() {
  const service = getService('company-formation')

  const ctaContent = ctaBySlug['company-formation']

  return (
    <main>
      <PageHero
        badge="Company formation"
        title={service?.title ?? 'Company Formation'}
        subtitle={
          service?.subtitle ??
          'Establish the right legal structure in the UAE with jurisdiction guidance, compliant documentation, and end-to-end authority coordination.'
        }
        image={service?.coverImage ?? '/hero-main1.jpg'}
      />

      {/* OVERVIEW SECTION AT THE TOP */}
      {service && (
        <ServiceDetailSections
          intro={service.intro}
          keyPoints={service.keyPoints}
          deliverables={service.deliverables}
        />
      )}

      {/* OPTIONS SECTION */}
      <CompanyFormationOptions />



      {/* ── ACTION PLAN + FORM SECTION ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <div className="grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">
            
            {/* LEFT — content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-primary" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-gray-400 uppercase">Action Plan</span>
              </div>
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#1a2744] tracking-tight leading-[1.2]">
                Begin with the right<br className="hidden sm:block" /> structure
              </h2>
              <p className="mt-4 text-[14.5px] text-gray-500 leading-relaxed font-medium max-w-[58ch]">
                Every successful formation starts with clarity. Submit your activity and ownership needs, and our team will recommend the most effective route forward.
              </p>
            </div>

            {/* RIGHT — compact form */}
            <div>
              <ServiceLeadFormCard
                compact
                title="Start your company formation"
                description="Tell us your activity, ownership needs, and preferred route."
                services={[
                  'Company Formation',
                  'Dubai Business Setup',
                  'Free Zone Company Setup',
                  'Offshore Company Setup',
                  'Branch of Foreign Company',
                  'Other',
                ]}
                defaultService="Company Formation"
              />
            </div>

          </div>
        </div>
      </section>

      {ctaContent && (
        <PageCTA
          title={ctaContent.title}
          description={ctaContent.description}
        />
      )}
    </main>
  )
}
