import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'
import ServiceLeadFormCard from '../../components/ServiceLeadFormCard'

import { getService } from '../../lib/services'
import { focusTabsContentBySlug, ctaBySlug } from '../../lib/service-detail-page-content'

export const metadata = {
  title: 'Accounting Services | Al Bastaki Business Services LLC',
  description:
    'Accounting and bookkeeping services in Dubai and the UAE: confidential records, payroll support, VAT coordination, audit preparation, banking documentation, and reliable reporting for better control.',
}

export default function AccountingPage() {
  const service = getService('accounting')
  const tabsContent = focusTabsContentBySlug['accounting']
  const ctaContent = ctaBySlug['accounting']

  return (
    <main>
      <PageHero
        badge="Accounting"
        title={service?.title ?? 'Accounting Services'}
        subtitle={
          service?.subtitle ??
          'Confidential accounting, bookkeeping, payroll, VAT, and audit support — giving owners and managers complete financial clarity.'
        }
        image={service?.coverImage ?? '/stats-image.jpg'}
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
                Control your finances<br className="hidden sm:block" /> from day one
              </h2>
              <p className="mt-4 text-[14.5px] text-gray-500 leading-relaxed font-medium max-w-[58ch]">
                Financial discipline requires the right processes. Provide your details and we will recommend a reporting cycle and accounting scope aligned to your needs.
              </p>
            </div>

            {/* RIGHT — compact form */}
            <div>
              <ServiceLeadFormCard
                compact
                title="Get accounting support"
                description="Share your records, reporting needs, and current priorities."
                services={[
                  'Accounting Services',
                  'Accounting & Bookkeeping',
                  'Payroll',
                  'VAT Support',
                  'Audit Support',
                  'Bank Account Opening',
                  'Other',
                ]}
                defaultService="Accounting Services"
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
