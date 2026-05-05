import PageHero from '../../components/PageHero'
import AboutTimeline from '../../components/AboutTimeline'
import AboutStats from '../../components/AboutStats'
import PageCTA from '../../components/PageCTA'
import FadeIn from '../../components/FadeIn'
import ClientsAndAgencies from '../../components/ClientsAndAgencies'
import Link from 'next/link'

import { contactInfo } from '../../lib/contact'

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Al Bastaki"
        subtitle="Al Bastaki Business Services LLC is a premier, Dubai-based corporate services partner incorporated in 2000. We support companies and individuals establishing, managing, and expanding their commercial presence across the UAE and the wider Middle East, including Egypt."
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
  <span className="inline-block text-sm md:text-lg font-semibold tracking-widest text-gray-500 uppercase">
    COMPANY OVERVIEW
  </span>
</div>
            <div className="md:w-3/4 text-left">
              <FadeIn>
                <h2 className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.4] tracking-tight">
                  Premier corporate services and management advisory,
                  <span className="text-[#2d3748]/70">
                    {' '}
                    built for businesses operating in the UAE and expanding across the region.
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-6 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[78ch]">
                  Al Bastaki Business Services was incorporated in 2000 as a corporate venturing and management advisory company.
                  Today, we specialize in practical corporate services for founders, SMEs, family businesses, and international companies building a presence in Dubai, across the UAE, and throughout the wider Middle East.
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="mt-4 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[78ch]">
                  Our work covers company formation, licensing support, PRO coordination, business management services, accounting, regional advisory, IT support, and strategic consultancy tailored to each country, activity, and growth plan.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    'Licensing Support',
                    'PRO Services',
                    'Business Management',
                    'Company Formation',
                    'Accounting',
                    'Regional Consultancy',
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

        

  <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <FadeIn>
              <div className="bg-[#F9FAFB] rounded-[2rem] p-8 md:p-10 border border-gray-100">
                <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                  Mission
                </div>
                <h2 className="mt-5 text-[24px] md:text-[30px] font-bold tracking-tight text-gray-900 leading-[1.2]">
                  Clarity, compliance, and confident execution
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
                  A trusted UAE partner with regional reach
                </h2>
                <p className="mt-4 text-[14.5px] md:text-[15.5px] text-white/75 leading-relaxed font-medium">
                  Continue to be recognized as a leading business setup and corporate services partner in Dubai, trusted by clients across the UAE, GCC, and wider Middle East for clarity, control, and dependable delivery.
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

                  <h3 className="mt-5 text-[24px] md:text-[30px] font-bold tracking-tight text-[#003B62] leading-[1.25]">
                    “We do not just process paperwork — we help build stronger businesses.”
                  </h3>
                  <p className="mt-4 text-[14.5px] md:text-[15.5px] text-gray-700 leading-relaxed font-medium max-w-[70ch]">
                    Our focus is simple: clear guidance, compliant execution, and practical support that helps owners and teams move faster, reduce risk, and stay in control.
                  </p>
                </div>

                
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


         
        </div>
      </section>

   

    

      <ClientsAndAgencies />

      <PageCTA
        title="Build your setup with clarity and control"
        description="Tell us what you are planning and we will map the most practical steps for formation, licensing, PRO, accounting, and ongoing regional support."
      />
    </main>
  )
}
