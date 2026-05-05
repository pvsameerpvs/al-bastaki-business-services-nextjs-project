export type ServiceSlug =
  | 'company-formation'
  | 'business-setup'
  | 'accounting'
  | 'consultancy'
  | 'it'
  | 'other'

export type Service = {
  slug: ServiceSlug
  title: string
  coverImage: string
  images: [string, string, string]
  subtitle: string
  intro: string[]
  keyPoints: string[]
  deliverables: string[]
}

export const services: Service[] = [
  {
    slug: 'company-formation',
    title: 'Company Formation',
    coverImage: '/hero-company-formation.jpg',
    images: [
      '/company-formation-1.jpg',
      '/company-formation-2.jpg',
      '/company-formation-3.jpg',
    ],
    subtitle:
      'Establish the right legal structure in the UAE with jurisdiction guidance, compliant documentation, and end-to-end authority coordination.',
    intro: [
      'Al Bastaki has guided entrepreneurs, SMEs, family offices, and international companies through company formation in Dubai and the UAE since 2000. Our team brings direct authority knowledge, jurisdiction clarity, and precise documentation discipline to every engagement — so you begin with the right structure, not a corrected one.',
      'We compare mainland, free zone, offshore, and branch options against your ownership requirements, target activities, market access needs, and long-term growth plan. Every route is evaluated with transparency before a single document is prepared.',
    ],
    keyPoints: [
      'Jurisdiction guidance across mainland, free zone, offshore, and branch — matched to your specific activity and ownership model',
      'Comprehensive cost, compliance, and expansion review before any submission begins',
      'Structured document preparation, authority coordination, and real-time approval tracking',
      'Clear milestone timeline from first consultation through to final trade licence handover',
    ],
    deliverables: [
      'Dubai Business Setup',
      'Free Zone Company Setup',
      'Offshore Company Setup',
      'Branch of Foreign Company Setup',
    ],
  },
  {
    slug: 'business-setup',
    title: 'Business Setup',
    coverImage: '/business-setup-1.jpg',
    images: [
      '/business-setup-4.jpg',
      '/business-setup-3.jpg',
      '/business-setup-7.jpg',
    ],
    subtitle:
      'End-to-end business setup in Dubai and the UAE — registration, licensing, PRO, visa, and corporate services executed with authority-facing discipline.',
    intro: [
      'Al Bastaki manages the complete operational cycle of business setup so founders and management teams can focus on building their business. We handle registration, licensing, PRO coordination, visa processing, amendments, translation, trademark, and corporate services with structured follow-through and clear accountability.',
      'Our process is built around authority-facing execution: clean documentation, disciplined submissions, accurate follow-ups, and predictable turnaround. We have handled thousands of transactions across Dubai and the UAE — and that depth of experience means fewer surprises for our clients.',
    ],
    keyPoints: [
      'Customized setup plans aligned to your activity, jurisdiction, ownership structure, and growth timeline',
      'Authority-facing coordination with organized documentation and relentless follow-up discipline',
      'Visa, PRO, amendment, renewal, and corporate services managed under a single point of contact',
      'A structured process designed to eliminate friction and protect your time at every stage',
    ],
    deliverables: [
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
    slug: 'accounting',
    title: 'Accounting Services',
    coverImage: '/accounting-4.jpg',
    images: [
      '/accounting-1.jpg',
      '/accounting-2.jpg',
      '/accounting-3.jpg',
    ],
    subtitle:
      'Confidential accounting, bookkeeping, payroll, VAT, and audit support — giving owners and managers complete financial clarity.',
    intro: [
      'Al Bastaki delivers accounting support that is accurate, confidential, and built around how UAE businesses actually operate. Whether you need consistent monthly bookkeeping, payroll management, VAT compliance, audit preparation, or banking documentation, we apply the same disciplined process every cycle.',
      'Owners and managers rely on us for financial information that is organized, reliable, and decision-ready. We treat financial data with the strictest confidentiality and ensure records are always structured for both management visibility and regulatory compliance.',
    ],
    keyPoints: [
      'Bookkeeping and monthly reporting aligned precisely to your business model and operating rhythm',
      'Payroll support with strict confidentiality, process accuracy, and repeatable monthly controls',
      'VAT registration, documentation, and compliance support managed with full authority alignment',
      'Audit-ready financial records and clear reporting that owners, managers, and auditors can rely on',
    ],
    deliverables: [
      'Accounting & Bookkeeping',
      'Payroll',
      'Auditing',
      'VAT Registration',
      'Bank Account Opening',
    ],
  },
  {
    slug: 'consultancy',
    title: 'Consultancy Services',
    coverImage: '/consultancy-3.jpg',
    images: [
      '/consultancy-1.jpg',
      '/consultancy-2.jpg',
      '/consultancy-5.jpg',
    ],
    subtitle:
      'Senior-led advisory for market entry, feasibility, management, and growth decisions — grounded in UAE and regional business reality.',
    intro: [
      'Al Bastaki provides consultancy services built on direct experience across the UAE, GCC, and wider Middle East. Our advisors bring context-first thinking to every engagement: understanding the regulatory environment, market dynamics, and business culture before recommending a strategy or path forward.',
      'We work with companies assessing new markets, evaluating expansion routes, structuring operations, or making critical management decisions. Our deliverables are designed to support action — not produce reports that sit on a shelf. Every engagement ends with clarity, not ambiguity.',
    ],
    keyPoints: [
      'Context-first advisory grounded in UAE and regional business law, market dynamics, and authority requirements',
      'Feasibility, market-entry, and expansion planning that identifies risk early and frames decisions with confidence',
      'Facilities resource planning and management consultancy aligned to operational continuity and growth',
      'Risk-aware, senior-led recommendations that translate analysis into decisive, actionable next steps',
    ],
    deliverables: [
      'Marketing Management',
      'Feasibility Study Consultancies',
      'Facilities Resource Planning Consultancy',
      'Management Services',
      'Facilities Management Services',
    ],
  },

  {
    slug: 'it',
    title: 'IT Services',
    coverImage: '/it-4.jpg',
    images: [
      '/it-1.jpg',
      '/it-2.jpg',
      '/it-3.jpg',
    ],
    subtitle:
      'Website design, portals, software, and digital content built to strengthen your business credibility, reach, and operational efficiency.',
    intro: [
      'Al Bastaki delivers IT services with clear business intent. Every project starts with a defined scope, measurable objectives, and delivery milestones — so clients know exactly what they are getting, when they will receive it, and how it will serve their goals.',
      'From corporate websites and customer portals to software scopes and content platforms, we align every digital solution to your brand, audience, and operating model. We build what businesses actually need: credible, functional, and maintainable digital infrastructure.',
    ],
    keyPoints: [
      'Website design and development built for brand credibility, user clarity, and measurable conversion performance',
      'Portal and software planning structured around real user journeys, role-based access, and operational workflows',
      'Social media and content platform support for consistent, on-brand digital communication at scale',
      'Defined deliverables, structured handover, and improvement planning that keeps your digital presence current',
    ],
    deliverables: [
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
    slug: 'other',
    title: 'Other Services',
    coverImage: '/hero-main2.jpg',
    images: [
      '/other-1.jpg',
      '/other-2.jpg',
      '/other-3.jpg',
    ],
    subtitle:
      'Specialist support services coordinated with the same structured process, clear communication, and accountable delivery you expect from Al Bastaki.',
    intro: [
      'Beyond our core service lines, Al Bastaki coordinates selected specialist services for clients with specific operational requirements. Each request is approached with the same rigour: clear scope definition, structured coordination, and accountable follow-through from instruction to completion.',
      'We handle time-sensitive and specialized requests with the same discipline we apply across all engagements — ensuring nothing falls through the cracks and every deliverable meets the standard our clients depend on.',
    ],
    keyPoints: [
      'Customized support scoped precisely to the requirement, jurisdiction, and client timeline',
      'Clear deliverable definition agreed before work begins — no ambiguity, no scope creep',
      'Responsible, senior-accountable coordination for time-sensitive and specialist requests',
      'Structured follow-up and documented handover from initial request through to completion',
    ],
    deliverables: [
      'Auto Services Broker',
      'Claim Settlement Services',
      'Medical Treatment Facilitation Services',
      'Corporate Social Responsibility Initiatives Preparation',
    ],
  },
]

export function getService(slug: ServiceSlug) {
  return services.find((s) => s.slug === slug)
}
