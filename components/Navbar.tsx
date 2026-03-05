'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar(){
  const [scroll,setScroll]=useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  return(
    <header className={`fixed w-full z-50 transition-all duration-300 ${scroll ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 xl:px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className={`font-bold text-3xl tracking-tight italic flex items-center gap-1 ${scroll ? 'text-primary' : 'text-white'}`}>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15zM5 15.91l6 3.38v-6.71L5 9.21v6.7zM19 15.91v-6.7l-6 3.37v6.71l6-3.38z"/></svg>
              Al Bastaki
            </h1>
          </Link>
        </div>

        {/* Center Nav Links */}
        <nav className={`hidden lg:flex items-center gap-8 ${scroll ? 'text-gray-700' : 'text-white/95'}`}>
          {['Home', 'Pages', 'Services', 'Case Studies', 'Blog'].map((item) => (
            <div key={item} className="flex items-center gap-1 cursor-pointer hover:opacity-75 transition-opacity group text-base font-medium">
              {item}
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${scroll ? 'text-gray-400' : 'text-white/70'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          ))}
          <a href="#" className="cursor-pointer hover:opacity-75 transition-opacity text-base font-medium">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Circular Search Button */}
          <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${scroll ? 'bg-gray-100 hover:bg-gray-200 text-gray-600' : 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20'}`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Pill CTA Button */}
          <button className={`flex items-center pr-6 pl-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md group ${scroll ? 'bg-primary text-white hover:bg-blue-800' : 'bg-white text-primary hover:bg-gray-50'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-colors ${scroll ? 'bg-white/20 group-hover:bg-white/30' : 'bg-primary/10 group-hover:bg-primary/20'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <span className="font-semibold text-[15px]">Get A Free Consultation</span>
          </button>
          
        </div>

        {/* Mobile menu button */}
        <button className={`lg:hidden p-2 ${scroll ? 'text-gray-800' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </header>
  )
}
