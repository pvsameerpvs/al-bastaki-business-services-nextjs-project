import FadeIn from './FadeIn'

type ServiceDetailSectionsProps = {
  intro: string
  keyPoints: string[]
  deliverables: string[]
}

const steps = [
  {
    step: '01',
    title: 'Discovery',
    text: 'We understand your activity, timeline, and constraints so the route is clear from day one.',
  },
  {
    step: '02',
    title: 'Documentation',
    text: 'We organize the required documents and keep everything structured for submission.',
  },
  {
    step: '03',
    title: 'Submission',
    text: 'We coordinate submissions and follow-ups to keep progress moving without unnecessary delays.',
  },
  {
    step: '04',
    title: 'Approvals',
    text: 'We track approvals and completion steps, keeping compliance and accuracy front and center.',
  },
  {
    step: '05',
    title: 'Handover',
    text: 'We finalize deliverables and support next steps for ongoing operations when needed.',
  },
]

export default function ServiceDetailSections({
  intro,
  keyPoints,
  deliverables,
}: ServiceDetailSectionsProps) {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-start">
            <FadeIn>
              <div>
                <div className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                  Overview
                </div>
                <p className="mt-6 text-[16px] md:text-[18px] text-gray-700 leading-relaxed font-medium max-w-[78ch]">
                  {intro}
                </p>

                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  {keyPoints.map((p) => (
                    <div
                      key={p}
                      className="rounded-2xl bg-lightGrey border border-gray-100 px-5 py-5 text-[13.5px] font-semibold text-gray-700 leading-snug"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="bg-[#00223E] text-white rounded-[2rem] p-8 md:p-10 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
                <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-white/70 uppercase">
                  What we deliver
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  {deliverables.map((d) => (
                    <div
                      key={d}
                      className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-[13.5px] font-semibold text-white/90"
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="mb-12 md:mb-16 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start gap-4 md:gap-16">
            <div className="md:w-1/4 pt-1 md:pt-3 text-left">
              <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                PROCESS
              </span>
            </div>
            <div className="md:w-3/4 text-left">
              <p className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.4] tracking-tight">
                Clear steps. Fast turnaround. Compliant execution.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((s, idx) => (
              <FadeIn key={s.step} delay={idx * 0.08}>
                <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-[0_25px_70px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between">
                    <div className="text-primary font-bold tracking-[0.2em] text-[12px]">
                      STEP {s.step}
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-6 text-[20px] font-bold text-gray-900 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-gray-600 leading-relaxed font-medium">
                    {s.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
