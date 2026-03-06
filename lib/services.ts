export type ServiceSlug =
  | 'company-formation'
  | 'business-setup'
  | 'accounting'
  | 'consultancy'
  | 'events'
  | 'it'

export type Service = {
  slug: ServiceSlug
  title: string
  coverImage: string
  subtitle: string
  intro: string
  keyPoints: string[]
  deliverables: string[]
}

export const services: Service[] = [
  {
    slug: 'company-formation',
    title: 'Company Formation',
    coverImage: '/hero-main1.jpg',
    subtitle:
      'Set up your business under the right legal framework with clear options, compliant execution, and end-to-end support.',
    intro:
      'Setting up a new business or branch office in Dubai and the United Arab Emirates can be a complicated and expensive process. We help you establish your company under the correct legal framework by identifying the most cost-effective and time-saving option for your activity and goals.',
    keyPoints: [
      'Dubai business setup guidance across common jurisdictions',
      'Option evaluation: strengths, trade-offs, and compliance',
      'Documentation support and submission coordination',
      'Clear steps and timelines from first call to final delivery',
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
    coverImage: '/hero-main2.jpg',
    subtitle:
      'Registration, PRO, and corporate services delivered with clarity, control, and reliable turnaround.',
    intro:
      'Al Bastaki Business Services holds responsibility for the registration aspects of new businesses. Our goal is to help evaluate, create, and grow businesses by providing the necessary support and management services, including feasibility and administrative coordination where needed.',
    keyPoints: [
      'End-to-end registration and amendment support',
      'Visa and PRO services with compliant documentation',
      'Corporate services coordination to reduce operational friction',
      'Structured guidance to help businesses grow with confidence',
    ],
    deliverables: [
      'Company Setup & Liquidation',
      'Visa & PRO Services',
      'Local Partner',
      'Contracts & POA Services',
      'Amendments & Registration',
      'Document Copying',
      'Trademark Registration',
      'Dubai Court Services',
      'Corporate Services Provider',
    ],
  },
  {
    slug: 'accounting',
    title: 'Accounting Services',
    coverImage: '/stats-image.jpg',
    subtitle:
      'Practical accounting support with confidentiality, accuracy, and reliable reporting for decision-making.',
    intro:
      'Based on client requirements, we provide a complete range of accounting services. Payroll and accounting can be demanding for new businesses due to local requirements, practices, and compliance expectations. We support you while maintaining confidentiality and accuracy.',
    keyPoints: [
      'Accounting and bookkeeping support aligned to business needs',
      'Payroll handling with confidentiality and precision',
      'Support for VAT and compliance-related requirements',
      'Structured reporting to improve financial clarity and control',
    ],
    deliverables: [
      'Accounting & Bookkeeping',
      'Payroll Management',
      'Auditing Services',
      'VAT Registration',
      'Bank Account Opening',
    ],
  },
  {
    slug: 'consultancy',
    title: 'Consultancy Services',
    coverImage: '/hero-main1.jpg',
    subtitle:
      'Regional insight and structured advisory to assess opportunities, reduce risk, and support growth decisions.',
    intro:
      'Hire consultants with a deep understanding of the region. We provide insight into the investment context and challenges for businesses considering investing abroad, and support you in assessing potential opportunities.',
    keyPoints: [
      'Context-first advice grounded in regional business realities',
      'Feasibility and planning support for better decision-making',
      'Management and facilities planning assistance',
      'A practical approach to reduce risk and improve outcomes',
    ],
    deliverables: [
      'Marketing Management',
      'Feasibility Study Consultancies',
      'Facilities Resource Planning',
      'Management Services',
      'Facilities Management Services',
    ],
  },
  {
    slug: 'events',
    title: 'Event Management',
    coverImage: '/hero-main2.jpg',
    subtitle:
      'End-to-end event logistics and project management for conferences, exhibitions, ceremonies, and more.',
    intro:
      'Event management includes a variety of functions for executing large-scale events such as conferences, conventions, concerts, trade shows, festivals, and ceremonies. It involves handling overall logistics, coordinating staff, and managing delivery end to end.',
    keyPoints: [
      'Project management for planning through execution',
      'Logistics coordination with clear deliverables',
      'Support across event formats and production needs',
      'Structured approach for smooth, reliable delivery',
    ],
    deliverables: [
      'Events Organizing & Managing',
      'Exhibition Organizing',
      'Film, TV & Radio Production',
      'Wedding Parties Organizing',
      'Parties Filming',
      'Equipment Rental',
      'Conferences & Seminars',
    ],
  },
  {
    slug: 'it',
    title: 'IT Services',
    coverImage: '/hero-main1.jpg',
    subtitle:
      'Website, branding, and digital solutions under one roof to grow your business with a stronger online presence.',
    intro:
      'We offer every solution under one roof to grow your business. Our expertise spans website design, web development, branding, and digital marketing. We deliver creative, affordable solutions to expand your business.',
    keyPoints: [
      'Website design and development for modern businesses',
      'Branding and content support aligned to your positioning',
      'Digital marketing and platform support where needed',
      'Affordable, creative solutions with clear deliverables',
    ],
    deliverables: [
      'Web Designing',
      'Internet Content Provider',
      'Social Media App Management',
      'Software Design',
      'Portal Systems',
      'Claim Settlement Services',
      'CSR Initiatives Preparation',
    ],
  },
]

export function getService(slug: ServiceSlug) {
  return services.find((s) => s.slug === slug)
}
