import PageHero from '../../components/PageHero'
import FadeIn from '../../components/FadeIn'
import PageCTA from '../../components/PageCTA'

const faqs = [
  {
    q: 'What services do you provide?',
    a: 'We support company formation, business setup, licensing coordination, PRO services, visas, accounting, consultancy, IT services, and selected corporate support requirements.',
  },
  {
    q: 'Can you help me choose the right setup option?',
    a: 'Yes. We compare mainland, free zone, offshore, and branch options against your activity, ownership needs, budget, market access, and timeline so you can choose a practical route.',
  },
  {
    q: 'Do you support visas and PRO services?',
    a: 'Yes. We coordinate visa and PRO services as part of business setup support, including document preparation, submission tracking, authority follow-ups, and handover support.',
  },
  {
    q: 'Do you provide accounting and payroll support?',
    a: 'Yes. Based on your requirements, we can support bookkeeping, payroll, VAT readiness, audit preparation, reporting, and banking documentation while maintaining confidentiality and accuracy.',
  },
  {
    q: 'Do you support businesses expanding across the region?',
    a: 'Yes. As a UAE-rooted business services partner, we support clients assessing opportunities across the GCC and wider Middle East, including Egypt, with country-aware planning and practical advisory support.',
  },
  {
    q: 'How do I request a consultation?',
    a: 'Use the contact form on our Contact page or call us directly. Share your goals, current stage, and timeline and we will respond with practical next steps.',
  },
]

export default function FAQsPage() {
  return (
    <main>
      <PageHero
        badge="Help center"
        title="FAQs"
        subtitle="Quick answers to common questions about company formation, business setup, PRO coordination, accounting support, consultancy, regional expansion, and IT services."
        image="/hero-main1.jpg"
      />

      <section className="py-20 md:py-28 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.05)] overflow-hidden">
                {faqs.map((item, idx) => (
                  <details
                    key={item.q}
                    className={`group px-7 md:px-10 py-6 ${idx !== 0 ? 'border-t border-gray-100' : ''}`}
                  >
                    <summary className="list-none cursor-pointer flex items-center justify-between gap-6">
                      <span className="text-[16px] md:text-[17px] font-bold text-gray-900 tracking-tight">
                        {item.q}
                      </span>
                      <span className="shrink-0 w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 text-[14.5px] text-gray-600 leading-relaxed font-medium">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PageCTA
        title="Still have questions?"
        description="Share your requirement and we will respond with a clear recommendation, document checklist, and next steps."
      />
    </main>
  )
}
