import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'
import ServiceLeadFormCard from '../../components/ServiceLeadFormCard'

import { getService } from '../../lib/services'
import { focusTabsContentBySlug, ctaBySlug } from '../../lib/service-detail-page-content'

export const metadata = {
  title: 'Consultancy Services | Al Bastaki Business Services LLC',
  description:
    'Consultancy services in Dubai, the UAE, and the wider region: feasibility studies, market-entry planning, management advisory, facilities planning, and practical decision support.',
}

export default function ConsultancyPage() {
  const service = getService('consultancy')
  const tabsContent = focusTabsContentBySlug['consultancy']
  const ctaContent = ctaBySlug['consultancy']

  return (
    <main>
      <PageHero
        badge="Consultancy"
        title={service?.title ?? 'Consultancy Services'}
        subtitle={
          service?.subtitle ??
          'Senior-led advisory for market entry, feasibility, management, and growth decisions — grounded in UAE and regional business reality.'
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
                Structure your decision<br className="hidden sm:block" /> with clarity
              </h2>
              <p className="mt-4 text-[14.5px] text-gray-500 leading-relaxed font-medium max-w-[58ch]">
                Every engagement begins with a clear understanding of your goals. Outline the market or operational decision you are facing, and our team will prepare a structured advisory framework.
              </p>
            </div>

            {/* RIGHT — compact form */}
            <div>
              <ServiceLeadFormCard
                compact
                title="Talk to our consultancy team"
                description="Tell us the decision, market, and timeline."
                services={[
                  'Consultancy Services',
                  'Feasibility Studies',
                  'Marketing Management',
                  'Facilities Resource Planning',
                  'Management Services',
                  'Facilities Management',
                  'Other',
                ]}
                defaultService="Consultancy Services"
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
