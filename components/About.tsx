'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

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
            <span className="text-[13px] font-semibold text-gray-500 tracking-widest uppercase mb-4 block">
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
              <span className="font-bold text-gray-900">Al Bastaki</span> was founded in 2005 with a simple mission: to empower businesses with financial clarity and strategic direction. What began as a local PRO firm has evolved into a full-service consultancy serving 2,250+ clients across the UAE.
            </h2>
            
            {/* Themed Split-Pill Button */}
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
