'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Company Formation',
    description:
      'We help you establish your company under the correct legal framework by choosing the most cost-effective and time-saving option for your activity and goals.',
    href: '/company-formation',
    image: '/CompanyFormation.jpg',
  },
  {
    title: 'Business Setup',
    description:
      'Al Bastaki takes responsibility for the registration aspects of new businesses — from licensing and PRO services to visa processing and corporate amendments.',
    href: '/business-setup',
    image: '/BusinessSetup.jpg',
  },
  {
    title: 'Accounting Services',
    description:
      'We provide a complete range of accounting services while maintaining strict confidentiality and accuracy — from bookkeeping and payroll to VAT support.',
    href: '/accounting',
    image: '/AccountingServices.jpg',
  },
  {
    title: 'Consultancy Services',
    description:
      'Work with consultants who have a deep understanding of the region. We support you in assessing opportunities with practical, best-practice processes.',
    href: '/consultancy',
    image: '/ConsultancyServices.jpg',
  },
  {
    title: 'Event Management',
    description:
      'End-to-end event logistics and project management for conferences, exhibitions, ceremonies, and more — from planning through on-ground delivery.',
    href: '/events',
    image: '/events-1.jpg',
  },
  {
    title: 'IT Services',
    description:
      'We offer solutions under one roof to help grow your business — website design, software, portals, and digital marketing with clear deliverables.',
    href: '/it',
    image: '/ITServices.jpg',
  },
]

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative pt-14 md:pt-20 pb-0 overflow-hidden bg-[#001528]">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative z-10 w-full flex flex-col">

        {/* ── Header + arrows ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-6">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[26px] md:text-[34px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight"
            >
              Expert business setup and management.{' '}
              <span className="text-white/50">
                Custom-crafted for the way your business works.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 shrink-0 pb-1"
          >
            <button
              onClick={() => slide('left')}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              aria-label="Previous services"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => slide('right')}
              className="w-11 h-11 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,102,166,0.25)]"
              aria-label="Next services"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* ── Cards slider ── */}
        <div
          ref={scrollRef}
          className="flex flex-row w-full gap-4 lg:gap-5 pb-2 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {services.map((svc, idx) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group relative flex-shrink-0 w-[280px] sm:w-[310px] lg:w-[340px] h-[400px] sm:h-[420px] lg:h-[460px] rounded-[1.75rem] overflow-hidden snap-center cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 * idx }}
                className="absolute inset-0"
              >
                {/* ── Image ── */}
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 340px"
                />

                {/* ── Base gradient overlay (always visible) ── */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001528]/90 via-[#001528]/30 to-transparent transition-opacity duration-500" />

                {/* ── Hover deep overlay ── */}
                <div className="absolute inset-0 bg-[#00223E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* ── Hover border glow ── */}
                <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-white/10 group-hover:ring-white/25 transition-all duration-500" />

                {/* ── Content ── */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-7">

                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white leading-snug mb-0 group-hover:mb-3 transition-all duration-500">
                    {svc.title}
                  </h3>

                  {/* Expandable description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="pt-2 text-[13.5px] text-white/75 leading-relaxed font-medium line-clamp-4 mb-5">
                        {svc.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-0 w-fit">
                        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white z-10 relative transition-transform duration-300 group-hover:scale-105 shadow-[0_8px_20px_rgba(0,102,166,0.35)]">
                          <svg style={{ width: '15px', height: '15px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        <span className="flex items-center h-9 pl-5 pr-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-[12.5px] -ml-3.5 relative hover:bg-white/20 transition-colors duration-300">
                          Discover more
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Marquee strip ── */}
      <div className="w-full relative z-20 bg-primary text-white py-4 lg:py-5 overflow-hidden flex border-t border-white/10 shadow-[0_-4px_20px_rgba(0,102,166,0.18)] mt-10">
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
          className="flex whitespace-nowrap w-fit items-center"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center w-max shrink-0">
              {['REAL ESTATE', 'HEALTHCARE', 'MANUFACTURING', 'TECHNOLOGY', 'RETAIL'].map((item, j) => (
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
    </section>
  )
}
