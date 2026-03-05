'use client'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function Footer() {
  const [footerHeight, setFooterHeight] = useState(0)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setFooterHeight(entries[0].target.getBoundingClientRect().height)
      }
    })
    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Invisible spacer allowing you to scroll past the content and 'reveal' the footer */}
      <div style={{ height: footerHeight }} className="relative z-0 pointer-events-none w-full" />
      
      {/* The actual footer sits fixed rigidly AT THE BOTTOM, hidden safely BEHIND the page */}
      <footer 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full -z-10 bg-[#001528] text-white pt-20 pb-8 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1400px] mx-auto opacity-100">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 flex-wrap">
            
            {/* Col 1: Logo and Contact */}
            <div className="lg:col-span-1 flex flex-col items-start text-left shrink-0">
              <h2 className="text-[32px] md:text-[36px] font-bold tracking-tight mb-8">
                Al Bastaki
              </h2>
              <div className="space-y-4">
                <a href="tel:+97141234567" className="block text-primary text-[19px] md:text-[22px] font-bold hover:text-white transition-colors duration-300 tracking-tight">
                  +971 4 123 4567
                </a>
                <a href="mailto:hello@albastaki.com" className="block text-white text-[15px] md:text-[16px] font-medium hover:text-primary transition-colors duration-300">
                  hello@albastaki.com
                </a>
              </div>
            </div>

            {/* Col 2 & 3: Quick Links */}
            <div className="lg:col-span-1 flex flex-col text-left lg:ml-12 shrink-0">
              <h3 className="text-[17px] font-bold mb-6 text-white tracking-wide">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-2 sm:gap-x-8 gap-y-3">
                <Link href="#" className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap">Home</Link>
                <Link href="#" className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap">Blog</Link>
                <Link href="#" className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap">About Us</Link>
                <Link href="#" className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap">Contact</Link>
                <Link href="#" className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap">Services</Link>
                <Link href="#" className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap">FAQs</Link>
                <Link href="#" className="text-[14px] text-[#9CA3AF] hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap">Case Studies</Link>
              </div>
            </div>

            {/* Col 4: Stay Connected */}
            <div className="lg:col-span-2 flex flex-col text-left lg:pl-16">
              <h3 className="text-[17px] font-bold mb-4 text-white tracking-wide">Stay Connected</h3>
              <p className="text-[14.5px] text-[#9CA3AF] mb-6 font-medium leading-[1.6] max-w-sm">
                Join our newsletter and stay updated on the latest news and business regulations.
              </p>
              
              <form className="relative w-full max-w-md mb-8 lg:mb-12 group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Type your email" 
                  className="w-full bg-[#00223E] border border-transparent group-hover:border-primary/50 text-white rounded-[6px] pl-5 pr-12 py-3.5 text-[14px] focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-gray-500"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-primary hover:text-white transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2 11 13" />
                    <path d="m22 2-7 20-4-9-9-4Z" />
                  </svg>
                </button>
              </form>

              <div className="flex flex-col md:flex-row items-start lg:items-center gap-6 justify-between w-full max-w-[500px]">
                <p className="text-[13.5px] text-[#9CA3AF] font-medium leading-[1.65] max-w-[280px]">
                  Al Bastaki is a trusted corporate consulting firm helping businesses grow with clarity and control.
                </p>
                
                <div className="flex gap-2.5 shrink-0">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, idx) => (
                    <a key={idx} href={`#${social}`} className="w-[38px] h-[38px] rounded-full bg-[#00223E] text-white flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer group hover:-translate-y-0.5">
                      {social === 'facebook' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      )}
                      {social === 'twitter' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 4l16 16m0-16L4 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      )}
                      {social === 'linkedin' && (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      )}
                      {social === 'instagram' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Huge Full Width Text Section */}
          <div className="w-full mt-6 mb-8 md:mb-10 text-center flex justify-center pb-2 md:pb-6">
            <h1 className="text-[13vw] sm:text-[14.5vw] font-bold text-white leading-[0.8] select-none tracking-tight">
              AL BASTAKI
            </h1>
          </div>

          {/* Bottom Bar Section */}
          <div className="flex flex-col md:flex-row items-center justify-between text-[13px] md:text-[14px] text-gray-500 font-medium">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Al Bastaki Is Proudly Owned By <span className="text-[#9CA3AF]">Al Bastaki Business Services</span>
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#terms" className="hover:text-primary transition-colors duration-300">Terms And Conditions</a>
              <span className="w-[1px] h-3 bg-gray-700"></span>
              <a href="#privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
