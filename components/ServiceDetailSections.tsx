import Image from 'next/image'
import FadeIn from './FadeIn'

type ServiceDetailSectionsProps = {
  intro: string[]
  keyPoints: string[]
  deliverables: string[]
  images?: [string, string, string]
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
  images,
}: ServiceDetailSectionsProps) {
  const deliverablesShort = deliverables.slice(0, 8)
  const hasMoreDeliverables = deliverables.length > deliverablesShort.length

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
                <div className="mt-6 space-y-4 max-w-[78ch]">
                  {intro.map((p) => (
                    <p
                      key={p}
                      className="text-[15.5px] md:text-[17px] text-gray-700 leading-relaxed font-medium"
                    >
                      {p}
                    </p>
                  ))}
                </div>

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
                  Included services
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deliverablesShort.map((d) => (
                    <div
                      key={d}
                      className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-[13.5px] font-semibold text-white/90"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {hasMoreDeliverables && (
                  <a
                    href="#service-scope"
                    className="mt-6 inline-flex items-center gap-3 text-[13px] font-semibold text-white/85 hover:text-white transition-colors"
                  >
                    View full scope
                    <span className="w-9 h-9 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
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
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3-IMAGE GALLERY ── */}
      {images?.length === 3 && (
        <section className="py-14 md:py-20 bg-[#F9FAFB]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
            <FadeIn>
              <div className="mb-8 md:mb-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px w-7 bg-primary" />
                  <span className="text-[11px] font-bold tracking-[0.22em] text-gray-400 uppercase">Gallery</span>
                </div>
                <p className="text-[22px] md:text-[28px] font-bold text-[#1a2744] tracking-tight leading-snug">
                  A closer look at our work
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {/* Large featured image */}
              <FadeIn delay={0}>
                <div className="sm:col-span-2 lg:col-span-1 relative rounded-[1.5rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[220px] shadow-[0_20px_60px_rgba(0,0,0,0.10)] group">
                  <Image
                    src={images[0]}
                    alt="Service image 1"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeIn>

              {/* Two stacked images on the right (desktop) */}
              <div className="sm:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                <FadeIn delay={0.07}>
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(0,0,0,0.10)] group">
                    <Image
                      src={images[1]}
                      alt="Service image 2"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </FadeIn>

                <FadeIn delay={0.14}>
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(0,0,0,0.10)] group">
                    <Image
                      src={images[2]}
                      alt="Service image 3"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="service-scope" className="py-20 md:py-28 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="mb-12 md:mb-16 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start gap-4 md:gap-16">
            <div className="md:w-1/4 pt-1 md:pt-3 text-left">
              <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                SERVICE SCOPE
              </span>
            </div>
            <div className="md:w-3/4 text-left">
              <p className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.4] tracking-tight">
                A complete list of included services
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {deliverables.map((d, idx) => (
              <FadeIn key={d} delay={Math.min(idx, 8) * 0.04}>
                <div className="bg-white rounded-[2rem] p-7 md:p-8 border border-gray-100 shadow-sm hover:shadow-[0_25px_70px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <div className="text-[15px] font-bold text-gray-900 tracking-tight leading-snug">
                      {d}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Study carefully',
                text: 'We understand your scenario and requirements before we recommend a route or checklist.',
              },
              {
                title: 'Implement fast',
                text: 'We execute with clear steps and follow-ups to reduce delays and unnecessary back-and-forth.',
              },
              {
                title: 'Support responsibly',
                text: 'We provide dependable support and communication even for demanding timelines.',
              },
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <div className="rounded-[2rem] bg-[#F9FAFB] border border-gray-100 p-8 md:p-10 h-full hover:shadow-[0_25px_70px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-[20px] font-bold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-gray-600 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
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
