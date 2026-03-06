import PageHero from '../../components/PageHero'
import AboutTimeline from '../../components/AboutTimeline'
import AboutStats from '../../components/AboutStats'
import PageCTA from '../../components/PageCTA'
import FadeIn from '../../components/FadeIn'
import ClientsAndAgencies from '../../components/ClientsAndAgencies'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Al Bastaki"
        subtitle="Al Bastaki Business Services was incorporated in 2000 to support corporate venturing and management advisory. Today, we help companies and individuals establish a compliant commercial presence in Dubai and across the UAE."
        image="/about-al-bastaki.jpg"
      />

      <AboutTimeline />

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[60px]" />
          <div className="absolute bottom-[-120px] left-[-120px] w-[520px] h-[520px] rounded-full bg-[#00223E]/10 blur-[70px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative">
          <div className="mb-12 md:mb-16 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start gap-4 md:gap-16">
            <div className="md:w-1/4 pt-1 md:pt-3 text-left">
              <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                COMPANY OVERVIEW
              </span>
            </div>
            <div className="md:w-3/4 text-left">
              <FadeIn>
                <h2 className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.4] tracking-tight">
                  Corporate venturing and management advisory,
                  <span className="text-[#2d3748]/70">
                    {' '}
                    built for businesses establishing in Dubai and the UAE.
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-6 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[78ch]">
                  Al Bastaki Business Services was incorporated in 2000 to carry on business as a corporate venturing and management advisory company.
                  We specialize in business services for companies and individuals establishing a commercial presence in Dubai and the UAE.
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="mt-4 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[78ch]">
                  We offer a complete range of business setup services including licensing, PRO, business management services, company formation services,
                  accounting, industry insights, and strategic consultancy.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    'Licensing',
                    'PRO Services',
                    'Business Management',
                    'Company Formation',
                    'Accounting',
                    'Strategic Consultancy',
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-primary/10 border border-primary/10 px-3.5 py-2 text-[13px] font-semibold text-[#003B62]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8">
            <FadeIn>
              <div className="bg-[#00223E] text-white rounded-[2rem] p-8 md:p-10 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.2)] overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-44 h-36 bg-white/10 blur-[55px] rounded-full pointer-events-none" />

                <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-white/70 uppercase">
                  Important note
                </div>
                <h3 className="mt-5 text-[22px] md:text-[28px] font-bold tracking-tight leading-[1.2]">
                  Local partner or agent requirement
                </h3>
                <p className="mt-4 text-[14.5px] md:text-[15.5px] text-white/75 leading-relaxed font-medium">
                  For many foreign companies, it is necessary to have a UAE citizen as a partner or agent.
                  We guide you through what is required for your situation and help you plan the right structure from the start.
                </p>

                <div className="mt-7 inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3.5 py-2 text-[13px] font-semibold text-white/90">
                  Clear steps. Compliant execution.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="bg-[#F9FAFB] rounded-[2rem] p-8 md:p-10 border border-gray-100">
                <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                  Why planning matters
                </div>
                <h3 className="mt-5 text-[22px] md:text-[28px] font-bold tracking-tight text-gray-900 leading-[1.2]">
                  Reduce risk with stronger preparation
                </h3>
                <p className="mt-4 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium">
                  Unfortunately, we see businesses fail too often due to poor planning.
                  As part of our business advisory services, we take a structured approach so you are prepared and positioned for long-term success.
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Strengths', tone: 'bg-primary/10 text-primary' },
                    { label: 'Weaknesses', tone: 'bg-[#00223E]/10 text-[#00223E]' },
                    { label: 'Opportunities', tone: 'bg-primary/10 text-primary' },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className={`rounded-2xl px-4 py-4 text-[13px] font-bold tracking-tight ${b.tone}`}
                    >
                      {b.label}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.16} className="mt-10 md:mt-14">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_25px_70px_rgba(0,0,0,0.06)]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-start">
                <div>
                  <div className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                    Advisory approach
                  </div>
                  <h3 className="mt-6 text-[26px] md:text-[32px] font-bold tracking-tight text-gray-900 leading-[1.2]">
                    Bulletproof your business
                  </h3>
                  <p className="mt-4 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium">
                    We conduct an in-depth analysis of your business strengths, weaknesses, and opportunities.
                    Our specialists provide strategic advice, practical solutions, and best-practice processes to ensure you remain compliant,
                    competitive, and successful.
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/services"
                      className="flex items-center group cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform w-fit"
                    >
                      <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-primary/10 text-primary z-10 relative group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span className="flex items-center h-[52px] pl-10 pr-8 rounded-full bg-primary/10 text-primary font-bold -ml-6 relative transition-colors duration-300 group-hover:bg-primary/20">
                        Explore our services
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="rounded-[1.75rem] overflow-hidden border border-gray-100 bg-lightGrey">
                  <div className="relative w-full aspect-[16/10]">
                    <img
                      src="/bulletproof-your-business.jpg"
                      alt="Business advisory"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  </div>
                  <div className="p-7 md:p-8">
                    <div className="flex items-center gap-3 text-[13px] font-semibold text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      What sets us apart
                    </div>
                    <p className="mt-4 text-[14.5px] text-gray-700 leading-relaxed font-medium">
                      Our business services specialists are known for exceptional personal service.
                      We build strong relationships with clients, whether the organization is large or small.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <AboutStats />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <FadeIn>
              <div className="bg-[#F9FAFB] rounded-[2rem] p-8 md:p-10 border border-gray-100">
                <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                  Mission
                </div>
                <h2 className="mt-5 text-[24px] md:text-[30px] font-bold tracking-tight text-gray-900 leading-[1.2]">
                  Financial clarity and strategic direction
                </h2>
                <p className="mt-4 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium">
                  We help businesses set up and operate with confidence by simplifying complex processes, keeping execution compliant, and providing structured support that reduces delays and uncertainty.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="bg-[#00223E] rounded-[2rem] p-8 md:p-10 border border-white/10 text-white shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
                <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-white/70 uppercase">
                  Vision
                </div>
                <h2 className="mt-5 text-[24px] md:text-[30px] font-bold tracking-tight leading-[1.2]">
                  A trusted consultancy for modern businesses
                </h2>
                <p className="mt-4 text-[14.5px] md:text-[15.5px] text-white/75 leading-relaxed font-medium">
                  Continue to be recognized as a leading business setup consultancy in Dubai, trusted by thousands of clients, and known for clarity, control, and dependable delivery.
                </p>
                <div className="mt-7 inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3.5 py-2 text-[13px] font-semibold text-white/90">
                  Trusted by 2,250+ clients
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.18} className="mt-10 md:mt-14">
            <div className="bg-[#E6F0F6] rounded-[2rem] p-8 md:p-10 border border-white shadow-[0_25px_70px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="flex-1">
                  <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-[#003B62] uppercase">
                    Chairman message
                  </div>
                  <h3 className="mt-5 text-[24px] md:text-[30px] font-bold tracking-tight text-[#003B62] leading-[1.25]">
                    “We do not just process paperwork — we build better businesses.”
                  </h3>
                  <p className="mt-4 text-[14.5px] md:text-[15.5px] text-gray-700 leading-relaxed font-medium max-w-[70ch]">
                    Our focus is simple: clear guidance, compliant execution, and practical support that helps founders and teams move faster, reduce risk, and stay in control.
                  </p>
                </div>

                <div className="shrink-0 bg-white rounded-[1.5rem] p-6 md:p-7 border border-white/70 shadow-sm w-full lg:w-[360px]">
                  <div className="flex items-center gap-4">
                    
                    <div>
                      <div className="text-[13px] text-gray-600 font-medium mt-0.5">Founder & CEO</div>
                    </div>
                  </div>

                  <div className="mt-6 bg-primary hover:bg-primary/95 transition-colors text-white text-[12px] font-bold text-center py-[16px] uppercase tracking-[0.1em] rounded-[1.2rem] cursor-pointer shadow-md">
                    Call us: +971 4 123 4567
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ClientsAndAgencies />

      <PageCTA
        title="Build your setup with clarity and control"
        description="Tell us what you are planning and we will map the most practical steps for formation, licensing, PRO, and ongoing support."
      />
    </main>
  )
}
