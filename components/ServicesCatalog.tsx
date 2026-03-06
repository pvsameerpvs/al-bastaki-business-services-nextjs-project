'use client'

import Link from 'next/link'

import FadeIn from './FadeIn'

type CatalogItem = {
  title: string
  href: string
  items: string[]
}

const catalog: CatalogItem[] = [
  {
    title: 'Company Formation',
    href: '/services/company-formation',
    items: [
      'Dubai Business Setup',
      'Freezone Company Setup',
      'Offshore Company Setup',
      'Branch of Foreign Company Setup',
    ],
  },
  {
    title: 'Business Setup',
    href: '/services/business-setup',
    items: [
      'Company Setup',
      'Company Liquidation',
      'Visa Processing',
      'Local Partner',
      'PRO Services',
      'Document Copying and Clearing Services',
      'Contracts & POA Services',
      'Amendments & Registration',
      'Translation Services',
      'Trademark Registration',
      'Dubai Court Services',
      'Corporate Services Provider',
      'Business Men & Women Services',
    ],
  },
  {
    title: 'Accounting Services',
    href: '/services/accounting',
    items: [
      'Accounting & Bookkeeping',
      'Payroll',
      'Auditing',
      'VAT Registration',
      'Bank Account Opening',
    ],
  },
  {
    title: 'IT Services',
    href: '/services/it',
    items: [
      'Web Designing',
      'Internet Content Provider',
      'Social Media App Development',
      'Social Media App Management',
      'Computer Systems & Communication Equipment',
      'Software Design',
      'Portal',
    ],
  },
  {
    title: 'Consultancy Services',
    href: '/services/consultancy',
    items: [
      'Marketing Management',
      'Feasibility Study Consultancies',
      'Facilities Resource Planning Consultancy',
      'Management Services',
      'Facilities Management Services',
    ],
  },
  {
    title: 'Event Management',
    href: '/services/events',
    items: [
      'Events Organizing & Managing',
      'Public Relations Management',
      'Exhibition Organizing',
      'Film, TV & Radio Production Services',
      'Wedding Parties Organizing',
      'Parties & Private Functions Filming',
      'Film Equipment Rental',
      'Conferences & Seminars Organizing',
    ],
  },
  {
    title: 'Other Services',
    href: '/services/other',
    items: [
      'Auto Services Broker',
      'Claim Settlement Services',
      'Medical Treatment Facilitation Services',
      'Corporate Social Responsibility Initiatives Preparation',
    ],
  },
]

export default function ServicesCatalog() {
  return (
    <section className="py-20 md:py-28 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        <div className="mb-12 md:mb-16 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start gap-4 md:gap-16">
          <div className="md:w-1/4 pt-1 md:pt-3 text-left">
            <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
              OUR SERVICES
            </span>
          </div>
          <div className="md:w-3/4 text-left">
            <h2 className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.35] tracking-tight">
              Enterprise-level delivery, customized to your needs
            </h2>
            <p className="mt-4 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[78ch]">
              Focusing on providing enterprise-level services, we cater to the needs of our customers by creating customized solutions.
              We build long-standing trust relationships because we study carefully, implement fast, and support responsibly, even in the most demanding scenarios.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {catalog.map((c, idx) => (
            <FadeIn key={c.href} delay={idx * 0.06}>
              <Link
                href={c.href}
                className="group block bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight text-gray-900 group-hover:text-primary transition-colors">
                        {c.title}
                      </h3>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {c.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full bg-primary/10 border border-primary/10 px-3.5 py-2 text-[12.5px] font-semibold text-[#003B62]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-lightGrey border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="h-2 bg-gradient-to-r from-primary/40 via-primary/15 to-transparent" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
