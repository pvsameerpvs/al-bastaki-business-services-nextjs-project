'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type PageCTAProps = {
  title: string
  description: string
  href?: string
  buttonText?: string
}

export default function PageCTA({
  title,
  description,
  href = '/contact',
  buttonText = 'Request a free consultation',
}: PageCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-primary rounded-[1.75rem] md:rounded-[2rem] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_25px_70px_rgba(0,102,166,0.25)] border border-white/10"
        >
          <div className="max-w-3xl">
            <h2 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight leading-[1.2]">
              {title}
            </h2>
            <p className="mt-3 text-white/85 text-[14.5px] md:text-[15.5px] leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <Link
            href={href}
            className="bg-white text-[#00223E] rounded-full p-[6px] flex items-center gap-4 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shrink-0 group"
          >
            <span className="w-[40px] h-[40px] rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
            <span className="font-bold text-[14px] pr-5 pb-[1px]">{buttonText}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
