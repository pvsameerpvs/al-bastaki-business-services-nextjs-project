import PageHero from '../../components/PageHero'
import FadeIn from '../../components/FadeIn'
import PageCTA from '../../components/PageCTA'
import ContactFormCard from '../../components/ContactFormCard'

import { contactInfo } from '../../lib/contact'

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Contact"
        title="Get in touch"
        subtitle="Share your requirements and we will respond with clear next steps for setup, licensing, PRO support, accounting, or consultancy."
        image="/hero-main2.jpg"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            <FadeIn>
              <div className="bg-[#F9FAFB] rounded-[2rem] p-8 md:p-10 border border-gray-100">
                <div className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                  Contact details
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">
                        Phone
                      </div>
                      <a
                        href={contactInfo.phoneHref}
                        className="mt-1 block text-[18px] font-bold tracking-tight text-gray-900 hover:text-primary transition-colors"
                      >
                        {contactInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">
                        Email
                      </div>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="mt-1 block text-[15.5px] font-semibold text-gray-900 hover:text-primary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">
                        Office
                      </div>
                      <div className="mt-1 text-[15.5px] font-semibold text-gray-900">
                        {contactInfo.locationShort}
                      </div>
                      <div className="mt-1 text-[13.5px] text-gray-600 font-medium leading-relaxed">
                        Share your exact location details and we will update this page with your full address.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M12 4h9" />
                        <path d="M4 9a4 4 0 0 1 4-4h4v14H8a4 4 0 0 1-4-4V9z" />
                        <path d="M12 5v14" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">
                        Website
                      </div>
                      <a
                        href={contactInfo.websiteHref}
                        className="mt-1 block text-[15.5px] font-semibold text-gray-900 hover:text-primary transition-colors"
                      >
                        {contactInfo.websiteDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <ContactFormCard />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <FadeIn>
            <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
              <div className="bg-[#00223E] text-white px-8 py-7 md:px-10">
                <div className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-white/70 uppercase">
                  Map
                </div>
                <h2 className="mt-3 text-[22px] md:text-[26px] font-bold tracking-tight">
                  Find us in Dubai
                </h2>
              </div>
              <div className="w-full aspect-[16/8] bg-gray-200">
                <iframe
                  title="Al Bastaki location"
                  src="https://www.google.com/maps?q=Dubai%20United%20Arab%20Emirates&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <PageCTA
        title="Prefer a quick call?"
        description="Reach out now and we will guide you through the next steps for your business setup or support request."
      />
    </main>
  )
}
