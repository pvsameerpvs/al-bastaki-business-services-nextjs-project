'use client'

import { motion } from 'framer-motion'

type PageHeroProps = {
  title: string
  subtitle: string
  image: string
  badge?: string
}

export default function PageHero({ title, subtitle, image, badge }: PageHeroProps) {
  return (
    <section className="relative pt-[170px] md:pt-[200px] pb-24 md:pb-28 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#00223E]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B62]/90 via-primary/35 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/95 via-[#001D33]/40 to-[#001D33]/20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-2 text-[12px] font-semibold tracking-wide text-white/90 backdrop-blur">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,255,255,0.25)]" />
              {badge}
            </div>
          )}

          <h1 className="mt-6 text-[3rem] md:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.05] tracking-tight">
            {title}
          </h1>

          <p className="mt-6 text-[15.5px] md:text-[17px] lg:text-[18px] leading-relaxed text-white/85 max-w-[46rem] font-medium">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
