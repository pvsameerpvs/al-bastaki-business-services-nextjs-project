import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import FadeIn from '../../components/FadeIn'

const testimonials = [
  {
    quote:
      '"Excellent consulting services and a smooth company setup process."',
    name: 'Dubai Client',
    meta: 'Business setup engagement',
  },
  {
    quote:
      '"Clear steps, fast turnaround, and compliant execution from start to finish."',
    name: 'UAE SME Owner',
    meta: 'Formation and PRO support',
  },
  {
    quote:
      '"Confidential, accurate support that made our accounting and payroll easier to manage."',
    name: 'Operations Manager',
    meta: 'Accounting services',
  },
  {
    quote:
      '"They listen first — our goals shaped the strategy and the execution was consistent."',
    name: 'Founder',
    meta: 'Consultancy services',
  },
]

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        badge="Client feedback"
        title="Testimonials"
        subtitle="Client experiences that reflect our focus: clarity, compliance, and dependable delivery across setup and support services."
        image="/hero-main2.jpg"
      />

      <section className="py-20 md:py-28 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="mb-12 md:mb-16 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start gap-4 md:gap-16">
            <div className="md:w-1/4 pt-1 md:pt-3 text-left">
              <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                WHAT CLIENTS SAY
              </span>
            </div>
            <div className="md:w-3/4 text-left">
              <p className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.4] tracking-tight">
                We aim for straightforward communication, structured execution, and outcomes you can rely on.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t, idx) => (
              <FadeIn key={t.name + idx} delay={idx * 0.08}>
                <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] transition-shadow">
                  <div className="text-primary text-[44px] leading-none font-bold tracking-tight">“</div>
                  <p className="mt-4 text-[16px] md:text-[17px] text-gray-800 leading-relaxed font-medium">
                    {t.quote}
                  </p>
                  <div className="mt-8 flex items-center justify-between gap-6">
                    <div>
                      <div className="font-bold text-gray-900 text-[14.5px]">{t.name}</div>
                      <div className="text-[13px] text-gray-500 font-medium mt-1">
                        {t.meta}
                      </div>
                    </div>
                    <div className="flex text-yellow-400 text-[13px] gap-[2px] select-none" aria-hidden="true">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Want a similar experience?"
        description="Share your requirements and we will respond with a clear plan and the next practical steps."
      />
    </main>
  )
}
