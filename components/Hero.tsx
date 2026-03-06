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
          <h1 className="text-[3.75rem] md:text-[4.25rem] lg:text-[5rem] font-bold mb-6 leading-[1.05] tracking-tight text-white">
              Elevate Your <br/> Business Setup <br/>
            <span className="text-primary">In Dubai</span>
          </h1>

          <p className="text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed text-white/85 max-w-[36rem]">
            From company formation to licensing and visa support, we guide you end-to-end with clear steps,
            fast turnaround, and compliant execution.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {['Mainland & Freezone', 'Bank Account Support', 'Visa & PRO Services'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3.5 py-2 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column Glassmorphic Card (matching the UI reference) */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1, delay: 0.3, ease:"easeOut"}}
          className="justify-self-center md:justify-self-end mt-10 md:mt-0 w-full drop-shadow-2xl"
        >
          <div 
            className="bg-white/10 backdrop-blur-[16px] border border-white/20 rounded-[2rem] rounded-tr-none p-7 md:p-8 max-w-[460px] w-full text-white relative overflow-hidden mx-auto md:ml-auto"
            style={{ 
              WebkitMaskImage: 'linear-gradient(225deg, transparent 55px, black 56px)',
              maskImage: 'linear-gradient(225deg, transparent 55px, black 56px)'
            }}
          >
            {/* Subtle glow inside card */}
            <div className="absolute -top-10 -right-10 w-40 h-32 bg-white/10 blur-[50px] rounded-full pointer-events-none"></div>

            {/* Header */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[12px] font-semibold tracking-wide text-white/90">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,255,255,0.25)]" />
                Free consultation
              </div>
              <h3 className="mt-4 text-[1.35rem] md:text-[1.55rem] font-bold leading-tight tracking-tight">
                Get in touch
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/80">
                Share your details and we will call you back.
              </p>
            </div>

            {/* Form */}
            <form className="relative z-10 mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[13px] font-medium text-white/85 mb-1" htmlFor="heroContactName">
                  Name
                </label>
                <input
                  id="heroContactName"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-[14px] text-white placeholder:text-white/45 focus:outline-none focus:border-white/45 focus:bg-white/15 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-white/85 mb-1" htmlFor="heroContactEmail">
                  Email
                </label>
                <input
                  id="heroContactEmail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="name@company.com"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-[14px] text-white placeholder:text-white/45 focus:outline-none focus:border-white/45 focus:bg-white/15 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-white/85 mb-1" htmlFor="heroContactPhone">
                  Contact number
                </label>
                <input
                  id="heroContactPhone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+971 50 123 4567"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-[14px] text-white placeholder:text-white/45 focus:outline-none focus:border-white/45 focus:bg-white/15 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-full bg-white text-primary font-bold py-3.5 text-[14px] tracking-wide hover:bg-gray-100 transition-colors shadow-xl"
              >
                Request a callback
              </button>

              <div className="text-[12px] text-white/65 leading-relaxed">
                By submitting, you agree to be contacted regarding your inquiry.
              </div>
            </form>
          </div>
        </motion.div>
        
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-8 pt-20">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8 w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-10">
          
          {/* Left - Socials */}
          <div className="flex flex-col gap-3 text-[15px] font-medium hidden md:flex min-w-[150px]">
            <div className="relative flex items-center group">
              <span className="absolute -left-4 w-[5px] h-[5px] rounded-full opacity-0 scale-75 bg-primary group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-[0_0_10px_rgba(0,102,166,0.75)] transition-all pointer-events-none"></span>
              <a href="#" className="text-white/50 hover:text-white transition-colors hover:underline hover:decoration-primary decoration-2 underline-offset-4">Facebook</a>
            </div>
            <div className="relative flex items-center group">
              <span className="absolute -left-4 w-[5px] h-[5px] rounded-full opacity-0 scale-75 bg-primary group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-[0_0_10px_rgba(0,102,166,0.75)] transition-all pointer-events-none"></span>
              <a href="#" className="text-white/50 hover:text-white transition-colors hover:underline hover:decoration-primary decoration-2 underline-offset-4">Twitter</a>
            </div>
            <div className="relative flex items-center group">
              <span className="absolute -left-4 w-[5px] h-[5px] rounded-full opacity-0 scale-75 bg-primary group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-[0_0_10px_rgba(0,102,166,0.75)] transition-all pointer-events-none"></span>
              <a href="#" className="text-white/50 hover:text-white transition-colors hover:underline hover:decoration-primary decoration-2 underline-offset-4">Linkedin</a>
            </div>
            <div className="relative flex items-center group">
              <span className="absolute -left-4 w-[5px] h-[5px] rounded-full opacity-0 scale-75 bg-primary group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-[0_0_10px_rgba(0,102,166,0.75)] transition-all pointer-events-none"></span>
              <a href="#" className="text-white/50 hover:text-white transition-colors hover:underline hover:decoration-primary decoration-2 underline-offset-4">Instagram</a>
            </div>
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
