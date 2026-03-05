'use client'
import { motion } from 'framer-motion'
import { Rethink_Sans } from 'next/font/google'

const rethink = Rethink_Sans({ subsets: ['latin'] })

const services = [
  {
    title: "Company Formation",
    description: "End-to-end setup for Mainland, Free Zone, and Offshore companies in the UAE.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
      </svg>
    )
  },
  {
    title: "Visa & PRO Services",
    description: "Fast-track visa processing, Emirates ID, and seamless government document approvals.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    title: "Document Legalization",
    description: "Professional attestation, translation, and notarization for corporate compliance.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M7 15h0"></path><path d="M2 9.5h20"></path>
      </svg>
    )
  },
  {
    title: "Corporate Restructuring",
    description: "Strategic advice and management to rebuild, expand, and optimize your business.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path>
      </svg>
    )
  }
]

export default function Services() {
  return (
    <section className={`relative py-24 md:py-36 overflow-hidden ${rethink.className}`}>
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" 
          alt="Team working" 
          className="w-full h-full object-cover"
        />
        {/* Dark deep navy overlay to match theme */}
        <div className="absolute inset-0 bg-[#001A30]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001528] via-[#001528]/80 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative z-10 w-full">
        
        {/* Top Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
          <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            className="mb-6"
          >
            <span className="text-[12px] font-bold text-white/50 tracking-[0.2em] uppercase">
              Al Bastaki Services
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.8, delay:0.2}}
            className="text-[28px] md:text-[36px] lg:text-[42px] font-medium text-white leading-[1.3] tracking-tight"
          >
            Expert business setup and management advice, all in one place. <br className="hidden md:block" /><span className="text-white/60">Custom-crafted for the way your business works.</span>
          </motion.h2>
        </div>

        {/* Glass Cards Layout with Small Gap */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[480px] relative z-10 gap-3 lg:gap-4 justify-center">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="group relative flex-1 h-[320px] lg:h-full cursor-pointer"
            >
              {/* Expanding Glass Background with gaps and rounded edges */}
              {/* Unhovered: 120px bottom pill. Hovered: Full height glass card. */}
              <div className="absolute bottom-0 inset-x-0 h-full lg:h-[120px] group-hover:h-full bg-white/5 group-hover:bg-[#00223E]/80 backdrop-blur-md transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] rounded-3xl z-0 group-hover:shadow-2xl border border-white/10 group-hover:border-white/20" />

              {/* Icon - Leaps to top on hover */}
              <div className="absolute left-6 lg:left-8 bottom-[75px] lg:bottom-[75px] group-hover:bottom-[65%] lg:group-hover:bottom-[78%] transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-[#bad5e8] group-hover:text-primary z-10">
                <div className="bg-transparent group-hover:bg-white/10 p-0 group-hover:p-3 rounded-2xl transition-all duration-[600ms]">
                  {svc.icon}
                </div>
              </div>

              {/* Content Container - Anchored to bottom, grid expands upwards on hover */}
              <div className="absolute bottom-6 left-8 right-8 z-10 flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-[17px] sm:text-[19px] font-bold text-white leading-snug mb-0 group-hover:mb-3 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  {svc.title}
                </h3>
                
                {/* Expandable Description & Button */}
                <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <div className="overflow-hidden opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] lg:delay-100">
                    <div className="pt-2 lg:pt-4 flex flex-col">
                      <p className="text-[14px] text-white/70 leading-relaxed font-medium mb-6">
                        {svc.description}
                      </p>
                      
                      {/* Interactive Button */}
                      <button className="flex items-center group/btn cursor-pointer w-fit mt-auto lg:pb-2">
                        <span className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-primary text-white z-10 relative transition-transform duration-300 group-hover/btn:scale-105">
                          <svg className="w-4 h-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        <span className="flex items-center h-[36px] pl-6 pr-5 rounded-full bg-primary/20 text-white font-semibold text-[13px] -ml-4 relative transition-colors duration-300 group-hover/btn:bg-primary">
                          Discover more
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
