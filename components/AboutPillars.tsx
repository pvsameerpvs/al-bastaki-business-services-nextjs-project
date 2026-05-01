'use client'
import { motion } from 'framer-motion'

const pillars = [
  { l: 'A', t: 'Accountability', d: 'Ensuring financial clarity and professional ownership in every project we undertake.' },
  { l: 'L', t: 'Local Expertise', d: 'Deep-rooted understanding of UAE business regulations and authority processes.' },
  { l: 'B', t: 'Business Setup', d: 'Comprehensive support from formation to operational state across the GCC.' },
  { l: 'A', t: 'Authority Approvals', d: 'Seamless coordination with government bodies, free zones, and mainland authorities.' },
  { l: 'S', t: 'Strategic Growth', d: 'Providing the tactical direction and support needed to scale your business.' },
  { l: 'T', t: 'Transparency', d: 'Honest and clear communication in every transaction and consultation.' },
  { l: 'A', t: 'Accuracy', d: 'Maintaining strict confidentiality and precise documentation for all our clients.' },
  { l: 'K', t: 'Knowledge', d: 'Leveraging 25+ years of regional service experience to your advantage.' },
  { l: 'I', t: 'Integrity', d: 'Building long-term trust through ethical business practices and reliable delivery.' },
]

export default function AboutPillars() {
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
              {pillars.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-4 mb-4 border-b border-gray-100 pb-3 transition-colors group-hover:border-primary/30">
                    <span className="text-[42px] font-black text-primary/20 group-hover:text-primary transition-colors leading-none">
                      {item.l}
                    </span>
                    <h3 className="text-[18px] font-bold text-gray-900 uppercase tracking-tight">
                      {item.t}
                    </h3>
                  </div>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                    {item.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
