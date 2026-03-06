import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import FadeIn from '../../components/FadeIn'

const roles = [
  {
    title: 'Company Formation Specialists',
    description:
      'Support for selecting the right legal framework and moving through formation steps with clear documentation and timelines.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        <path d="M9 8h1" />
        <path d="M9 12h1" />
        <path d="M9 16h1" />
        <path d="M14 8h1" />
        <path d="M14 12h1" />
        <path d="M14 16h1" />
      </svg>
    ),
  },
  {
    title: 'Visa & PRO Coordination',
    description:
      'Structured support for registration-related tasks with consistent follow-ups, submissions, and compliance handling.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h6" />
        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: 'Accounting & Payroll Support',
    description:
      'Accurate accounting services and payroll handling with confidentiality and reliable reporting for decision-making.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 9.5h20" />
        <path d="M7 15h0" />
      </svg>
    ),
  },
  {
    title: 'Business Consultants',
    description:
      'Advisory support grounded in regional understanding, feasibility context, and practical planning for growth.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        <path d="M8 9h8" />
        <path d="M8 13h6" />
      </svg>
    ),
  },
  {
    title: 'Event Operations',
    description:
      'End-to-end coordination for logistics, staffing, and project delivery across conferences and events.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    ),
  },
  {
    title: 'Digital & IT Team',
    description:
      'Website and digital solutions to support business growth: design, development, branding, and marketing support.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
]

export default function TeamPage() {
  return (
    <main>
      <PageHero
        badge="People behind delivery"
        title="Our Team"
        subtitle="A coordinated team across company formation, PRO services, accounting, consultancy, events, and IT — built to support your setup and ongoing operations in the UAE."
        image="/hero-main2.jpg"
      />

      <section className="py-20 md:py-28 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="mb-12 md:mb-16 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start gap-4 md:gap-16">
            <div className="md:w-1/4 pt-1 md:pt-3 text-left">
              <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                TEAM FUNCTIONS
              </span>
            </div>
            <div className="md:w-3/4 text-left">
              <p className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.4] tracking-tight">
                Built for fast coordination, clear execution, and compliant delivery — without the overhead.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {roles.map((role, idx) => (
              <FadeIn key={role.title} delay={idx * 0.08}>
                <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-8 text-primary">{role.icon}</div>
                  <h3 className="text-[22px] font-bold text-gray-900 mb-4 tracking-tight">
                    {role.title}
                  </h3>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                    {role.description}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 text-[13px] font-semibold text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    Coordinated support
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Work with a team that moves fast"
        description="Share your setup requirements and we will align the right specialists for formation, PRO, accounting, and ongoing support."
      />
    </main>
  )
}
