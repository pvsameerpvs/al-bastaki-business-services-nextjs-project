'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const pillars = [
  { l: 'A', t: 'Accountability', d: 'Clear ownership, careful follow-up, and responsible delivery across every engagement.' },
  { l: 'L', t: 'Local Expertise', d: 'Deep understanding of UAE regulations, authority processes, and business culture.' },
  { l: 'B', t: 'Business Setup', d: 'Complete support from structure selection to operational readiness across key markets.' },
  { l: 'A', t: 'Authority Approvals', d: 'Coordinated submissions with government bodies, free zones, and mainland authorities.' },
  { l: 'S', t: 'Strategic Growth', d: 'Practical direction for owners expanding across the UAE, GCC, and wider Middle East.' },
  { l: 'T', t: 'Transparency', d: 'Clear communication on requirements, timelines, responsibilities, and next steps.' },
  { l: 'A', t: 'Accuracy', d: 'Precise documentation, confidential handling, and disciplined review before submission.' },
  { l: 'K', t: 'Knowledge', d: '25+ years of regional service experience applied to real business decisions.' },
  { l: 'I', t: 'Integrity', d: 'Long-term trust built through ethical practice, discretion, and reliable delivery.' },
]

export default function AboutPillars() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 md:py-32 bg-white relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] gap-8 md:gap-12">
          <div className="md:pt-4">
            <span className="text-[16px] font-bold text-gray-500 tracking-widest uppercase mb-4 block">
              Core Pillars
            </span>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
              {pillars.map((item, idx) => {
                const isActive = activeIndex === idx
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group"
                  >
                    <div className={`flex items-baseline gap-4 mb-4 border-b pb-3 transition-all duration-500 ${isActive ? 'border-primary' : 'border-gray-100 group-hover:border-primary/30'}`}>
                      <motion.span 
                        animate={{ 
                          color: isActive ? '#0066A6' : 'rgba(0, 102, 166, 0.15)',
                          scale: isActive ? 1.1 : 1,
                        }}
                        className="text-[42px] font-black leading-none"
                      >
                        {item.l}
                      </motion.span>
                      <h3 className={`text-[18px] font-bold uppercase tracking-tight transition-colors duration-500 ${isActive ? 'text-primary' : 'text-gray-900'}`}>
                        {item.t}
                      </h3>
                    </div>
                    <p className={`text-[14.5px] leading-relaxed font-medium transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {item.d}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
