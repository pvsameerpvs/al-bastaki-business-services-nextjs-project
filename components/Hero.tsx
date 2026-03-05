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
    <section className="relative pt-[160px] md:pt-[200px] pb-[320px] md:pb-[240px] text-white overflow-hidden w-full min-h-screen flex items-center">
      
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
        <div className="absolute inset-0 bg-black/40 z-10 transition-all"></div>
        {/* Subtle primary color gradient overlay matching business theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B62]/90 via-primary/40 to-transparent z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/95 via-[#001D33]/40 to-[#001D33]/20 z-10"></div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative z-20 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
        
        {/* Left Column Content */}
        <motion.div
          initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8, ease:"easeOut"}}
        >
          <h1 className="text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold mb-6 leading-[1.1] tracking-tight text-white">
             Elevate Your <br/> Business Setup <br/>
            <span className="text-primary">In Dubai</span>
          </h1>
          
          
        </motion.div>

        {/* Right Column Glassmorphic Card (matching the UI reference) */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1, delay: 0.3, ease:"easeOut"}}
          className="justify-self-center md:justify-self-end mt-10 md:mt-0 w-full drop-shadow-2xl"
        >
          <div 
            className="bg-white/10 backdrop-blur-[16px] border border-white/20 rounded-[2rem] rounded-tr-none p-7 md:p-8 max-w-[280px] w-full text-white relative overflow-hidden ml-auto hidden md:block"
            style={{ 
              WebkitMaskImage: 'linear-gradient(225deg, transparent 55px, black 56px)',
              maskImage: 'linear-gradient(225deg, transparent 55px, black 56px)'
            }}
          >
            {/* Subtle glow inside card */}
            <div className="absolute -top-10 -right-10 w-40 h-32 bg-white/10 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="text-[4rem] font-bold leading-none tracking-tight mb-2 relative z-10">20+</div>
            <div className="text-[1.1rem] text-white/95 mb-6 font-medium relative z-10">Years Of Expertise</div>
            
            <div className="flex -space-x-3 mb-6 relative z-10">
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
                  className="w-12 h-12 rounded-full border-[2px] border-white object-cover relative z-10" 
                  style={{ zIndex: 10 - i }}
                />
              ))}
            </div>
            
            <div className="text-[1.1rem] font-normal leading-snug tracking-wide text-white/95 relative z-10">
              2,250+ businesses are <br/> trusting us.
            </div>
          </div>
        </motion.div>
        
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-8 pt-20">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8 w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-10">
          
          {/* Left - Socials */}
          <div className="flex flex-col gap-3 text-[15px] font-medium hidden md:flex min-w-[150px]">
            <div className="relative flex items-center">
              <span className="absolute -left-4 w-[5px] h-[5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
              <a href="#" className="text-white hover:text-white/80 transition-colors">Facebook</a>
            </div>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Linkedin</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Instagram</a>
          </div>

          {/* Center - Slider Counter */}
          <div className="flex items-baseline md:absolute md:left-1/2 md:-translate-x-1/2 md:translate-y-4">
            <span className="text-[4rem] font-bold text-white tracking-tighter leading-none">
              0{currentImage + 1}
            </span>
            <span className="text-2xl text-white/40 tracking-widest ml-1 font-light">
              /0{images.length}
            </span>
          </div>

          {/* Right - Text & CTA */}
          <div className="flex flex-col max-w-[320px] gap-5 mt-4 md:mt-0">
            <p className="text-[15px] text-white/90 leading-relaxed font-medium">
              Tailored business setup and management strategies to optimize performance and reduce risks.
            </p>
            <button className="flex items-center self-start gap-4 bg-white text-primary pr-6 pl-2 py-2 rounded-full font-bold hover:bg-gray-100 transition shadow-xl text-sm group">
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 transition-colors bg-white">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              Explore Services
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}
