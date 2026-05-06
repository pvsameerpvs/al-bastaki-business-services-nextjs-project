import Image from 'next/image'
import FadeIn from './FadeIn'

type ServiceDetailSectionsProps = {
  intro: string[]
  keyPoints: string[]
  deliverables: string[]
}



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
    </>
  )
}
