'use client'
import { motion } from 'framer-motion'

export default function WhyTrust() {
  return (
    <section className="relative w-full min-h-[700px] flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" 
          alt="Team collaboration" 
          className="w-full h-full object-cover object-center"
        />
        {/* Soft gradient to ensure text readability on the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-[#001528]/90"></div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 xl:px-8 relative z-10 flex flex-col md:flex-row justify-end items-center h-full pb-20 md:pb-0">
        
        {/* Glassmorphism Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[480px] lg:w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] p-8 md:p-10 text-white shadow-[0_30px_80px_rgba(0,0,0,0.3)] mt-10 md:mt-0"
        >
          <h2 className="text-[32px] md:text-[38px] font-medium mb-8 md:mb-10 leading-[1.2] tracking-tight">
            Why Trust<br/>Al Bastaki?
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col">
              <h3 className="font-bold text-[16px] mb-1.5 flex items-center gap-2">
                Certified Experts
              </h3>
              <p className="text-white/70 text-[13.5px] leading-relaxed font-medium">
                All consultants hold active expertise and legal licenses with 10+ years of corporate experience.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-[16px] mb-1.5">Industry Leaders</h3>
              <p className="text-white/70 text-[13.5px] leading-relaxed font-medium">
                Adhering to the highest professional and ethical standards in the UAE.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-[16px] mb-1.5">25+ Years</h3>
              <p className="text-white/70 text-[13.5px] leading-relaxed font-medium">
                Combined experience in mainland, freezone setup, and specialized financial consulting.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-[16px] mb-1.5">100% Compliant</h3>
              <p className="text-white/70 text-[13.5px] leading-relaxed font-medium">
                Enterprise-grade data security, strict privacy, and full UAE legal compliance.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Banner positioned at the very bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center w-full px-4 md:px-8">
        <div className="w-full max-w-[1240px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-primary rounded-t-[1.5rem] md:rounded-t-[2rem] px-6 py-5 md:px-10 md:py-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_-15px_40px_rgba(0,102,166,0.3)] border border-white/10 border-b-0"
          >
            <p className="text-white font-medium text-[15px] md:text-[16px] text-center md:text-left leading-relaxed max-w-2xl">
              Join hundreds of satisfied clients who trust Al Bastaki with their financial and business setup strategy.
            </p>
            
            <button className="bg-white text-[#00223E] rounded-full p-[6px] flex items-center gap-4 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shrink-0 group">
              <div className="w-[38px] h-[38px] rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <span className="font-bold text-[14px] pr-5 pb-[1px]">Schedule Free Consultation</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
