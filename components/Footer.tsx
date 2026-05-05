'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { contactInfo } from '../lib/contact'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [footerHeight, setFooterHeight] = useState(0)

  useEffect(() => {
    const element = footerRef.current
    if (!element) return

    const updateHeight = () => {
      setFooterHeight(element.getBoundingClientRect().height)
    }

    updateHeight()

    let observer: ResizeObserver | null = null
    const hasWindow = typeof window !== 'undefined'
    const supportsResizeObserver = hasWindow && 'ResizeObserver' in window

    if (supportsResizeObserver) {
      observer = new ResizeObserver(() => updateHeight())
      observer.observe(element)
    } else if (hasWindow) {
      window.addEventListener('resize', updateHeight)
      window.addEventListener('orientationchange', updateHeight)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      } else if (hasWindow) {
        window.removeEventListener('resize', updateHeight)
        window.removeEventListener('orientationchange', updateHeight)
      }
    }
  }, [])

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Case Studies', href: '/case-studies' },
  ]

  const services = [
    { label: 'Company Formation', href: '/company-formation' },
    { label: 'Business Setup', href: '/business-setup' },
    { label: 'Accounting Services', href: '/accounting' },
    { label: 'Consultancy Services', href: '/consultancy' },

    { label: 'IT Services', href: '/it' },
  ]

  return (
    <>
      <div
        style={{ height: footerHeight }}
        className="hidden md:block relative z-0 pointer-events-none w-full"
        aria-hidden="true"
      />

      <footer
        ref={footerRef}
        className="relative w-full z-10 bg-[#001528] text-white pt-8 md:pt-12 lg:pt-16 pb-[calc(1.5rem+env(safe-area-inset-bottom))] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 md:fixed md:bottom-0 md:left-0 md:-z-10"
      >
        <div className="max-w-[1400px] mx-auto">

          {/* ── Top 4-column grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_auto] gap-8 lg:gap-10 xl:gap-12 mb-8 lg:mb-10 items-start">

            {/* Col 1 — Logo + tagline */}
            <div className="flex flex-col items-start min-w-0 pt-2">
              <Link href="/" aria-label="Al Bastaki" className="block mb-6 sm:mb-8">
                <Image
                  src="/white-logo.png"
                  alt="Al Bastaki Business Services"
                  width={998}
                  height={948}
                  className="h-24 md:h-28 w-auto object-contain"
                  priority
                />
              </Link>
              <h3 className="text-[12px] sm:text-[13px] font-bold mb-3 text-white/50 tracking-[0.18em] uppercase">
                Follow Us
              </h3>
              <p className="text-sm sm:text-[13.5px] text-[#9CA3AF] font-medium leading-relaxed mb-4 sm:mb-5 max-w-[240px]">
                Al Bastaki is a premier corporate services partner helping businesses grow with clarity, compliance, and control.
              </p>

              {/* Social icons */}
              <div className="flex gap-2 self-end sm:col-span-2 lg:col-span-4 lg:justify-end">
                {[
                  {
                    id: 'facebook', href: '#facebook',
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                  },
                  {
                    id: 'twitter', href: '#twitter',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M4 4l16 16m0-16L4 20" />
                      </svg>
                    ),
                  },
                  {
                    id: 'linkedin', href: '#linkedin',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    id: 'instagram', href: '#instagram',
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.id}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00223E] text-white flex items-center justify-center hover:bg-primary hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
             
            </div>

            {/* Col 2 — Quick Links */}
            <div className="flex flex-col lg:pl-4 xl:pl-6 min-w-0">
              <h3 className="text-[12px] sm:text-[13px] font-bold mb-4 text-white/50 tracking-[0.18em] uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[13px] sm:text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div className="flex flex-col min-w-0">
              <h3 className="text-[12px] sm:text-[13px] font-bold mb-4 text-white/50 tracking-[0.18em] uppercase">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-[13px] sm:text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div className="flex flex-col max-w-[260px] gap-3.5 min-w-0">
              <h3 className="text-[12px] sm:text-[13px] font-bold text-white/50 tracking-[0.18em] uppercase">
                Contact Us
              </h3>

              {/* Mobile */}
              <a
                href={contactInfo.mobileHref}
                className="group flex items-center gap-2.5 hover:text-primary transition-colors duration-300"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00223E] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.71 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.14a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] font-bold text-primary group-hover:text-white tracking-tight transition-colors duration-300">
                  {contactInfo.mobileDisplay}
                </span>
              </a>

              {/* Landline */}
              <a
                href={contactInfo.landlineHref}
                className="group flex items-center gap-2.5 hover:text-primary transition-colors duration-300"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00223E] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.71 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.14a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-[13.5px] sm:text-[15px] font-semibold text-white/75 group-hover:text-primary tracking-tight transition-colors duration-300">
                  {contactInfo.landlineDisplay}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-2.5 hover:text-primary transition-colors duration-300"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00223E] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-white/70 group-hover:text-primary transition-colors duration-300">
                  {contactInfo.email}
                </span>
              </a>

              {/* Website */}
              <a
                href={contactInfo.websiteHref}
                className="group flex items-center gap-2.5 hover:text-primary transition-colors duration-300"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00223E] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-white/70 group-hover:text-primary transition-colors duration-300">
                  {contactInfo.websiteDisplay}
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00223E] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <span className="text-[13px] sm:text-[13.5px] font-medium text-white/70 leading-relaxed">
                  Office 626, B Block,<br />Business Village Deira,<br />Dubai – 88831
                </span>
              </div>
            </div>
            
             

          </div>
          

          {/* ── Divider ── */}
          <div className="border-t border-white/[0.08] mb-4" />

          {/* ── Big brand watermark ── */}
          <div className="text-center overflow-hidden mb-4">
            <span className="text-[11vw] sm:text-[9vw] md:text-[6.5vw] lg:text-[5vw] font-bold text-white leading-none select-none tracking-tight block">
              AL BASTAKI
            </span>
          </div>

          {/* ── Bottom bar ── */}
         

        </div>
      </footer>
    </>
  )
}
