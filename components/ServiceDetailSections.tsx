import Image from 'next/image'
import FadeIn from './FadeIn'

type ServiceDetailSectionsProps = {
  intro: string[]
  keyPoints: string[]
  deliverables: string[]
  images?: [string, string, string]
}



export default function ServiceDetailSections({
  intro,
  keyPoints,
  deliverables,
  images,
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
                  A closer look at our service areas
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

    </>
  )
}
