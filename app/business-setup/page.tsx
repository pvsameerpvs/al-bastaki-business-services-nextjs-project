import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'
import ServiceLeadFormCard from '../../components/ServiceLeadFormCard'

import { getService } from '../../lib/services'
import { focusTabsContentBySlug, ctaBySlug } from '../../lib/service-detail-page-content'

export const metadata = {
  title: 'Business Setup | Al Bastaki Business Services LLC',
  description:
    'Business setup support in Dubai and the UAE from a leading corporate services partner: registration, licensing, PRO services, visas, amendments, and corporate services with reliable turnaround.',
}

export default function BusinessSetupPage() {
  const service = getService('business-setup')
  const tabsContent = focusTabsContentBySlug['business-setup']
  const ctaContent = ctaBySlug['business-setup']

  return (
    <main>
      <PageHero
        badge="Business setup"
        title={service?.title ?? 'Business Setup'}
        subtitle={
          service?.subtitle ??
          'End-to-end business setup in Dubai and the UAE — registration, licensing, PRO, visa, and corporate services executed with authority-facing discipline.'
        }
        image={service?.coverImage ?? '/hero-main2.jpg'}
      />

      {/* OVERVIEW SECTION AT THE TOP */}
      {service && (
        <ServiceDetailSections
          intro={service.intro}
          keyPoints={service.keyPoints}
          deliverables={service.deliverables}
          images={service.images}
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
                Execute your setup<br className="hidden sm:block" /> with certainty
              </h2>
              <p className="mt-4 text-[14.5px] text-gray-500 leading-relaxed font-medium max-w-[58ch]">
                Our team provides a clear path forward. Submit your requirements and we will structure the exact steps, documents, and timelines needed for your business.
              </p>
            </div>

            {/* RIGHT — compact form */}
            <div>
              <ServiceLeadFormCard
                compact
                title="Start your business setup"
                description="Tell us your activity, current stage, and target timeline."
                services={[
                  'Business Setup',
                  'Company Setup',
                  'PRO Services',
                  'Visa Processing',
                  'Amendments & Registration',
                  'Trademark Registration',
                  'Company Liquidation',
                  'Other',
                ]}
                defaultService="Business Setup"
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
