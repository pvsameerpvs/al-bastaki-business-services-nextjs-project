export type CaseStudyCategory = 'Business Setup' | 'Accounting'

export type CaseStudy = {
  id: number
  category: CaseStudyCategory
  title: string
  summary: string
  image: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: 'Business Setup',
    title: 'Free Zone Company Setup',
    summary:
      'Jurisdiction selection support and a structured submission process to reach formation completion efficiently.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Business Setup',
    title: 'Visa & PRO Services',
    summary:
      'Coordinated documentation and follow-ups to reduce delays while keeping compliance in focus.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Business Setup',
    title: 'Amendments & Registration',
    summary:
      'A structured path for updates and amendments with clear checklists and status visibility.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Accounting',
    title: 'Accounting & Bookkeeping',
    summary:
      'Confidential, accurate bookkeeping support aligned to business needs and reporting expectations.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Accounting',
    title: 'Payroll Management',
    summary:
      'Reliable payroll handling designed to reduce operational load while maintaining accuracy.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'Accounting',
    title: 'VAT Registration',
    summary:
      'VAT registration support with practical guidance and documentation preparation where required.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
  },
]
