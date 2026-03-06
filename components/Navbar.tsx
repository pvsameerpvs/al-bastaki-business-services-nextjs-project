'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Dropdown Data (project-based) ─────────────────────────────────────────────
const navItems = [
  {
    label: 'Home',
    href: '/',
    dropdown: null,
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Company Formation', href: '/services/company-formation' },
      { label: 'Business Setup', href: '/services/business-setup' },
      { label: 'Accounting Services', href: '/services/accounting' },
      { label: 'Consultancy Services', href: '/services/consultancy' },
      { label: 'Event Management', href: '/services/events' },
      { label: 'IT Services', href: '/services/it' },
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

// ─── Dropdown Panel Component ────────────────────────────────────────────────
function DropdownPanel({
  items,
  visible,
}: {
  items: { label: string; href: string }[]
  visible: boolean
}) {
  return (
    <div
      className={`
        absolute top-full left-0 min-w-[220px] z-50
        transition-all duration-200 ease-out
        ${visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'}
      `}
    >
      {/* Gap bridge so the dropdown doesn't close when mouse moves down */}
      <div className="h-3 w-full" />
      <div
        className="
          rounded-xl overflow-hidden shadow-xl
          border border-[#0066A6]/10
          bg-[#EDF6FF]
        "
      >
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`
              block px-5 py-3.5 text-[14.5px] font-medium text-[#0D2D4A]
              hover:bg-[#0066A6]/10 hover:text-[#0066A6]
              transition-colors duration-150
              ${i !== 0 ? 'border-t border-[#0066A6]/10' : ''}
              ${i === 0 ? 'font-semibold text-[#0066A6]' : ''}
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── Navbar Component ─────────────────────────────────────────────────────────
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

  // Close mobile menu on route changes or resize
  useEffect(() => {
    const close = () => setMobileOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

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
          scroll ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 xl:px-8">

          {/* ── Logo ── */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Al Bastaki">
              <div className="relative h-11 w-[190px] sm:h-12 sm:w-[220px] lg:h-14 lg:w-[260px]">
                <Image
                  src="/white-logo.png"
                  alt="Al Bastaki"
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 190px"
                  priority
                  className={`object-contain transition-opacity duration-300 ${
                    scroll ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <Image
                  src="/blue-logo.png"
                  alt="Al Bastaki"
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 190px"
                  priority
                  className={`object-contain transition-opacity duration-300 ${
                    scroll ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </Link>
          </div>

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
                {/* Nav Item Button */}
                <div
                  className={`
                    flex items-center gap-1.5 px-3.5 py-2 rounded-lg cursor-pointer
                    text-base font-medium transition-all duration-200 select-none
                    ${
                      activeDropdown === item.label
                        ? scroll
                          ? 'bg-[#0066A6]/10 text-[#0066A6]'
                          : 'bg-white/15 text-white'
                        : scroll
                        ? 'hover:bg-gray-100 hover:text-gray-900'
                        : 'hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  {item.dropdown ? (
                    <>
                      <Link href={item.href} className="leading-none">
                        {item.label}
                      </Link>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        } ${scroll ? 'text-gray-400' : 'text-white/70'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </div>

                {/* Dropdown */}
                {item.dropdown && (
                  <DropdownPanel
                    items={item.dropdown}
                    visible={activeDropdown === item.label}
                  />
                )}
              </div>
            ))}

            {/* Contact — standalone */}
            <div
              className={`
                px-3.5 py-2 rounded-lg cursor-pointer text-base font-medium
                transition-all duration-200
                ${
                  scroll
                    ? 'hover:bg-gray-100 hover:text-gray-900'
                    : 'hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          {/* ── Right Actions (Desktop) ── */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <button
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                scroll
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* CTA Pill */}
            <button
              className={`flex items-center pr-6 pl-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md group ${
                scroll
                  ? 'bg-primary text-white hover:bg-blue-800'
                  : 'bg-white text-primary hover:bg-gray-50'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-colors ${
                  scroll
                    ? 'bg-white/20 group-hover:bg-white/30'
                    : 'bg-primary/10 group-hover:bg-primary/20'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <span className="font-semibold text-[15px]">Get A Free Consultation</span>
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scroll ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile Menu Panel ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          } bg-white border-t border-gray-100 shadow-xl`}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between py-3 text-[15px] font-medium text-gray-800 rounded-lg px-2 hover:bg-[#EDF6FF] hover:text-[#0066A6] transition-colors">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1"
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="ml-3 p-1.5 rounded-md hover:bg-white/60 transition-colors"
                    >
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          mobileExpanded === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {/* Mobile Sub-items */}
                {item.dropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExpanded === item.label ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="ml-3 pl-3 border-l-2 border-[#0066A6]/20 flex flex-col gap-0.5 pb-2">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className={`py-2 px-2 text-[14px] rounded-md transition-colors
                            ${i === 0
                              ? 'text-[#0066A6] font-semibold hover:bg-[#EDF6FF]'
                              : 'text-gray-600 hover:text-[#0066A6] hover:bg-[#EDF6FF]'
                            }
                          `}
                        >
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
              className="py-3 text-[15px] font-medium text-gray-800 cursor-pointer rounded-lg px-2 hover:bg-[#EDF6FF] hover:text-[#0066A6] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
