import PageHero from '../../components/PageHero'
import About from '../../components/About'
import TimelineBar from '../../components/TimelineBar'
import Stats from '../../components/Stats'
import PageCTA from '../../components/PageCTA'
import FadeIn from '../../components/FadeIn'
import ClientsAndAgencies from '../../components/ClientsAndAgencies'

export default function AboutPage() {
  return (
    <main>
      <PageHero
        badge="Since 2005"
        title="About Al Bastaki"
        subtitle="Founded with a simple mission: empower businesses with financial clarity and strategic direction. Today, we support setup and ongoing operations for clients across the UAE."
        image="/hero-main1.jpg"
      />

      <TimelineBar />
      <About />
      <Stats />

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
                    <img
                      src="https://i.pravatar.cc/100?img=11"
                      alt="Ahmed Al Bastaki"
                      className="w-[54px] h-[54px] rounded-full border-2 border-white shadow-sm object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-[14px]">Ahmed Al Bastaki</div>
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
