export type ServiceSlug =
  | 'company-formation'
  | 'business-setup'
  | 'accounting'
  | 'consultancy'
  | 'events'
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

const enterpriseServiceIntro =
  'Focusing on providing enterprise-level services, we cater to the needs of our customers by creating customized solutions. We build long-standing trust relationships because we study carefully, implement fast, and support responsibly, even in the most demanding scenarios.'

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
      'Set up your business under the right legal framework with clear options, compliant execution, and end-to-end support.',
    intro: [
      enterpriseServiceIntro,
      'Setting up a new business or branch office in Dubai and the United Arab Emirates can be a complicated and expensive process. We help you establish your company under the correct legal framework by choosing the most cost-effective and time-saving option for your activity and goals.',
    ],
    keyPoints: [
      'Dubai business setup guidance across common jurisdictions',
      'Option evaluation: strengths, trade-offs, and compliance',
      'Documentation support and submission coordination',
      'Clear steps and timelines from first call to final delivery',
    ],
    deliverables: [
      'Dubai Business Setup',
      'Freezone Company Setup',
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
      'Registration, PRO, and corporate services delivered with clarity, control, and reliable turnaround.',
    intro: [
      enterpriseServiceIntro,
      'Al Bastaki Business Services takes responsibility for the registration aspects of new businesses. We help you create and grow businesses by providing the necessary support across setup, licensing-related coordination, and corporate service requirements.',
    ],
    keyPoints: [
      'Customized solutions aligned to your business activity and goals',
      'Fast implementation with clear documentation and follow-ups',
      'Responsible support for demanding scenarios and timelines',
      'Structured coordination to reduce friction and delays',
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
      'Practical accounting support with confidentiality, accuracy, and reliable reporting for decision-making.',
    intro: [
      enterpriseServiceIntro,
      'Based on your requirements, we provide a complete range of accounting services. Payroll and accounting can be demanding for new businesses due to local requirements, practices, and compliance expectations. We support you while maintaining strict confidentiality and accuracy.',
    ],
    keyPoints: [
      'Accounting and bookkeeping aligned to business needs',
      'Payroll support with confidentiality and precision',
      'VAT registration support where required',
      'Reliable reporting for clarity and control',
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
      'Regional insight and structured advisory to assess opportunities, reduce risk, and support growth decisions.',
    intro: [
      enterpriseServiceIntro,
      'Hire consultants with a deep understanding of the region. We provide insight into the investment context and challenges for your business and support you in assessing opportunities with practical, best-practice processes.',
    ],
    keyPoints: [
      'Context-first advice grounded in regional business realities',
      'Feasibility and planning support for better decision-making',
      'Facilities resource planning consultancy',
      'A practical approach to reduce risk and improve outcomes',
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
    slug: 'events',
    title: 'Event Management',
    coverImage: '/events-1.jpg',
    images: [
      '/events-1.jpg',
      '/events-2.jpg',
      '/events-3.jpg',
    ],
    subtitle:
      'End-to-end event logistics and project management for conferences, exhibitions, ceremonies, and more.',
    intro: [
      enterpriseServiceIntro,
      'Event management includes a variety of functions for executing large-scale events such as conferences, conventions, concerts, trade shows, festivals, and ceremonies. We support planning, logistics, coordination, and delivery end to end.',
    ],
    keyPoints: [
      'Project management for planning through execution',
      'Logistics coordination with clear deliverables',
      'Support across event formats and production needs',
      'Structured approach for smooth, reliable delivery',
    ],
    deliverables: [
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
    slug: 'it',
    title: 'IT Services',
    coverImage: '/it-4.jpg',
    images: [
      '/it-1.jpg',
      '/it-2.jpg',
      '/it-3.jpg',
    ],
    subtitle:
      'Website, branding, and digital solutions under one roof to grow your business with a stronger online presence.',
    intro: [
      enterpriseServiceIntro,
      'We offer solutions under one roof to grow your business. Our expertise includes web design, development, and practical digital support to strengthen your presence and support growth.',
    ],
    keyPoints: [
      'Website design and development for modern businesses',
      'Branding and content support aligned to your positioning',
      'Digital marketing and platform support where needed',
      'Affordable, creative solutions with clear deliverables',
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
      'Additional support services coordinated with the same structured approach: clear steps, fast turnaround, and responsible support.',
    intro: [
      enterpriseServiceIntro,
      'Beyond our core services, we also provide additional support services based on client requirements, coordinated with the same focus on clarity and reliable execution.',
    ],
    keyPoints: [
      'Customized solutions based on your requirements',
      'Fast implementation with clear communication',
      'Responsible support for time-sensitive scenarios',
      'Structured coordination from request to delivery',
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
