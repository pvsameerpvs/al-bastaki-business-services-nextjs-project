'use client'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F9FAFB] pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        
        <motion.div 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="mb-10 lg:mb-14"
        >
          <span className="text-[13px] font-semibold text-gray-500 tracking-widest uppercase block">
            Why Choose Al Bastaki?
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <motion.div 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.7, delay:0.1}}
            className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col"
          >
            <h3 className="text-[22px] font-bold text-gray-900 mb-8 tracking-tight">Expertise That Delivers</h3>
            
            <div className="mb-10">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
                <path d="M19 9V4h-5" />
              </svg>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-900">Certified Professionals:</strong> Experts in UAE company formation, PRO tasks, and corporate legalities.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-900">Industry Specialization:</strong> Deep knowledge in mainland, free zone, and offshore setups.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-900">Tech-Forward:</strong> Leveraging modern tools for precision, transparency, and rapid efficiency.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.7, delay:0.2}}
            className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col"
          >
            <h3 className="text-[22px] font-bold text-gray-900 mb-6 tracking-tight">Client-Centric Approach</h3>
            
            <p className="text-primary font-semibold italic mb-6 text-[15px] leading-relaxed">
              "We listen first—your goals shape our setup strategies."
            </p>
            
            <p className="text-gray-500 text-[14.5px] mb-8 font-medium">
              Dedicated account managers for personalized service ensuring a seamless journey.
            </p>

            <div className="mt-auto rounded-[1.5rem] overflow-hidden h-[240px] w-full">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                alt="Client handshake" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.7, delay:0.3}}
            className="bg-[#00223E] rounded-[2rem] p-8 lg:p-10 shadow-xl flex flex-col text-white"
          >
            <h3 className="text-[22px] font-bold mb-8 tracking-tight">Proven Results</h3>
            
            <div className="flex gap-4 mb-10 h-[220px]">
              {/* Image Left */}
              <div className="w-[50%] rounded-[1.2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" 
                  alt="Consultant working" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dark Inner Card */}
              <div className="w-[50%] bg-[#001528] rounded-[1.2rem] p-4 flex flex-col items-center justify-center text-center">
                <div className="text-[12px] text-white/90 font-medium mb-3 leading-snug">
                  Customer<br/>Satisfaction
                </div>
                
                <svg width="48" height="48" viewBox="0 0 24 24" className="w-[50px] h-[50px] mb-4 text-yellow-400 fill-current">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#001528"/>
                  <path d="M7 14c1.5 2.5 4.5 4 5 4s3.5-1.5 5-4H7z" fill="#001528"/>
                </svg>

                <div className="flex items-center gap-1">
                  <span className="text-xl font-bold">5.0</span>
                  <div className="flex text-yellow-400 text-[11px] gap-[1px]">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-[13px] text-white/80 leading-snug">
                  *2,250+ successful business setups in UAE*
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-[13px] text-white/80 leading-snug">
                  *98% client retention rate over 15 years*
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
