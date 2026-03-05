'use client'
import { motion } from 'framer-motion'

export default function Hero(){
  return(
    <section className="relative pt-[160px] md:pt-[200px] pb-20 md:pb-[140px] text-white overflow-hidden bg-primary w-full">
      {/* Abstract Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003B62] to-[#0066A6] opacity-95 flex items-center justify-center">
        {/* Subtle patterned overlay to match the high-end feel in the image */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      </div>
      {/* Soft light bloom behind hero text */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8, ease:"easeOut"}}
        >
          {/* Subtle badge above title */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></span>
            Your Trusted Business Partner
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.15] tracking-tight">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">Business Setup</span> In Dubai
          </h1>
          
          <p className="mb-10 text-lg md:text-xl text-white/80 font-medium max-w-xl leading-relaxed">
            Helping visionaries and entrepreneurs establish, grow, and maintain competitive businesses across the UAE with expert guidance.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition shadow-xl hover:-translate-y-0.5 text-[15px]">
              Start Your Business
            </button>
            <button className="flex items-center gap-3 bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold transition hover:-translate-y-0.5 text-[15px] group">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                 <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </span>
              Contact Us
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,scale:0.95}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1, delay: 0.2, ease:"easeOut"}}
          className="relative h-[480px] lg:h-[550px] w-full hidden md:block"
        >
          {/* Glassmorphic decorative card representing dashboard/content */}
          <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md shadow-2xl p-6 flex flex-col gap-4 overflow-hidden transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
             
             {/* Decorative Window Top */}
             <div className="flex items-center gap-2 mb-2 pb-4 border-b border-white/10">
               <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
               <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
             </div>

             <div className="flex gap-4">
               <div className="w-1/3 h-28 bg-white/20 rounded-2xl flex items-center justify-center">
                 <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
               </div>
               <div className="w-2/3 h-28 bg-white/10 rounded-2xl p-4 flex flex-col justify-end">
                 <div className="w-1/2 h-3 bg-white/20 rounded mb-2"></div>
                 <div className="w-3/4 h-2 bg-white/10 rounded"></div>
               </div>
             </div>

             <div className="w-full h-40 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-4 relative overflow-hidden mt-4">
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-400/20 to-transparent"></div>
               <svg className="w-full h-full text-white/20 absolute bottom-0 -mb-4" preserveAspectRatio="none" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1"><path d="M0,20 Q20,0 40,10 T80,0 T100,20" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
             
          </div>

          {/* Floating stat element */}
          <motion.div 
            animate={{y:[-15,15,-15]}} 
            transition={{repeat:Infinity, duration:5, ease:"easeInOut"}} 
            className="absolute -left-12 top-1/3 bg-white text-gray-800 p-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 hidden lg:flex"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
               <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <div className="text-xl font-black text-gray-900 leading-none">100%</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Setup Success</div>
            </div>
          </motion.div>

        </motion.div>
        
      </div>
    </section>
  )
}
