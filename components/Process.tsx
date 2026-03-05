
import { Rethink_Sans } from 'next/font/google'

const rethink = Rethink_Sans({ subsets: ['latin'] })

const cards = [
  {
    step: '01',
    title: 'Company Formation',
    description:
      'Setting up a new business or branch office in Dubai and the UAE can be a complicated and expensive procedure. We help establish your company under the correct legal framework, choosing the most cost-effective and time-saving alternatives.',
    points: ['Dubai Business Setup', 'Free Zone Company Setup', 'Offshore Company Setup', 'Branch of Foreign Company Setup'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    tone: 'light' as const
  },
  {
    step: '02',
    title: 'Business Setup',
    description:
      'Al Bastaki Business Services holds responsibility for all registration aspects of a new business. Our goal is to help evaluate, create, and grow businesses by providing necessary support, management, and consultancy services.',
    points: ['Company Setup & Liquidation', 'Visa & PRO Services', 'Local Partner', 'Contracts & POA Services', 'Amendments & Registration', 'Document Copying', 'Trademark Registration', 'Dubai Court Services', 'Corporate Services Provider'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    tone: 'dark' as const
  },
  {
    step: '03',
    title: 'Accounting Services',
    description:
      'Based on the requirements of our clients, we can provide a complete range of accounting services. We can help you manage these tasks while maintaining vital confidentiality and accuracy for your business.',
    points: ['Accounting & Bookkeeping', 'Payroll Management', 'Auditing Services', 'VAT Registration', 'Bank Account Opening'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    tone: 'primary' as const
  },
  {
    step: '04',
    title: 'Consultancy Services',
    description:
      'Hire the best consultants who have a deep understanding of the region and provide insights into the investment context and challenges for your business, ensuring you capture potential growth opportunities.',
    points: ['Marketing Management', 'Feasibility Study Consultancies', 'Facilities Resource Planning', 'Management Services', 'Facilities Management Services'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    tone: 'light' as const
  },
  {
    step: '05',
    title: 'Event Management',
    description:
      'Event management includes a variety of functions for executing large scale events, from handling the overall logistics to working with staff and conducting project management of the event as a whole.',
    points: ['Events Organizing & Managing', 'Exhibition Organizing', 'Film, TV & Radio Production', 'Wedding Parties Organizing', 'Parties Filming', 'Equipment Rental', 'Conferences & Seminars'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    tone: 'dark' as const
  },
  {
    step: '06',
    title: 'IT Services',
    description:
      'We offer every solution under one roof to grow your business. We expertise in Website Design, Web Development, Branding, and Digital Marketing, providing rewarding solutions for your digital presence.',
    points: ['Web Designing', 'Internet Content Provider', 'Social Media App Management', 'Software Design', 'Portal Systems', 'Claim Settlement Services', 'CSR Initiatives Preparation'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    tone: 'primary' as const
  }
]

function CardIcon({ tone }: { tone: 'light' | 'dark' | 'primary' }) {
  const colorClass =
    tone === 'light'
      ? 'text-primary'
      : tone === 'dark'
        ? 'text-white'
        : 'text-white'

  return (
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tone === 'light' ? 'bg-primary/10' : 'bg-white/10'} ${colorClass}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <path d="M12 16v6" />
        <path d="M4.93 4.93l4.24 4.24" />
        <path d="M14.83 14.83l4.24 4.24" />
        <path d="M2 12h6" />
        <path d="M16 12h6" />
        <path d="M4.93 19.07l4.24-4.24" />
        <path d="M14.83 9.17l4.24-4.24" />
      </svg>
    </div>
  )
}

export default function Process() {
  return (
    <section className={`relative bg-lightGrey py-24 md:py-32 ${rethink.className}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[60px]" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[520px] h-[520px] rounded-full bg-[#00223E]/10 blur-[70px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative">
        <div className="">
          
          <div className="mb-16 lg:mb-24 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start gap-4 md:gap-16">
            <div className="md:w-1/4 pt-1 md:pt-3 text-left">
              <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                OUR SERVICES
              </span>
            </div>
            <div className="md:w-3/4 text-left">
              <p className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.4] tracking-tight text-left">
                From company formation to IT solutions, Al Bastaki Business Services provides everything you need to establish, manage, and grow your business seamlessly in the UAE.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {cards.map((c, idx) => {
                const isLight = c.tone === 'light'
                const isDark = c.tone === 'dark'
                const isPrimary = c.tone === 'primary'

                const cardClass = isLight
                  ? 'bg-white border border-gray-100 text-gray-900'
                  : isDark
                    ? 'bg-[#00223E] border border-white/10 text-white'
                    : 'bg-primary border border-white/15 text-white'

                const subTextClass = isLight ? 'text-gray-600' : 'text-white/80'
                const pillClass = isLight
                  ? 'bg-primary/10 text-primary'
                  : isDark
                    ? 'bg-white/10 text-white'
                    : 'bg-white/15 text-white'

                const zMap = ['z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-[60]']
                const zClass = zMap[idx] || 'z-10'

                return (
                  <div key={c.step} className={`sticky top-24 md:top-28 ${zClass} mb-10 md:mb-14`}>
                    <div className={`rounded-[2.25rem] ${cardClass} shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden min-h-[64vh] md:min-h-[68vh] lg:min-h-[72vh] flex flex-col`}>
                      <div className="p-7 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1">
                        
                        {/* Text and Info Area */}
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-start justify-between gap-6">
                            <div className="flex items-center gap-4">
                              <CardIcon tone={c.tone} />
                              <div className="flex flex-col">
                                {/* <span className={`inline-flex w-fit px-3 py-1 rounded-full text-[12px] font-bold tracking-widest ${pillClass}`}>
                                  SERVICE {c.step}
                                </span> */}
                                <h3 className="mt-4 text-[22px] md:text-[26px] font-bold tracking-tight leading-snug">
                                  {c.title}
                                </h3>
                              </div>
                            </div>

                            <div className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl ${isLight ? 'bg-gray-50 border border-gray-100 text-gray-600' : 'bg-black/15 border border-white/10 text-white/90'}`}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>

                          <p className={`mt-6 text-[14.5px] md:text-[15.5px] leading-relaxed font-medium max-w-[62ch] ${subTextClass}`}>
                            {c.description}
                          </p>

                          <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                            {c.points.map((p) => (
                              <div
                                key={p}
                                className={`rounded-2xl px-4 py-4 text-[13px] font-semibold leading-snug ${
                                  isLight
                                    ? 'bg-lightGrey text-gray-700 border border-gray-100'
                                    : isDark
                                      ? 'bg-[#001528] text-white/85 border border-white/10'
                                      : 'bg-white/10 text-white/90 border border-white/15'
                                }`}
                              >
                                {p}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Image Area */}
                        <div className="hidden lg:flex flex-col justify-center w-full lg:w-2/5 xl:w-1/3 mt-6 lg:mt-0">
                          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full max-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group">
                            <img 
                              src={c.image} 
                              alt={c.title} 
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" 
                            />
                            {/* Inner gradient for nice blend */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                          </div>
                        </div>

                      </div>

                      <div className={`mt-auto h-2 ${isLight ? 'bg-gradient-to-r from-primary/30 via-primary/10 to-transparent' : isPrimary ? 'bg-gradient-to-r from-white/35 via-white/10 to-transparent' : 'bg-gradient-to-r from-primary/60 via-primary/20 to-transparent'}`} />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="h-24 md:h-32" />
          </div>
        </div>
      </div>
    </section>
  )
}
