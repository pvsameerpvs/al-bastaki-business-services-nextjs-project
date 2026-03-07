'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function Footer() {
  const [footerHeight, setFooterHeight] = useState(0)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) setFooterHeight(entries[0].target.getBoundingClientRect().height)
    })
    observer.observe(footerRef.current)
    return () => observer.disconnect()
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
    { label: 'Event Management', href: '/events' },
    { label: 'IT Services', href: '/it' },
  ]

  return (
    <>
      {/* Spacer so the fixed footer is revealed on scroll */}
      <div style={{ height: footerHeight }} className="relative z-0 pointer-events-none w-full" />

      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full -z-10 bg-[#001528] text-white pt-16 pb-6 px-4 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1400px] mx-auto">

          {/* ── Top 4-column grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_auto] gap-10 lg:gap-8 mb-10 items-start">

            {/* Col 1 — Logo + tagline */}
            <div className="flex flex-col items-start">
              <Link href="/" aria-label="Al Bastaki" className="block mb-7">
                <Image
                  src="/white-logo.png"
                  alt="Al Bastaki Business Services"
                  width={280}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
              </Link>
              <h3 className="text-[13px] font-bold mb-3 text-white/50 tracking-[0.18em] uppercase">
                Follow Us
              </h3>
              <p className="text-[13.5px] text-[#9CA3AF] font-medium leading-relaxed mb-5 max-w-[220px]">
                Al Bastaki is a trusted corporate consulting firm helping businesses grow with clarity and control.
              </p>

              {/* Social icons */}
             
            </div>

            {/* Col 2 — Quick Links */}
            <div className="flex flex-col lg:pl-6">
              <h3 className="text-[13px] font-bold mb-5 text-white/50 tracking-[0.18em] uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div className="flex flex-col">
              <h3 className="text-[13px] font-bold mb-5 text-white/50 tracking-[0.18em] uppercase">
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div className="flex flex-col max-w-[260px] gap-4">
              <h3 className="text-[13px] font-bold text-white/50 tracking-[0.18em] uppercase">
                Contact Us
              </h3>

              {/* Phone */}
              <a
                href="tel:+97141234567"
                className="group flex items-center gap-3 hover:text-primary transition-colors duration-300"
              >
                <span className="w-9 h-9 rounded-full bg-[#00223E] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.71 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.14a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-[15px] font-bold text-primary group-hover:text-white tracking-tight transition-colors duration-300">
                  +971 4 123 4567
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@albastaki.com"
                className="group flex items-center gap-3 hover:text-primary transition-colors duration-300"
              >
                <span className="w-9 h-9 rounded-full bg-[#00223E] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span className="text-[14px] font-medium text-white/70 group-hover:text-primary transition-colors duration-300">
                  hello@albastaki.com
                </span>
              </a>
              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-[#00223E] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <span className="text-[13.5px] font-medium text-white/70 leading-relaxed">
                  Office 626, B Block,<br />Business Village Deira,<br />Dubai – 88831
                </span>
              </div>
            </div>
            
             <div className="flex gap-2.5 self-end">
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
                    className="w-9 h-9 rounded-full bg-[#00223E] text-white flex items-center justify-center hover:bg-primary hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

          </div>
          

          {/* ── Divider ── */}
          <div className="border-t border-white/[0.08] mb-4" />

          {/* ── Big brand watermark ── */}
          <div className="text-center overflow-hidden mb-4">
            <span className="text-[13vw] sm:text-[14vw] font-bold text-white leading-none select-none tracking-tight block">
              AL BASTAKI
            </span>
          </div>

          {/* ── Bottom bar ── */}
         

        </div>
      </footer>
    </>
  )
}
