'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Nav Data ────────────────────────────────────────────────────────────────
const navItems = [
  { label: 'Home', href: '/', dropdown: null },
  { label: 'About Us', href: '/about', dropdown: null },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Company Formation', href: '/company-formation' },
      { label: 'Business Setup', href: '/business-setup' },
      { label: 'Accounting Services', href: '/accounting' },
      { label: 'Consultancy Services', href: '/consultancy' },
      { label: 'Event Management', href: '/events' },
      { label: 'IT Services', href: '/it' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    dropdown: [
      { label: 'Latest Articles', href: '/blog' },
      { label: 'Business Tips', href: '/blog/business-tips' },
      { label: 'Industry News', href: '/blog/news' },
    ],
  },
]

// ─── Desktop Dropdown ────────────────────────────────────────────────────────
function DropdownPanel({
  items,
  visible,
}: {
  items: { label: string; href: string }[]
  visible: boolean
}) {
  return (
    <div
      className={`absolute top-full left-0 min-w-[220px] z-50 transition-all duration-200 ease-out
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
    >
      <div className="h-3 w-full" />
      <div className="rounded-xl overflow-hidden shadow-xl border border-[#0066A6]/10 bg-[#EDF6FF]">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`block px-5 py-3.5 text-[14.5px] font-medium text-[#0D2D4A]
              hover:bg-[#0066A6]/10 hover:text-[#0066A6] transition-colors duration-150
              ${i !== 0 ? 'border-t border-[#0066A6]/10' : ''}
              ${i === 0 ? 'font-semibold text-[#0066A6]' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── Chevron Icon ─────────────────────────────────────────────────────────────
function Chevron({ open, className = '' }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''} ${className}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scroll, setScroll] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const close = () => setMobileOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scroll ? 'bg-white shadow-md py-2.5' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 xl:px-8">

          {/* ── Logo ── */}
          <Link href="/" aria-label="Al Bastaki" className="flex-shrink-0">
            {/* White logo (transparent hero) */}
            <Image
              src="/white-logo.png"
              alt="Al Bastaki Business Services"
              width={180}
              height={44}
              priority
              className={`h-10 sm:h-11 lg:h-12 w-auto object-contain transition-all duration-300 ${
                scroll ? 'opacity-0 absolute' : 'opacity-100 relative'
              }`}
            />
            {/* Blue logo (scrolled / solid header) */}
            <Image
              src="/blue-logo.png"
              alt="Al Bastaki Business Services"
              width={180}
              height={44}
              priority
              className={`h-10 sm:h-11 lg:h-12 w-auto object-contain transition-all duration-300 ${
                scroll ? 'opacity-100 relative' : 'opacity-0 absolute'
              }`}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            className={`hidden lg:flex items-center gap-1 ${
              scroll ? 'text-gray-700' : 'text-white/95'
            }`}
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg cursor-pointer
                    text-[15px] font-medium transition-all duration-200 select-none
                    ${activeDropdown === item.label
                      ? scroll ? 'bg-[#0066A6]/10 text-[#0066A6]' : 'bg-white/15 text-white'
                      : scroll ? 'hover:bg-gray-100 hover:text-gray-900' : 'hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {item.dropdown ? (
                    <>
                      <Link href={item.href} className="leading-none">{item.label}</Link>
                      <Chevron open={activeDropdown === item.label} className={scroll ? 'text-gray-400' : 'text-white/70'} />
                    </>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </div>
                {item.dropdown && (
                  <DropdownPanel items={item.dropdown} visible={activeDropdown === item.label} />
                )}
              </div>
            ))}
            <div
              className={`px-3.5 py-2 rounded-lg cursor-pointer text-[15px] font-medium
                transition-all duration-200
                ${scroll ? 'hover:bg-gray-100 hover:text-gray-900' : 'hover:bg-white/10 hover:text-white'}`}
            >
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          {/* ── Desktop Right Actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            
            <Link
              href="/contact"
              className={`flex items-center pr-5 pl-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md group ${
                scroll ? 'bg-primary text-white hover:bg-blue-800' : 'bg-white text-primary hover:bg-gray-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2.5 transition-colors ${
                scroll ? 'bg-white/20 group-hover:bg-white/30' : 'bg-primary/10 group-hover:bg-primary/20'
              }`}>
                <svg style={{width:'14px',height:'14px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <span className="font-semibold text-[14px]">Free Consultation</span>
            </Link>
          </div>

          {/* ── Mobile: CTA + Hamburger ── */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className={`text-[13px] font-semibold px-4 py-2 rounded-full transition-all ${
                scroll
                  ? 'bg-primary text-white'
                  : 'bg-white/15 text-white border border-white/25 backdrop-blur-sm'
              }`}
            >
              Get in Touch
            </Link>
            <button
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                scroll ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg style={{width:'22px',height:'22px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg style={{width:'22px',height:'22px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h11" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Full-Screen Menu ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[82%] max-w-[340px] bg-white shadow-2xl
            flex flex-col transition-transform duration-300 ease-out
            ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <Image
              src="/blue-logo.png"
              alt="Al Bastaki"
              width={140}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <button
              className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg style={{width:'16px',height:'16px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => !item.dropdown && setMobileOpen(false)}
                    className="flex-1 py-3.5 px-2 text-[15px] font-semibold text-gray-900 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label}`}
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Chevron
                        open={mobileExpanded === item.label}
                        className="text-gray-400"
                      />
                    </button>
                  )}
                </div>

                {item.dropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExpanded === item.label ? 'max-h-80' : 'max-h-0'
                    }`}
                  >
                    <div className="pb-2 pl-3">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl text-[13.5px] font-medium text-gray-600 hover:text-primary hover:bg-[#EDF6FF] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center py-3.5 px-2 text-[15px] font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Panel footer CTA */}
          <div className="px-4 py-5 border-t border-gray-100 bg-[#F9FAFB]">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#00223E] hover:bg-[#003560] text-white font-bold text-[14px] rounded-2xl py-3.5 transition-all shadow-[0_8px_24px_rgba(0,34,62,0.20)]"
            >
              <svg style={{width:'15px',height:'15px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Get a Free Consultation
            </Link>
            <p className="mt-3 text-center text-[12px] text-gray-400 font-medium">
              Fast, no-obligation call with our team
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
