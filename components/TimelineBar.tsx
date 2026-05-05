'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TimelineBar() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const milestones = [
    {
      year: "2000",
      text: "Founded in Dubai to guide business setup and corporate advisory."
    },
    {
      year: "2012",
      text: "Broadened licensing, PRO, compliance, and corporate service capabilities."
    },
    {
      year: "2022",
      text: "Expanded regional support across the GCC and wider Middle East."
    },
    {
      year: "2026",
      text: "Continuing to support UAE-based and regional growth with disciplined delivery."
    }
  ]

  return (
    <section className="w-full bg-primary relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20 py-8">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center gap-6 py-6 md:py-4 md:px-8"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter shrink-0">
                {item.year}
              </h3>
              <p className="text-white/80 text-[15px] leading-snug font-medium max-w-[280px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
