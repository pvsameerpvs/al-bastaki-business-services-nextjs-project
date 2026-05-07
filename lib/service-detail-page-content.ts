import type { ServiceSlug } from './services'

export type ServiceFocusTab = {
  key: string
  label: string
  kicker?: string
  description: string
  bullets: string[]
  meta?: { label: string; value: string }[]
}

export type ServiceFocusTabsContent = {
  eyebrow?: string
  title: string
  description: string
  sideCards?: { title: string; text: string }[]
  tabs: ServiceFocusTab[]
}

export const heroBadgeBySlug: Partial<Record<ServiceSlug, string>> = {
  'company-formation': 'Company formation',
  'business-setup': 'Business setup',
  accounting: 'Accounting',
  consultancy: 'Consultancy',
  it: 'IT services',
  trademark: 'Trademark registration',
}

export const ctaBySlug: Partial<
  Record<ServiceSlug, { title: string; description: string }>
> = {
  'company-formation': {
    title: 'Start your company formation with certainty',
    description:
      'Tell us your activity, preferred jurisdiction, ownership structure, and timeline. We will map the right legal route, outline the required documents, and give you a clear path forward.',
  },
  'business-setup': {
    title: 'Get your business setup moving today',
    description:
      'Share your activity, current stage, and target go-live date. We will respond with a structured action plan, authority-facing steps, and a committed support scope.',
  },
  accounting: {
    title: 'Take control of your financial records',
    description:
      'Tell us your business size, reporting requirements, and current record-keeping situation. We will recommend the right accounting scope and begin an organized, confidential engagement.',
  },
  consultancy: {
    title: 'Engage a consultancy team that delivers decisions',
    description:
      'Share the opportunity, market, and timeline you are working with. We will propose a structured advisory scope with clear deliverables and senior-led execution.',
  },
  it: {
    title: 'Build digital infrastructure that performs',
    description:
      'Tell us your goals: a website, portal, software system, or content workflow. We will scope the deliverables precisely and commit to a timeline that works for your business.',
  },
  trademark: {
    title: 'Protect your brand identity with certainty',
    description:
      'Share your brand details, target classes, and current registration status. We will respond with a structured search and filing plan to formalize your brand protection in the UAE.',
  },
}

export const focusTabsContentBySlug: Partial<
  Record<ServiceSlug, ServiceFocusTabsContent>
> = {
  'business-setup': {
    eyebrow: 'Service areas',
    title: 'Every business setup requirement — handled with authority',
    description:
      'From registration and licensing through PRO services, visas, amendments, and corporate coordination — we manage the full setup cycle with structured accountability and proven execution.',
    sideCards: [
      {
        title: 'Single point of contact',
        text: 'One team manages your full setup scope — no handoffs, no gaps, no confusion.',
      },
      {
        title: 'Authority-ready documentation',
        text: 'Submissions are reviewed, organized, and formatted before they reach any authority.',
      },
      {
        title: 'Committed timelines',
        text: 'We set realistic milestones and drive every step to meet them.',
      },
      {
        title: 'Post-setup continuity',
        text: 'Renewals, amendments, and ongoing corporate services are built into our support model.',
      },
    ],
    tabs: [
      {
        key: 'pro',
        label: 'PRO Services',
        kicker: 'Authority coordination',
        description:
          'We manage all government-facing documentation, submissions, and authority interactions with precision and accountability — so your business stays compliant without the administrative burden.',
        bullets: [
          'Complete document collection, classification, and review',
          'Authority submission coordination and status tracking',
          'Regular progress updates with clear ownership at every step',
          'Handling of corporate service requests and related government transactions',
        ],
        meta: [
          { label: 'Best for', value: 'Companies needing reliable, ongoing authority-facing execution' },
          { label: 'Output', value: 'Fully organized submissions with tracked, accountable progress' },
        ],
      },
      {
        key: 'visas',
        label: 'Visa Processing',
        kicker: 'End-to-end visa coordination',
        description:
          'We manage the complete visa process — from document preparation through submission, medical coordination, and final issuance — so your team can onboard, relocate, or renew without disruption.',
        bullets: [
          'Comprehensive document checklist and applicant preparation',
          'Full submission coordination and authority follow-up',
          'Timeline planning aligned to your hiring and onboarding schedules',
          'Clear handover and guidance at each stage of the process',
        ],
        meta: [
          { label: 'Best for', value: 'Founders, HR teams, and businesses scaling their workforce' },
          { label: 'Output', value: 'Issued visas with a fully tracked, documented process' },
        ],
      },
      {
        key: 'amendments',
        label: 'Amendments',
        kicker: 'Controlled company updates',
        description:
          'When your company structure, activity, or details change, we manage the amendment process end-to-end — so your records remain accurate, current, and fully compliant with authority requirements.',
        bullets: [
          'Scope assessment and complete document preparation',
          'Submission coordination and approval tracking with authorities',
          'Guidance on dependencies, sequencing, and regulatory requirements',
          'Delivery of updated records with a clear, auditable trail',
        ],
        meta: [
          { label: 'Best for', value: 'Companies evolving their structure, activities, or ownership' },
          { label: 'Output', value: 'Updated, compliant records with full documentation' },
        ],
      },
      {
        key: 'trademark',
        label: 'Trademark',
        kicker: 'Brand protection — formalized',
        description:
          'We coordinate the full trademark registration process with the UAE Ministry of Economy — protecting your brand name, logo, and identity with a structured, tracked approach from filing to certificate.',
        bullets: [
          'Trademark class assessment and filing strategy',
          'Complete application documentation and preparation',
          'Submission coordination and official follow-up',
          'Certificate handover and next-step renewal planning',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses formalizing brand protection in the UAE' },
          { label: 'Output', value: 'A registered trademark with a tracked, compliant filing' },
        ],
      },
      {
        key: 'liquidation',
        label: 'Liquidation',
        kicker: 'Structured, compliant close-out',
        description:
          'We manage company liquidation from initial planning through final authority approvals and licence cancellation — protecting you from liability and ensuring a clean, documented exit.',
        bullets: [
          'Full liquidation checklist and scenario-specific planning',
          'Document organization, publication coordination, and submission management',
          'Authority follow-up and approval tracking at each stage',
          'Final handover of closure confirmations and de-registration records',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses closing operations in a compliant, orderly manner' },
          { label: 'Output', value: 'A fully documented, authority-confirmed company close-out' },
        ],
      },
    ],
  },
  accounting: {
    eyebrow: 'Accounting scope',
    title: 'Financial control you can rely on — every reporting cycle',
    description:
      'We deliver consistent, confidential accounting support that keeps your records organized, your reporting accurate, and your financial position clear — so you can make decisions with complete confidence.',
    sideCards: [
      {
        title: 'Strict confidentiality',
        text: 'Financial information is handled with the highest level of privacy, discipline, and professional care.',
      },
      {
        title: 'Process accuracy',
        text: 'Structured, repeatable cycles eliminate errors and ensure every number is accounted for.',
      },
      {
        title: 'Decision-ready reporting',
        text: 'Reports are organized to serve both management decisions and regulatory compliance.',
      },
      {
        title: 'Dependable rhythm',
        text: 'Monthly closes, payroll cycles, and reporting handovers happen on time, every time.',
      },
    ],
    tabs: [
      {
        key: 'bookkeeping',
        label: 'Bookkeeping',
        kicker: 'Accurate records. Reliable reporting.',
        description:
          'We maintain your books with precision — structured transaction records, monthly reconciliations, and clear reporting that management and owners can rely on at any time.',
        bullets: [
          'Complete transaction categorization with structured documentation',
          'Monthly close support, bank reconciliations, and ledger maintenance',
          'Reliable management reports delivered on a consistent schedule',
          'Organized file handover and audit-ready record management',
        ],
        meta: [
          { label: 'Best for', value: 'SMEs and growing businesses needing dependable monthly books' },
          { label: 'Output', value: 'Clean, organized records and decision-ready monthly reports' },
        ],
      },
      {
        key: 'payroll',
        label: 'Payroll',
        kicker: 'Precise. Confidential. On time.',
        description:
          'We manage payroll with absolute accuracy and confidentiality — ensuring every employee is paid correctly, every cycle is documented, and every approval is in order before disbursement.',
        bullets: [
          'Full payroll calculation, review, and approval coordination',
          'WPS-compliant processing and payroll documentation',
          'Monthly payroll reports and clear handover to management',
          'Strict confidentiality maintained across all employee financial data',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses that require accurate, confidential payroll management' },
          { label: 'Output', value: 'Processed payroll with compliant documentation and clear reporting' },
        ],
      },
      {
        key: 'vat',
        label: 'VAT Support',
        kicker: 'Compliant from registration to filing',
        description:
          'We manage your VAT obligations end-to-end — from registration with the FTA through accurate return preparation, filing coordination, and ongoing compliance monitoring.',
        bullets: [
          'VAT registration and FTA authority coordination',
          'Input/output VAT tracking and monthly reconciliation',
          'Accurate VAT return preparation and timely filing',
          'Archiving of all supporting documentation for audit readiness',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses subject to UAE VAT or approaching the registration threshold' },
          { label: 'Output', value: 'Compliant VAT registration, accurate filings, and organized records' },
        ],
      },
      {
        key: 'audit',
        label: 'Audit Support',
        kicker: 'Audit-ready. Every year.',
        description:
          'We prepare your records and supporting documentation to the standard auditors require — organized, complete, and structured so your audit proceeds smoothly and without surprises.',
        bullets: [
          'Full record organization and supporting document preparation',
          'Clear auditor request lists with structured handover',
          'Consistent reporting formats aligned to audit requirements',
          'Coordination between your team and the audit firm throughout the process',
        ],
        meta: [
          { label: 'Best for', value: 'Companies undergoing statutory, investor, or internal audits' },
          { label: 'Output', value: 'Fully organized records and a smooth, professional audit process' },
        ],
      },
      {
        key: 'banking',
        label: 'Bank Account Opening',
        kicker: 'First-time approval rates that matter',
        description:
          'We prepare your complete banking documentation file to the standard UAE banks expect — reducing the risk of rejection and ensuring your account opening moves forward without unnecessary delays.',
        bullets: [
          'Bank-specific documentation checklist and preparation guidance',
          'Complete document organization and presentation review',
          'Submission coordination and follow-up with the bank relationship team',
          'Clear next steps and support through the approval and activation process',
        ],
        meta: [
          { label: 'Best for', value: 'New and established businesses opening UAE corporate bank accounts' },
          { label: 'Output', value: 'A bank-ready document file with structured submission support' },
        ],
      },
    ],
  },
  consultancy: {
    eyebrow: 'Advisory areas',
    title: 'Senior advisory that turns complexity into a clear path forward',
    description:
      'We combine deep regional knowledge, structured analysis, and senior-led engagement to help you navigate market entry, feasibility, operations, and growth decisions with complete confidence.',
    sideCards: [
      {
        title: 'Regional depth',
        text: 'Direct experience across UAE, GCC, and wider Middle East business environments and regulatory frameworks.',
      },
      {
        title: 'Action-oriented outputs',
        text: 'Deliverables are structured to support decisions and drive next steps — not to document without direction.',
      },
      {
        title: 'Risk-first thinking',
        text: 'Assumptions, dependencies, and exposure are identified and addressed before recommendations are made.',
      },
      {
        title: 'Senior-led engagement',
        text: 'Every client engagement is managed by experienced advisors with direct accountability for outcomes.',
      },
    ],
    tabs: [
      {
        key: 'feasibility',
        label: 'Feasibility Studies',
        kicker: 'Assess with confidence before you commit',
        description:
          'We conduct structured feasibility studies that evaluate market viability, regulatory requirements, financial projections, and risk factors — so you invest in opportunities with clear, evidence-based confidence.',
        bullets: [
          'Project scope definition and key assumption alignment',
          'Market research, regulatory context, and competitor landscape analysis',
          'Financial modelling, risk identification, and scenario framing',
          'Structured feasibility report with clear recommendations and next steps',
        ],
        meta: [
          { label: 'Best for', value: 'New ventures, market expansion, and investment evaluation decisions' },
          { label: 'Output', value: 'A decision-ready feasibility report with actionable recommendations' },
        ],
      },
      {
        key: 'marketing',
        label: 'Marketing Management',
        kicker: 'Strategy that converts to results',
        description:
          'We develop and manage marketing strategies aligned to your business goals, target audience, and competitive position — ensuring every activity drives measurable commercial outcomes.',
        bullets: [
          'Business goal alignment and clear KPI framework definition',
          'Audience segmentation, channel selection, and campaign planning',
          'Execution management with structured review and performance tracking',
          'Reporting designed for management decisions and budget optimization',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses launching, repositioning, or scaling their market presence' },
          { label: 'Output', value: 'A focused marketing strategy with measurable priorities and managed execution' },
        ],
      },
      {
        key: 'facilities',
        label: 'Facilities Planning',
        kicker: 'Resources aligned to your operational demands',
        description:
          'We assess your operational requirements and develop facilities resource plans that support service delivery, growth objectives, and cost efficiency across your UAE and regional footprint.',
        bullets: [
          'Operational requirements assessment and capacity planning',
          'Facilities resource allocation and procurement strategy',
          'Implementation milestones, budget alignment, and risk management',
          'Recommendations structured for both immediate needs and long-term continuity',
        ],
        meta: [
          { label: 'Best for', value: 'Organizations scaling operations or optimizing facility resources' },
          { label: 'Output', value: 'A structured facilities resource plan with implementation milestones' },
        ],
      },
      {
        key: 'management',
        label: 'Management Services',
        kicker: 'Governance and accountability at every level',
        description:
          'We help businesses strengthen governance, clarify operational responsibilities, and build management systems that ensure consistent execution, accountability, and measurable performance.',
        bullets: [
          'Operating model assessment and governance structure design',
          'Role clarity, accountability frameworks, and decision-flow mapping',
          'Management reporting cadence, KPIs, and performance review systems',
          'Practical process improvements focused on consistency, control, and growth',
        ],
        meta: [
          { label: 'Best for', value: 'Growing businesses strengthening their management infrastructure' },
          { label: 'Output', value: 'A governance framework and operating model built for sustained performance' },
        ],
      },
      {
        key: 'facilities-mgmt',
        label: 'Facilities Management',
        kicker: 'Service excellence across your property portfolio',
        description:
          'We develop and coordinate facilities management frameworks that ensure consistent service delivery, compliance, and cost control across your UAE and regional operations.',
        bullets: [
          'Service scope definition and standards documentation',
          'Vendor selection support, contract review, and coordination planning',
          'Performance monitoring frameworks and SLA management',
          'Ongoing review cadence and continuous improvement planning',
        ],
        meta: [
          { label: 'Best for', value: 'Organizations standardizing and elevating facilities management delivery' },
          { label: 'Output', value: 'A structured facilities management framework with governed service delivery' },
        ],
      },
    ],
  },

  it: {
    eyebrow: 'Digital services',
    title: 'Purpose-built digital solutions that advance your business',
    description:
      'We deliver websites, portals, software, and content platforms with defined scope, clear milestones, and business-aligned outcomes — giving every client a digital presence that works as hard as they do.',
    sideCards: [
      {
        title: 'Business-first design',
        text: 'Every solution is designed around your goals, audience, and commercial objectives — not generic templates.',
      },
      {
        title: 'Defined scope and milestones',
        text: 'Deliverables, timelines, and ownership are agreed and documented before development begins.',
      },
      {
        title: 'Quality and handover',
        text: 'We deliver finished, documented solutions that your team can manage, update, and build on.',
      },
      {
        title: 'Long-term performance',
        text: 'Solutions are built to remain current, maintainable, and aligned to your growth as the business evolves.',
      },
    ],
    tabs: [
      {
        key: 'web-design',
        label: 'Web Designing',
        kicker: 'Credibility begins with a powerful website',
        description:
          'We design and develop websites that establish authority, communicate your value clearly, and convert visitors into clients — built for performance on every device and every screen size.',
        bullets: [
          'Responsive, high-performance design for mobile, tablet, and desktop',
          'Clear information architecture, user journeys, and navigation structure',
          'Brand-aligned visual design with content that positions you with authority',
          'Development handover with full documentation and ongoing support planning',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses establishing or elevating their digital credibility' },
          { label: 'Output', value: 'A fully designed, responsive website built for performance and conversion' },
        ],
      },
      {
        key: 'software',
        label: 'Software Design',
        kicker: 'From business need to build-ready specification',
        description:
          'We translate complex business requirements into clear software specifications, user flows, and architecture plans that development teams can build against with confidence.',
        bullets: [
          'Requirements capture, gap analysis, and scope definition',
          'Feature prioritization, roadmap planning, and milestone structuring',
          'User journey mapping and interface flow design for key workflows',
          'Technical specification handover with documented next steps',
        ],
        meta: [
          { label: 'Best for', value: 'Organizations designing portals, platforms, or internal business tools' },
          { label: 'Output', value: 'A complete, build-ready software specification and delivery roadmap' },
        ],
      },
      {
        key: 'portal',
        label: 'Portal',
        kicker: 'Portals that make complex operations simple',
        description:
          'We design and deliver customer-facing and internal portals that streamline workflows, improve team efficiency, and give stakeholders the access and information they need — when they need it.',
        bullets: [
          'User journey mapping and role-based access architecture',
          'Portal design, milestone-driven development, and quality checkpoints',
          'Integration planning for existing systems and data sources',
          'Full handover, user documentation, and future iteration support',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses digitalizing customer interactions or internal operations' },
          { label: 'Output', value: 'A fully functional portal with structured handover and documentation' },
        ],
      },
      {
        key: 'social',
        label: 'Social Media Apps',
        kicker: 'Build a digital presence that engages and grows',
        description:
          'We develop and manage social media applications and brand platforms that drive engagement, grow audiences, and support your commercial objectives with a consistent, professional presence.',
        bullets: [
          'Platform strategy, feature scope definition, and audience targeting',
          'Application development with milestone delivery and quality review',
          'Content strategy, launch planning, and rollout management',
          'Performance monitoring, audience analytics, and ongoing optimization',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses building or scaling a social media and digital brand presence' },
          { label: 'Output', value: 'A developed, launched social platform with a managed growth strategy' },
        ],
      },
      {
        key: 'content',
        label: 'Internet Content',
        kicker: 'Content that positions. Consistently.',
        description:
          'We plan, create, and manage digital content across your website, landing pages, and service platforms — ensuring your brand communicates with authority and your information stays current and compelling.',
        bullets: [
          'Content strategy, page hierarchy, and editorial planning',
          'Copywriting and content creation aligned to SEO and brand positioning',
          'Regular update cycles, publishing coordination, and quality control',
          'Consistency management across all digital touchpoints and platforms',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses that need authoritative, current content across their digital presence' },
          { label: 'Output', value: 'A structured content strategy with managed production and publishing' },
        ],
      },
    ],
  },
  trademark: {
    eyebrow: 'Service scope',
    title: 'Brand protection managed with authority-facing discipline',
    description:
      'We manage the complete trademark registration cycle — from initial search and classification through to Ministry of Economy filing, publication, and final certification.',
    sideCards: [
      {
        title: 'Class accuracy',
        text: 'We identify the correct Nice Classification categories to ensure your brand is protected across all relevant activities.',
      },
      {
        title: 'Filing strategy',
        text: 'Submissions are structured to meet Ministry of Economy requirements and reduce the risk of rejection or opposition.',
      },
      {
        title: 'Milestone tracking',
        text: 'Every stage — from search to certificate — is tracked with clear status updates and documented follow-up.',
      },
      {
        title: 'Portfolio management',
        text: 'We manage your registrations, renewals, and amendments under a single point of accountability.',
      },
    ],
    tabs: [
      {
        key: 'search',
        label: 'Trademark Search',
        kicker: 'Search before you file',
        description:
          'We conduct comprehensive availability searches across the Ministry of Economy database to identify potential conflicts and evaluate the likelihood of registration before you commit to a filing.',
        bullets: [
          'Direct search of the UAE trademark registry database',
          'Conflict identification and similarity assessment',
          'Class-specific availability reporting and risk evaluation',
          'Actionable recommendations on brand viability and filing strategy',
        ],
        meta: [
          { label: 'Best for', value: 'New brands or existing brands expanding into the UAE' },
          { label: 'Output', value: 'A detailed availability report and filing recommendation' },
        ],
      },
      {
        key: 'filing',
        label: 'Ministry Filing',
        kicker: 'Structured authority submission',
        description:
          'We manage the formal filing process with the Ministry of Economy — preparing all documentation, coordinating submissions, and managing the official follow-up until the initial approval is granted.',
        bullets: [
          'Preparation of official application forms and supporting documents',
          'Class classification and filing fee coordination',
          'Direct submission management with Ministry of Economy systems',
          'Timeline tracking and status reporting through the approval phase',
        ],
        meta: [
          { label: 'Best for', value: 'Companies ready to formalize their brand protection' },
          { label: 'Output', value: 'A successfully filed application with tracked approval status' },
        ],
      },
      {
        key: 'protection',
        label: 'Brand Protection',
        kicker: 'Securing your certificate',
        description:
          'Once initial approval is granted, we coordinate the publication phase and monitor the opposition period — ensuring all legal requirements are met before delivering your final registration certificate.',
        bullets: [
          'Coordination of official gazette and newspaper publications',
          'Monitoring of the 30-day opposition window for any challenges',
          'Final certificate fee management and authority handover',
          'Delivery of the final trademark registration certificate and record file',
        ],
        meta: [
          { label: 'Best for', value: 'Brands completing the final stages of the registration cycle' },
          { label: 'Output', value: 'The final, issued UAE Trademark Registration Certificate' },
        ],
      },
    ],
  },
}
