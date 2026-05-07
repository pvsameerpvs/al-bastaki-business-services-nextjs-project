import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'
import ServiceLeadFormCard from '../../components/ServiceLeadFormCard'

import { getService } from '../../lib/services'
import { focusTabsContentBySlug, ctaBySlug } from '../../lib/service-detail-page-content'

export const metadata = {
  title: 'Trademark Registration | Al Bastaki Business Services LLC',
  description:
    'Protect your brand identity in Dubai and the UAE with structured trademark registration, availability searches, and Ministry of Economy filing coordination.',
}

export default function TrademarkPage() {
  const service = getService('trademark')
  const tabsContent = focusTabsContentBySlug['trademark']
  const ctaContent = ctaBySlug['trademark']

  return (
    <main>
      <PageHero
        badge="Trademark registration"
        title={service?.title ?? 'Trademark Registration'}
        subtitle={
          service?.subtitle ??
          'Protect your intellectual property, brand identity, and commercial assets in the UAE with structured Ministry of Economy filing and status tracking.'
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

      {/* TABS SECTION */}
      {tabsContent && (
        <ServiceFocusTabs
          eyebrow={tabsContent.eyebrow}
          title={tabsContent.title}
          description={tabsContent.description}
          sideCards={tabsContent.sideCards}
          tabs={tabsContent.tabs}
        />
      )}

      {/* ── ACTION PLAN + FORM SECTION ── */}
      <section className="py-14 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <div className="grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">
            
            {/* LEFT — content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-primary" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-gray-400 uppercase">Action Plan</span>
              </div>
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#1a2744] tracking-tight leading-[1.2]">
                Protect your brand<br className="hidden sm:block" /> with certainty
              </h2>
              <p className="mt-4 text-[14.5px] text-gray-500 leading-relaxed font-medium max-w-[58ch]">
                Trademark registration is a critical asset. Share your brand details and target classes, and we will coordinate a structured search and filing plan with the Ministry of Economy.
              </p>
            </div>

            {/* RIGHT — compact form */}
            <div>
              <ServiceLeadFormCard
                compact
                title="Formalize your brand protection"
                description="Tell us your brand name, activity, and current status."
                services={[
                  'Trademark Registration',
                  'Brand Search',
                  'Intellectual Property',
                  'Ministry Filing',
                  'Other',
                ]}
                defaultService="Trademark Registration"
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
