'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function About(){
  const containerRef = useRef<HTMLElement>(null)
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Apply a spring physics layer to make the scroll movement extremely smooth
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  // Map progress to a much faster/further horizontal shift (move left aggressively)
  const xMovement = useTransform(smoothProgress, [0, 1], [50, -600])
  
  // Rotate backwards smoothly in sync with the horizontal movement to simulate rolling
  const rotateMovement = useTransform(smoothProgress, [0, 1], [0, -720])

  return(
    <section ref={containerRef} className="bg-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative z-10">
        
        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] gap-8 md:gap-12">
          {/* Left Column - Small Title */}
          <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, margin:"-100px"}}
            transition={{duration:0.6}}
            className="md:pt-4"
          >
            <span className="text-[16px] font-bold text-gray-500 tracking-widest uppercase mb-4 block">
              About Us
            </span>
          </motion.div>
          
          {/* Right Column - Large Typography & Button */}
          <motion.div
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, margin:"-100px"}}
            transition={{duration:0.8, delay:0.2}}
          >
            <h2 className="text-[32px] text-gray-700 leading-[1.45] font-medium mb-12 max-w-[1000px] tracking-tight">
              <span className="font-bold text-gray-900">Al Bastaki</span> is a leading corporate services firm founded in 2000 to help businesses establish, manage, and grow with clarity. From a trusted Dubai base, we now support 2,250+ clients across company formation, PRO services, accounting, consultancy, and IT, with regional reach across the GCC and wider Middle East, including Egypt.
            </h2>
            
            {/* Themed Split-Pill Button */}
            <Link href="/about" className="inline-block">
              <button className="flex items-center group cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform">
                <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-primary/10 text-primary z-10 relative group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="flex items-center h-[52px] pl-10 pr-8 rounded-full bg-primary/10 text-primary font-bold -ml-6 relative transition-colors duration-300 group-hover:bg-primary/20">
                  Discover More
                </span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ── CHAIRMAN'S MESSAGE SECTION (Simplified) ── */}
        <div className="mt-24 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[1000px] mx-auto"
          >
            <div className="bg-lightGrey rounded-[2rem] p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-10 md:gap-14">
              
              {/* Simple Portrait Image */}
              {/* <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/chairman-message.png"
                    alt="Chairman's Portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </div> */}

              {/* Message Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <div className="h-px w-6 bg-primary" />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                    Chairman's Message
                  </span>
                </div>
                
                <p className="text-[18px] md:text-[21px] text-gray-700 leading-relaxed font-medium italic">
                  "Our mission is to simplify the complexities of doing business in the UAE. We believe that with the right foundation and support, every vision can become a reality."
                </p>

                <div className="mt-6">
                  <div className="text-[18px] font-bold text-gray-900 tracking-tight">
                    Shahab Al Bastaki
                  </div>
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider mt-1">
                    Founder & Chairman
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative Large Asterisk (Bottom Right) */}
      <motion.div 
        style={{ x: xMovement, rotate: rotateMovement }}
        className="absolute right-[-10px] bottom-[-10px] md:right-10 md:bottom-10 opacity-80 pointer-events-none"
      >
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9" />
        </svg>
      </motion.div>
    </section>
  )
}
