'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero(){
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/hero-main1.jpg', '/hero-main2.jpg']

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return(
    <section className="relative pt-[160px] md:pt-[220px] pb-20 md:pb-[140px] text-white overflow-hidden w-full min-h-[90vh] flex items-center">
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 bg-[#00223E]">
        {images.map((src, index) => (
          <div 
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
              style={{ 
                backgroundImage: `url(${src})`,
                transform: index === currentImage ? 'scale(1.05)' : 'scale(1)'
              }}
            />
          </div>
        ))}
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 z-10 transition-all"></div>
        {/* Subtle primary color gradient overlay matching business theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B62]/90 via-primary/50 to-transparent z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/80 via-transparent to-[#001D33]/40 z-10"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative z-20 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
        
        {/* Left Column Content */}
        <motion.div
          initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8, ease:"easeOut"}}
        >
          <h1 className="text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold mb-6 leading-[1.1] tracking-tight text-white">
             Elevate Your <br/> Business Setup <br/>
            <span className="text-green-300">In Dubai</span>
          </h1>
          
          <p className="mb-10 text-lg md:text-xl text-white/90 font-medium max-w-xl leading-relaxed">
            Helping visionaries and entrepreneurs establish, grow, and maintain competitive businesses across the UAE with expert guidance.
          </p>
        
        </motion.div>

        {/* Right Column Glassmorphic Card (matching the UI reference) */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1, delay: 0.3, ease:"easeOut"}}
          className="justify-self-center md:justify-self-end mt-10 md:mt-0 w-full"
        >
          <div className="bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-[2rem] p-8 md:p-10 max-w-[360px] w-full text-white shadow-2xl relative overflow-hidden ml-auto">
            {/* Subtle glow inside card */}
            <div className="absolute -top-20 -right-20 w-40 h-32 bg-blue-300/20 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="text-[4.5rem] font-bold leading-none tracking-tight mb-1">20+</div>
            <div className="text-[1.15rem] text-white/90 mb-8 font-medium">Years Of Expertise</div>
            
            <div className="flex -space-x-4 mb-6">
              {[
                "https://i.pravatar.cc/100?img=11", 
                "https://i.pravatar.cc/100?img=12", 
                "https://i.pravatar.cc/100?img=13", 
                "https://i.pravatar.cc/100?img=14"
              ].map((src, i) => (
                <img 
                  key={i}
                  src={src}
                  alt={`Client ${i}`} 
                  className="w-[52px] h-[52px] rounded-full border-[3px] border-[#20455E] object-cover relative z-10" 
                  style={{ zIndex: 10 - i }}
                />
              ))}
            </div>
            
            <div className="font-semibold text-[1.1rem] mb-3 pr-4 leading-tight">2,250+ businesses are trusting us.</div>
            
            <p className="text-sm text-white/70 leading-relaxed">
              Tailored business setup and management strategies to optimize performance and drive continuous growth.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
