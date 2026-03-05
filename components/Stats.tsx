'use client'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { Rethink_Sans } from 'next/font/google'

const rethink = Rethink_Sans({ subsets: ['latin'] })

export default function Stats(){
  return(
    <section className={`bg-[#F9FAFB] py-24 md:py-32 overflow-hidden ${rethink.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side (Image & Floating Achievements) */}
          <div className="relative isolate z-10 w-full lg:w-[90%] pt-8">
            <div className="w-full md:w-[75%] h-[400px] md:h-[500px] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-sm">
              <img 
                src="/stats-image.jpg" 
                alt="Professional Consultant" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Details Box */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[40%] md:top-auto md:bottom-12 right-0 md:right-[-40px] bg-white rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] w-[95%] md:w-[480px] z-20 border border-gray-100/50"
            >
              {/* Top notch */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
              </div>

              <div className="text-[11px] font-bold text-gray-800 uppercase tracking-widest mb-8">Achievements</div>
              
              <div className="flex justify-between items-center text-[11px] text-gray-400 mb-6 font-semibold uppercase tracking-wider">
                <span>Name of the award</span>
                <span>Year</span>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                   <span className="font-bold text-[#1A1E23] text-[14.5px]">Best Business Setup Firm</span>
                   <span className="font-bold text-[#1A1E23] text-[14.5px]">2024</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="font-bold text-[#1A1E23] text-[14.5px]">Top 50 PRO Services In UAE</span>
                   <span className="font-bold text-[#1A1E23] text-[14.5px]">2022</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="font-bold text-[#1A1E23] text-[14.5px]">Client Choice Award</span>
                   <span className="font-bold text-[#1A1E23] text-[14.5px]">2023</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col relative z-20 lg:pl-8 xl:pl-4 mt-20 lg:mt-0">
            
            <p className="font-medium text-[16px] text-gray-600 leading-relaxed mb-12 max-w-[500px]">
              <span className="font-bold text-gray-900">Al Bastaki</span> is a forward-thinking business setup and management consulting firm committed to helping businesses thrive with clarity, confidence, and control.
            </p>

            {/* Stats row directly aligned like the image */}
            <div className="grid grid-cols-3 gap-6 mb-16 max-w-[500px]">
              <div>
                <h3 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-900 leading-none tracking-tighter mb-4">
                  <CountUp end={99} duration={2}/>%
                </h3>
                <p className="text-[12px] text-gray-400 font-semibold tracking-wide">Professional Advisors</p>
              </div>
              <div>
                <h3 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-900 leading-none tracking-tighter mb-4">
                  <CountUp end={2.2} decimals={1} duration={2}/>K+
                </h3>
                <p className="text-[12px] text-gray-400 font-semibold tracking-wide">Completed Projects</p>
              </div>
              <div>
                <h3 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-900 leading-none tracking-tighter mb-4">
                  <CountUp end={98} duration={2}/>%
                </h3>
                <p className="text-[12px] text-gray-400 font-semibold tracking-wide">Client Retention</p>
              </div>
            </div>

            {/* Themed Quote Card aligned right */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="self-start md:self-end lg:mr-10 xl:mr-16 w-[300px]"
            >
              <div className="bg-[#E6F0F6] rounded-[2rem] shadow-sm flex flex-col overflow-hidden">
                <div className="p-8 pb-6">
                  <div className="text-[17px] leading-[1.4] font-bold text-[#003B62] mb-8 tracking-tight">
                    "We don't just process paperwork—we build better businesses."
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img src="https://i.pravatar.cc/100?img=11" alt="CEO" className="w-[46px] h-[46px] rounded-full border-2 border-white shadow-sm object-cover" />
                    <div>
                      <div className="font-bold text-gray-900 text-[13.5px]">Ahmed Al Bastaki</div>
                      <div className="text-[12.5px] text-gray-500 font-medium mt-0.5">Founder & CEO</div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary hover:bg-primary/95 transition-colors text-white text-[12px] font-bold text-center py-[18px] uppercase tracking-[0.1em] mx-3 mb-3 rounded-[1.2rem] cursor-pointer shadow-md">
                  CALL US: +971 4 123 4567
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
