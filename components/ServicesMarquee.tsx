'use client'

import { motion } from 'framer-motion'

const industries = ['REAL ESTATE', 'HEALTHCARE', 'MANUFACTURING', 'TECHNOLOGY', 'TRADING', 'PROFESSIONAL SERVICES', 'REGIONAL EXPANSION']

export default function ServicesMarquee() {
  return (
    <div className="w-full relative z-20 bg-primary text-white py-4 lg:py-5 overflow-hidden flex border-t border-white/10 shadow-[0_-4px_20px_rgba(0,102,166,0.18)]">
      <motion.div
        animate={{ x: [0, '-50%'] }}
        transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
        className="flex whitespace-nowrap w-fit items-center"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center w-max shrink-0">
            {industries.map((item, j) => (
              <div key={j} className="flex items-center shrink-0">
                <span className="font-bold tracking-[0.2em] text-[14px] lg:text-[17px] px-8 lg:px-12 text-white/90">
                  {item}
                </span>
                <span className="text-white/40 text-[20px] lg:text-[26px]">❋</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
