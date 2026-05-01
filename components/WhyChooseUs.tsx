'use client'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  return (
    <section className="bg-lightGrey py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        
        <motion.div 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="mb-14 lg:mb-20 grid md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] gap-6 md:gap-12 items-start"
        >
          <div className="md:pt-3">
            <span className="text-[16px] font-bold text-gray-500 tracking-widest uppercase block">
              UAE Business Advantage
            </span>
          </div>
          <div>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-medium text-gray-900 leading-[1.25] tracking-tight max-w-[900px]">
              Local UAE expertise with the strength to move business forward.
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-gray-500 leading-relaxed font-medium max-w-[720px]">
              Al Bastaki supports entrepreneurs, SMEs, and corporate clients with practical government-facing execution, licensing knowledge, and reliable day-to-day business services.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* Card 1 */}
          <motion.div 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.7, delay:0.1}}
            className="bg-white rounded-[1.75rem] p-7 sm:p-8 lg:p-9 shadow-[0_18px_45px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full"
          >
            <h3 className="text-[22px] font-bold text-gray-900 mb-6 tracking-tight">Deep UAE Market Knowledge</h3>
            
            <div className="mb-8">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
                <path d="M19 9V4h-5" />
              </svg>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-900">Local Experience:</strong> Long-standing understanding of Dubai and UAE business setup requirements, authority processes, and documentation standards.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-900">Complete Setup Coverage:</strong> Mainland, free zone, offshore, branch office, licensing, PRO, visa, and corporate amendment support.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                  <strong className="text-gray-900">Practical Direction:</strong> Clear recommendations based on business activity, ownership needs, budget, timeline, and future expansion.
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
            className="bg-white rounded-[1.75rem] p-7 sm:p-8 lg:p-9 shadow-[0_18px_45px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full"
          >
            <h3 className="text-[22px] font-bold text-gray-900 mb-5 tracking-tight">Senior-Led Execution</h3>
            
            <p className="text-primary font-semibold mb-5 text-[15px] leading-relaxed">
              Experienced advisors manage the process with clear ownership from first consultation to final approval.
            </p>
            
            <p className="text-gray-500 text-[14.5px] mb-8 leading-relaxed font-medium">
              Clients receive structured guidance, responsive coordination, and careful follow-up across documentation, authority submissions, renewals, and operational requirements.
            </p>

            <div className="mt-auto grid grid-cols-2 gap-3">
              {['Activity Review', 'Document Control', 'Authority Follow-Up', 'Renewal Planning'].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] bg-lightGrey border border-gray-100 px-4 py-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[13px] font-bold text-gray-900 leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.7, delay:0.3}}
            className="bg-[#00223E] rounded-[1.75rem] p-7 sm:p-8 lg:p-9 shadow-[0_24px_60px_rgba(0,34,62,0.22)] flex flex-col text-white h-full md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-[22px] font-bold mb-7 tracking-tight">Established Business Strength</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-[1.15rem] bg-[#001528] p-5 min-h-[170px] flex flex-col justify-between">
                <div className="text-[12px] text-white/60 font-semibold tracking-widest uppercase">
                  Since
                </div>
                <div>
                  <div className="text-[42px] font-bold leading-none text-white">
                    2000
                  </div>
                  <p className="mt-4 text-[12px] text-white/65 leading-relaxed">
                    Years of UAE business service experience.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.15rem] bg-white/10 border border-white/10 p-5 min-h-[170px] flex flex-col justify-between">
                <div className="text-[12px] text-white/60 font-semibold tracking-widest uppercase">
                  Clients
                </div>
                <div>
                  <div className="text-[42px] font-bold leading-none text-white">
                    2,250+
                  </div>
                  <p className="mt-4 text-[12px] text-white/65 leading-relaxed">
                    Businesses supported across core corporate services.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-[13px] text-white/80 leading-snug">
                  2,250+ clients supported across business setup, PRO services, accounting, consultancy, IT, and event services.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 mt-2.5 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-[13px] text-white/80 leading-snug">
                  Strong local coordination for approvals, documentation, compliance, renewals, and long-term corporate support.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
