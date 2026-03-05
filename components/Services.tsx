'use client'
import { motion } from 'framer-motion'
import { Rethink_Sans } from 'next/font/google'
import { useRef } from 'react'

const rethink = Rethink_Sans({ subsets: ['latin'] })

const services = [
  {
    title: "Company Formation",
    description: "Setting up a new business or branch office in Dubai and the United Arab Emirates can be a complicated and expensive procedure. So We help to establish your company under the correct legal framework choosing the most cost effective and less time consuming alternative. Moreover Identify the strength and weakness of all the possible options related to your business is our commitment.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
      </svg>
    )
  },
  {
    title: "Business Setup",
    description: "Al Bastaki Business Services hold responsibility for all the registration aspects of a new business. Also our goal is to help create and grow businesses by providing the necessary support and management, consultancy services, feasibility studies, financial projection, financial validation, administrative and technical services.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: "Accounting Services",
    description: "Based on the requirements of our clients we can provide a complete range of accounting services. Still Payroll can be for many new business a heavy duty since the required knowledge of law, customs and local practices in United Arab Emirates necessitate training and highly qualified staff. So We can help you in this task maintaining the vital confidentiality and accuracy.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M7 15h0"></path><path d="M2 9.5h20"></path>
      </svg>
    )
  },
  {
    title: "Consultancy Services",
    description: "Hire the Best Consultants who has a deep understanding of that specific region and provide a description of the investment context and challenges for your business considering investing abroad and support you in assessing the potential opportunities.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path>
      </svg>
    )
  },
  {
    title: "Event Management",
    description: "Event management includes a variety of functions for executing large scale events, which might include conferences, conventions, concerts, trade shows, festivals, and ceremonies. It involves handling the overall logistics of the event, working with staff, and conducting project management of the event as a whole.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  },
  {
    title: "IT Services",
    description: "We offer every solution under one roof to grow your business. Also we Expertise in Website Design, Web Development, Branding, Digital Marketing. In addition We have the passion, skills, and energy to deliver rewarding solutions. Also We offer the most affordable and creative solutions to expand your business.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  }
]

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className={`relative pt-14 md:pt-20 pb-0 overflow-hidden ${rethink.className}`}>
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

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative z-10 w-full flex flex-col">
        
        {/* Top Header Section with Slider Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-8">
          <div className="max-w-3xl text-left">
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
              Expert business setup and management. <br className="hidden md:block" />
              <span className="text-white/60">Custom-crafted for the way your business works.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{opacity:0, x:20}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.6, delay:0.4}}
            className="flex items-center gap-3 shrink-0 pb-2"
          >
            <button 
              onClick={() => slide('left')} 
              className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              aria-label="Previous services"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={() => slide('right')} 
              className="w-[50px] h-[50px] rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,102,166,0.3)]"
              aria-label="Next services"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Glass Cards Slider Layout with Native Snap */}
        <div 
          ref={scrollRef}
          className="flex flex-row w-full relative z-10 gap-4 lg:gap-5 px-2 pt-8 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="group relative flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[340px] h-[380px] sm:h-[400px] lg:h-[440px] cursor-pointer snap-center lg:snap-start"
            >
              {/* Expanding Glass Background with gaps and rounded edges */}
              {/* Unhovered: 110px bottom pill. Hovered: Full height glass card. */}
              <div className="absolute bottom-0 inset-x-0 h-full lg:h-[110px] group-hover:h-full bg-white/5 group-hover:bg-[#00223E]/90 backdrop-blur-md transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] rounded-3xl z-0 group-hover:shadow-2xl border border-white/10 group-hover:border-white/20" />

              {/* Icon - Leaps to top on hover */}
              <div className="absolute left-6 lg:left-8 bottom-[55px] lg:bottom-[50px] group-hover:bottom-[65%] lg:group-hover:bottom-[72%] transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-[#bad5e8] group-hover:text-primary z-10">
                <div className="bg-transparent group-hover:bg-white/10 p-0 group-hover:p-2 rounded-xl transition-all duration-[600ms]">
                  {svc.icon}
                </div>
              </div>

              {/* Content Container - Anchored to bottom, grid expands upwards on hover */}
              <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-8 z-10 flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-[17px] sm:text-[19px] font-bold text-white leading-snug mb-0 group-hover:mb-3 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  {svc.title}
                </h3>
                
                {/* Expandable Description & Button */}
                <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <div className="overflow-hidden opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] lg:delay-100">
                    <div className="pt-2 lg:pt-3 flex flex-col">
                      <p className="text-[13.5px] lg:text-[14px] text-white/70 leading-[1.6] font-medium mb-6 line-clamp-4 lg:line-clamp-5">
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

      {/* Brand-Themed Infinite Scrolling Marquee */}
      <div className={`w-full relative z-20 bg-primary text-white py-4 lg:py-6 overflow-hidden flex border-t border-white/10 shadow-[0_-5px_25px_rgba(0,102,166,0.2)] ${rethink.className}`}>
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex whitespace-nowrap w-fit items-center"
        >
          {/* We duplicate the content twice to ensure seamless looping without snapping gaps */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center w-max shrink-0">
              {[
                "REAL ESTATE",
                "HEALTHCARE",
                "MANUFACTURING",
                "TECHNOLOGY",
                "RETAIL",
              ].map((item, j) => (
                <div key={j} className="flex items-center shrink-0">
                  <span className="font-bold tracking-[0.2em] text-[15px] lg:text-[18px] px-8 lg:px-12 text-white/90">
                    {item}
                  </span>
                  <span className="text-white/40 text-[20px] lg:text-[28px] font-normal mt-1">
                    ❋
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

