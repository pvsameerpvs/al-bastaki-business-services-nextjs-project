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
  events: 'Event management',
  it: 'IT services',
}

export const ctaBySlug: Partial<
  Record<ServiceSlug, { title: string; description: string }>
> = {
  'company-formation': {
    title: 'Start your company formation with clarity',
    description:
      'Share your activity, preferred jurisdiction, and timeline. We will respond with a practical route, document checklist, and the next steps to proceed.',
  },
  'business-setup': {
    title: 'Plan your business setup the right way',
    description:
      'Tell us your activity and timeline. We will respond with a practical checklist and the next steps to move forward.',
  },
  accounting: {
    title: 'Get accounting support that stays practical',
    description:
      'Share your business size and reporting needs. We will recommend a scope and the next steps to start cleanly.',
  },
  consultancy: {
    title: 'Talk to us about a consultancy scope',
    description:
      'Share what you are evaluating and your timeline. We will propose a structured approach and deliverables.',
  },
  events: {
    title: 'Plan an event with a clear run-of-show',
    description:
      'Tell us the event type, date, and audience size. We will recommend a practical scope and next steps.',
  },
  it: {
    title: 'Build something practical and polished',
    description:
      'Tell us what you need (website, portal, or software). We will recommend a scope and timeline to deliver.',
  },
}

export const focusTabsContentBySlug: Partial<
  Record<ServiceSlug, ServiceFocusTabsContent>
> = {
  'business-setup': {
    eyebrow: 'What we handle',
    title: 'Registration, PRO, and corporate services without friction',
    description:
      'We organize the moving parts across registration and corporate services so your setup stays compliant and predictable. Pick a focus area to see how we work and what is typically included.',
    sideCards: [
      {
        title: 'Fewer delays',
        text: 'Structured follow-ups and clean submissions reduce back-and-forth.',
      },
      {
        title: 'Clear checklists',
        text: 'We keep documentation requirements explicit and track status end to end.',
      },
      {
        title: 'Practical timelines',
        text: 'We align the scope to your constraints and coordinate the next steps.',
      },
      {
        title: 'Ongoing support',
        text: 'Renewals, amendments, and corporate services when you need them.',
      },
    ],
    tabs: [
      {
        key: 'pro',
        label: 'PRO Services',
        kicker: 'Coordination and follow-ups',
        description:
          'We manage submissions and authority coordination with a structured checklist and practical timelines.',
        bullets: [
          'Document collection, reviews, and organization',
          'Submission coordination and tracking',
          'Clear status updates and next-step planning',
          'Support for common corporate service requests',
        ],
        meta: [
          { label: 'Best for', value: 'Teams that want predictable admin execution' },
          { label: 'Output', value: 'Clean submissions and tracked progress' },
        ],
      },
      {
        key: 'visas',
        label: 'Visa Processing',
        kicker: 'Step-by-step guidance',
        description:
          'We coordinate the process and required documents so your visa-related steps move forward smoothly.',
        bullets: [
          'Document checklist and preparation support',
          'Process coordination and follow-ups',
          'Timeline planning around your onboarding needs',
          'Practical guidance on next steps and handover',
        ],
        meta: [
          { label: 'Best for', value: 'Founders hiring or relocating teams' },
          { label: 'Output', value: 'A tracked process with clear requirements' },
        ],
      },
      {
        key: 'amendments',
        label: 'Amendments',
        kicker: 'Keep changes compliant',
        description:
          'When your company evolves, we help structure amendments and submissions to keep records accurate.',
        bullets: [
          'Change assessment and documentation checklist',
          'Submission coordination and progress tracking',
          'Clear guidance on approvals and dependencies',
          'Handover of updated documents and confirmations',
        ],
        meta: [
          { label: 'Best for', value: 'Companies updating details or scope' },
          { label: 'Output', value: 'Updated records with an audit-friendly trail' },
        ],
      },
      {
        key: 'trademark',
        label: 'Trademark',
        kicker: 'Brand protection support',
        description:
          'We coordinate the submission flow and documentation structure required for trademark registration steps.',
        bullets: [
          'Structured requirements and document preparation',
          'Submission coordination and follow-ups',
          'Clear milestones and timeline expectations',
          'Handover and next-step support where needed',
        ],
        meta: [
          { label: 'Best for', value: 'Brands formalizing protection early' },
          { label: 'Output', value: 'A coordinated process with tracked milestones' },
        ],
      },
      {
        key: 'liquidation',
        label: 'Liquidation',
        kicker: 'Structured close-out',
        description:
          'We help keep close-out steps organized, documented, and coordinated to reduce confusion and delays.',
        bullets: [
          'Checklist creation based on your scenario',
          'Document organization and submission coordination',
          'Follow-ups and approval tracking',
          'Final handover and closure confirmations',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses planning an orderly exit' },
          { label: 'Output', value: 'A clear plan and tracked close-out progress' },
        ],
      },
    ],
  },
  accounting: {
    eyebrow: 'Accounting scope',
    title: 'Clean records, reliable reporting, and practical support',
    description:
      'We help you stay organized with consistent bookkeeping, clear reporting, and structured support for common accounting requirements. Pick a focus area to see what we typically cover.',
    sideCards: [
      { title: 'Confidentiality', text: 'We treat financial data with care and discipline.' },
      { title: 'Accuracy', text: 'Processes designed to reduce mistakes and surprises.' },
      { title: 'Clarity', text: 'Reporting built for decisions, not just compliance.' },
      { title: 'Consistency', text: 'Repeatable monthly cycles and clean handovers.' },
    ],
    tabs: [
      {
        key: 'bookkeeping',
        label: 'Bookkeeping',
        kicker: 'Monthly financial hygiene',
        description:
          'We keep records structured and consistent so reporting stays dependable and audit-ready.',
        bullets: [
          'Clean categorization and structured documentation',
          'Monthly close support and reconciliations',
          'Reliable reporting for owners and managers',
          'Clear handover and file organization',
        ],
        meta: [
          { label: 'Best for', value: 'SMEs that need consistent monthly books' },
          { label: 'Output', value: 'Organized records and practical reports' },
        ],
      },
      {
        key: 'payroll',
        label: 'Payroll',
        kicker: 'Accurate and on-time',
        description:
          'We support payroll-related accounting needs with a structured process and clear timelines.',
        bullets: [
          'Payroll cycle coordination and documentation checks',
          'Consistency across recurring payroll steps',
          'Clear monthly handover and reporting',
          'Support aligned to your internal approval flow',
        ],
        meta: [
          { label: 'Best for', value: 'Teams that want a dependable payroll rhythm' },
          { label: 'Output', value: 'A predictable cycle with clear documentation' },
        ],
      },
      {
        key: 'vat',
        label: 'VAT Support',
        kicker: 'Structured requirements',
        description:
          'We help keep VAT-related documentation and reporting organized around your business needs.',
        bullets: [
          'Document checklist and organization support',
          'Process coordination and timeline planning',
          'Clear inputs needed from your team',
          'Clean archiving for reference and continuity',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses that want structured VAT readiness' },
          { label: 'Output', value: 'Organized documentation and clear reporting inputs' },
        ],
      },
      {
        key: 'audit',
        label: 'Audit Support',
        kicker: 'Stay prepared',
        description:
          'We help you keep records tidy and provide the supporting documentation needed for audit processes.',
        bullets: [
          'Organized records and supporting documentation',
          'Clear requests list and handover structure',
          'Consistent reporting formats',
          'Practical follow-ups and coordination',
        ],
        meta: [
          { label: 'Best for', value: 'Companies that need audit-ready organization' },
          { label: 'Output', value: 'Structured files and smoother audit coordination' },
        ],
      },
      {
        key: 'banking',
        label: 'Bank Account Opening',
        kicker: 'Organized documentation',
        description:
          'We support document preparation and coordination to keep the process organized and efficient.',
        bullets: [
          'Checklist of common documentation needs',
          'Document organization and submission readiness',
          'Timeline planning and follow-ups',
          'Clear next steps and handover',
        ],
        meta: [
          { label: 'Best for', value: 'New businesses preparing banking documentation' },
          { label: 'Output', value: 'A clean, structured document pack' },
        ],
      },
    ],
  },
  consultancy: {
    eyebrow: 'Advisory areas',
    title: 'Structured advisory that turns questions into a plan',
    description:
      'We help you assess opportunities with a practical approach: clarify assumptions, structure inputs, and produce decision-ready outputs. Explore common advisory areas we support.',
    sideCards: [
      {
        title: 'Context-first',
        text: 'Grounded in regional business realities and constraints.',
      },
      { title: 'Decision-ready', text: 'Outputs structured for action, not just analysis.' },
      { title: 'Risk-aware', text: 'We identify dependencies and trade-offs early.' },
      { title: 'Practical process', text: 'Clear steps, milestones, and deliverables.' },
    ],
    tabs: [
      {
        key: 'feasibility',
        label: 'Feasibility Studies',
        kicker: 'Assess viability and trade-offs',
        description:
          'We structure the inputs and analysis needed to evaluate opportunities with clear assumptions and next steps.',
        bullets: [
          'Scope definition and assumptions alignment',
          'Structured research and scenario framing',
          'Practical milestones and deliverables',
          'Clear outputs and recommended next steps',
        ],
        meta: [
          { label: 'Best for', value: 'New initiatives and market entry decisions' },
          { label: 'Output', value: 'A structured feasibility view and plan' },
        ],
      },
      {
        key: 'marketing',
        label: 'Marketing Management',
        kicker: 'Positioning and execution support',
        description:
          'We help structure marketing priorities and execution to match your business goals and resources.',
        bullets: [
          'Goal alignment and KPI framing',
          'Channel and campaign planning support',
          'Execution structure and review cadence',
          'Practical reporting for decisions',
        ],
        meta: [
          { label: 'Best for', value: 'Teams that need structured go-to-market support' },
          { label: 'Output', value: 'A clear plan with measurable priorities' },
        ],
      },
      {
        key: 'facilities',
        label: 'Facilities Planning',
        kicker: 'Resources and operations',
        description:
          'We support facilities resource planning to align operational needs with growth and service delivery.',
        bullets: [
          'Operational requirements and constraints capture',
          'Resource planning and coordination approach',
          'Milestones and documentation structure',
          'Recommendations aligned to practical execution',
        ],
        meta: [
          { label: 'Best for', value: 'Organizations scaling operations' },
          { label: 'Output', value: 'A structured plan for facilities needs' },
        ],
      },
      {
        key: 'management',
        label: 'Management Services',
        kicker: 'Structure and control',
        description:
          'We help structure processes and decision flows so execution is consistent and measurable.',
        bullets: [
          'Operating cadence and governance alignment',
          'Role and responsibility clarity',
          'Milestones, reporting, and review rhythm',
          'Practical improvements focused on outcomes',
        ],
        meta: [
          { label: 'Best for', value: 'Teams needing clarity and coordination' },
          { label: 'Output', value: 'Repeatable execution and reporting structure' },
        ],
      },
      {
        key: 'facilities-mgmt',
        label: 'Facilities Management',
        kicker: 'Reliable operations support',
        description:
          'We support planning and coordination for facilities management services aligned to your needs.',
        bullets: [
          'Scope definition and coordination plan',
          'Documentation and requirements structure',
          'Milestones and follow-up cadence',
          'Clear handover and next steps',
        ],
        meta: [
          { label: 'Best for', value: 'Organizations standardizing facilities services' },
          { label: 'Output', value: 'A structured service approach and handover' },
        ],
      },
    ],
  },
  events: {
    eyebrow: 'Event formats',
    title: 'Plan, coordinate, and deliver events with confidence',
    description:
      'From conferences and exhibitions to ceremonies and media production, we support the logistics and execution details so delivery stays smooth. Explore common formats we manage.',
    sideCards: [
      { title: 'End-to-end', text: 'From planning through on-ground execution and wrap-up.' },
      { title: 'Project-managed', text: 'Clear milestones, owners, and follow-ups.' },
      {
        title: 'Vendor coordination',
        text: 'Structured coordination across suppliers and stakeholders.',
      },
      { title: 'On-time delivery', text: 'Practical timelines and execution discipline.' },
    ],
    tabs: [
      {
        key: 'conferences',
        label: 'Conferences & Seminars',
        kicker: 'Structured production',
        description:
          'We coordinate the logistics, timelines, and on-site execution so the experience feels smooth and professional.',
        bullets: [
          'Event plan, milestones, and execution checklist',
          'Supplier coordination and timeline tracking',
          'On-site readiness and production support',
          'Post-event wrap-up and handover',
        ],
        meta: [
          { label: 'Best for', value: 'Corporate and professional gatherings' },
          { label: 'Output', value: 'A clear plan and coordinated delivery' },
        ],
      },
      {
        key: 'exhibitions',
        label: 'Exhibitions',
        kicker: 'Booths and show coordination',
        description:
          'We help keep exhibition execution organized, from planning to show-day logistics and follow-ups.',
        bullets: [
          'Timeline and deliverables planning',
          'Vendor coordination and on-site scheduling',
          'Clear checklists for materials and readiness',
          'Support through setup, show days, and dismantle',
        ],
        meta: [
          { label: 'Best for', value: 'Brands attending trade shows' },
          { label: 'Output', value: 'Coordinated pre-show and on-site delivery' },
        ],
      },
      {
        key: 'ceremonies',
        label: 'Ceremonies & Weddings',
        kicker: 'Details-driven coordination',
        description:
          'We coordinate the moving parts so the day runs smoothly with minimal stress for organizers.',
        bullets: [
          'Structured plan and timeline coordination',
          'Supplier alignment and follow-ups',
          'On-ground scheduling and execution support',
          'Clear checklists and contingency planning',
        ],
        meta: [
          { label: 'Best for', value: 'High-touch events with many dependencies' },
          { label: 'Output', value: 'A disciplined run-of-show and delivery' },
        ],
      },
      {
        key: 'production',
        label: 'Film, TV & Radio Production',
        kicker: 'Production coordination',
        description:
          'We support production logistics and coordination to keep shoots organized and efficient.',
        bullets: [
          'Scheduling support and coordination',
          'Vendor and equipment planning alignment',
          'On-ground logistics and follow-ups',
          'Clear deliverables and handover planning',
        ],
        meta: [
          { label: 'Best for', value: 'Production teams needing logistics support' },
          { label: 'Output', value: 'Organized schedules and coordinated delivery' },
        ],
      },
      {
        key: 'pr',
        label: 'Public Relations',
        kicker: 'Communication support',
        description:
          'We help structure PR-related coordination around your event goals and stakeholders.',
        bullets: [
          'Stakeholder coordination planning',
          'Milestones and timeline structure',
          'Execution support and follow-ups',
          'Clear reporting and handover',
        ],
        meta: [
          { label: 'Best for', value: 'Events with media and stakeholder needs' },
          { label: 'Output', value: 'A coordinated PR support plan' },
        ],
      },
    ],
  },
  it: {
    eyebrow: 'Digital delivery',
    title: 'Web, software, and platform support built for growth',
    description:
      'We deliver practical digital solutions with clear deliverables and timelines. Explore common IT service areas we provide and the outcomes teams typically look for.',
    sideCards: [
      { title: 'Modern delivery', text: 'Clean UX and implementation that feels current.' },
      { title: 'Clear scope', text: 'We define deliverables and checkpoints early.' },
      { title: 'Practical support', text: 'Reliable follow-ups and handover documentation.' },
      { title: 'Affordable outcomes', text: 'Solutions aligned to budget and business goals.' },
    ],
    tabs: [
      {
        key: 'web-design',
        label: 'Web Designing',
        kicker: 'Design with intent',
        description:
          'We design websites that are clear, responsive, and aligned to your brand and conversion goals.',
        bullets: [
          'Responsive layouts for mobile and desktop',
          'Clear information structure and navigation',
          'Brand-aligned visual direction',
          'Design handover and implementation planning',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses improving credibility and conversion' },
          { label: 'Output', value: 'A website design ready to build' },
        ],
      },
      {
        key: 'software',
        label: 'Software Design',
        kicker: 'From requirements to scope',
        description:
          'We help structure software needs into clear requirements and deliverables that teams can build against.',
        bullets: [
          'Requirement capture and scope definition',
          'Feature prioritization and milestones',
          'UX flow planning for key journeys',
          'Clear handover and next steps',
        ],
        meta: [
          { label: 'Best for', value: 'Teams starting a portal or internal tool' },
          { label: 'Output', value: 'A structured build-ready scope' },
        ],
      },
      {
        key: 'portal',
        label: 'Portal',
        kicker: 'Platforms and dashboards',
        description:
          'We support portal planning and delivery for customer-facing or internal workflows with clear milestones.',
        bullets: [
          'User journeys and role-based access planning',
          'Milestone-based delivery and checkpoints',
          'Clear handover and documentation',
          'Support for iteration and improvements',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses streamlining processes digitally' },
          { label: 'Output', value: 'A portal plan and delivery approach' },
        ],
      },
      {
        key: 'social',
        label: 'Social Media Apps',
        kicker: 'Build and manage',
        description:
          'We support development and management of social media app initiatives with clear deliverables.',
        bullets: [
          'Scope definition and feature checklist',
          'Milestone planning and delivery coordination',
          'Content and rollout support structure',
          'Performance review cadence and next steps',
        ],
        meta: [
          { label: 'Best for', value: 'Teams building a social presence with tooling' },
          { label: 'Output', value: 'A structured delivery and management plan' },
        ],
      },
      {
        key: 'content',
        label: 'Internet Content',
        kicker: 'Keep it consistent',
        description:
          'We help keep content production and updates structured so your website stays current and clear.',
        bullets: [
          'Content planning and page structure support',
          'Update cycles and publishing coordination',
          'Consistency across key brand pages',
          'Handover and documentation for continuity',
        ],
        meta: [
          { label: 'Best for', value: 'Businesses needing ongoing updates' },
          { label: 'Output', value: 'A structured content update workflow' },
        ],
      },
    ],
  },
}
