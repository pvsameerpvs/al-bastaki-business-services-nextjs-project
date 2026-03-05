
import { Rethink_Sans } from 'next/font/google'

const rethink = Rethink_Sans({ subsets: ['latin'] })

const cards = [
  {
    step: '01',
    title: 'Business Consultation',
    description:
      'We understand your goals, timeline, and budget, then recommend the best jurisdiction and license type.',
    points: ['Free zone vs mainland clarity', 'Activity selection & eligibility', 'Upfront cost + timeline'],
    tone: 'light' as const
  },
  {
    step: '02',
    title: 'Legal Setup & Licensing',
    description:
      'We handle the paperwork end-to-end: name approvals, MOA, licensing, and government submissions.',
    points: ['Fast approvals with PRO support', 'Bank-friendly structure', 'Compliance-first approach'],
    tone: 'dark' as const
  },
  {
    step: '03',
    title: 'Launch & Ongoing Support',
    description:
      'From visas and Emirates ID to accounting and renewals, we stay with you after incorporation.',
    points: ['Visa & establishment card', 'Accounting & corporate tax support', 'Renewals + admin services'],
    tone: 'primary' as const
  }
]

function CardIcon({ tone }: { tone: 'light' | 'dark' | 'primary' }) {
  const colorClass =
    tone === 'light'
      ? 'text-primary'
      : tone === 'dark'
        ? 'text-white'
        : 'text-white'

  return (
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tone === 'light' ? 'bg-primary/10' : 'bg-white/10'} ${colorClass}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <path d="M12 16v6" />
        <path d="M4.93 4.93l4.24 4.24" />
        <path d="M14.83 14.83l4.24 4.24" />
        <path d="M2 12h6" />
        <path d="M16 12h6" />
        <path d="M4.93 19.07l4.24-4.24" />
        <path d="M14.83 9.17l4.24-4.24" />
      </svg>
    </div>
  )
}

export default function Process() {
  return (
    <section className={`relative bg-lightGrey py-24 md:py-32 ${rethink.className}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[60px]" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[520px] h-[520px] rounded-full bg-[#00223E]/10 blur-[70px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative">
        <div className="">
          

          <div className="relative">
            <div className="relative">
              {cards.map((c, idx) => {
                const isLight = c.tone === 'light'
                const isDark = c.tone === 'dark'
                const isPrimary = c.tone === 'primary'

                const cardClass = isLight
                  ? 'bg-white border border-gray-100 text-gray-900'
                  : isDark
                    ? 'bg-[#00223E] border border-white/10 text-white'
                    : 'bg-primary border border-white/15 text-white'

                const subTextClass = isLight ? 'text-gray-600' : 'text-white/80'
                const pillClass = isLight
                  ? 'bg-primary/10 text-primary'
                  : isDark
                    ? 'bg-white/10 text-white'
                    : 'bg-white/15 text-white'

                const zClass = idx === 0 ? 'z-10' : idx === 1 ? 'z-20' : 'z-30'

                return (
                  <div key={c.step} className={`sticky top-24 md:top-28 ${zClass} mb-10 md:mb-14`}>
                    <div className={`rounded-[2.25rem] ${cardClass} shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden min-h-[64vh] md:min-h-[68vh] lg:min-h-[72vh] flex flex-col`}>
                      <div className="p-7 sm:p-8 md:p-10">
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <CardIcon tone={c.tone} />
                            <div className="flex flex-col">
                              <span className={`inline-flex w-fit px-3 py-1 rounded-full text-[12px] font-bold tracking-widest ${pillClass}`}>
                                STEP {c.step}
                              </span>
                              <h3 className="mt-4 text-[22px] md:text-[26px] font-bold tracking-tight leading-snug">
                                {c.title}
                              </h3>
                            </div>
                          </div>

                          <div className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl ${isLight ? 'bg-gray-50 border border-gray-100 text-gray-600' : 'bg-black/15 border border-white/10 text-white/90'}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>

                        <p className={`mt-6 text-[14.5px] md:text-[15.5px] leading-relaxed font-medium max-w-[62ch] ${subTextClass}`}>
                          {c.description}
                        </p>

                        <div className="mt-8 grid sm:grid-cols-3 gap-3">
                          {c.points.map((p) => (
                            <div
                              key={p}
                              className={`rounded-2xl px-4 py-4 text-[13px] font-semibold leading-snug ${
                                isLight
                                  ? 'bg-lightGrey text-gray-700 border border-gray-100'
                                  : isDark
                                    ? 'bg-[#001528] text-white/85 border border-white/10'
                                    : 'bg-white/10 text-white/90 border border-white/15'
                              }`}
                            >
                              {p}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`mt-auto h-2 ${isLight ? 'bg-gradient-to-r from-primary/30 via-primary/10 to-transparent' : isPrimary ? 'bg-gradient-to-r from-white/35 via-white/10 to-transparent' : 'bg-gradient-to-r from-primary/60 via-primary/20 to-transparent'}`} />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="h-24 md:h-32" />
          </div>
        </div>
      </div>
    </section>
  )
}
