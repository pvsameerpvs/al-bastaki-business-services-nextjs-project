import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'
import ServiceLeadFormCard from '../../components/ServiceLeadFormCard'

import { getService } from '../../lib/services'
import { focusTabsContentBySlug, ctaBySlug } from '../../lib/service-detail-page-content'

export const metadata = {
  title: 'IT Services | Al Bastaki Business Services LLC',
  description:
    'IT services in Dubai and the UAE: web design, portals, software scope, content workflows, social media app support, and digital delivery for business growth.',
}

export default function ITPage() {
  const service = getService('it')
  const tabsContent = focusTabsContentBySlug['it']
  const ctaContent = ctaBySlug['it']

  return (
    <main>
      <PageHero
        badge="IT services"
        title={service?.title ?? 'IT Services'}
        subtitle={
          service?.subtitle ??
          'Website design, portals, software, and digital content built to strengthen your business credibility, reach, and operational efficiency.'
        }
        image={service?.coverImage ?? '/hero-main1.jpg'}
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
                Build a digital presence<br className="hidden sm:block" /> that performs
              </h2>
              <p className="mt-4 text-[14.5px] text-gray-500 leading-relaxed font-medium max-w-[58ch]">
                We deliver technical solutions with clear business intent. Share your requirements, and we will scope the deliverables, timelines, and milestones required for a successful launch.
              </p>
            </div>

            {/* RIGHT — compact form */}
            <div>
              <ServiceLeadFormCard
                compact
                title="Build a digital solution with us"
                description="Tell us the outcome, audience, and platform you need."
                services={[
                  'IT Services',
                  'Web Designing',
                  'Software Design',
                  'Portal Development',
                  'Social Media App',
                  'Internet Content',
                  'Other',
                ]}
                defaultService="IT Services"
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
