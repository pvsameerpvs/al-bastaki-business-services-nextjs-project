import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'

import { getService } from '../../lib/services'

export const metadata = {
  title: 'Consultancy Services | Al Bastaki Business Services LLC',
  description:
    'Consultancy services in Dubai and the UAE: structured advisory, feasibility studies, and practical planning to reduce risk and improve decisions.',
}

export default function ConsultancyPage() {
  const service = getService('consultancy')

  return (
    <main>
      <PageHero
        badge="Consultancy"
        title={service?.title ?? 'Consultancy Services'}
        subtitle={
          service?.subtitle ??
          'Regional insight and structured advisory to assess opportunities, reduce risk, and support growth decisions.'
        }
        image={service?.coverImage ?? '/hero-main1.jpg'}
      />

      <ServiceFocusTabs
        eyebrow="Advisory areas"
        title="Structured advisory that turns questions into a plan"
        description="We help you assess opportunities with a practical approach: clarify assumptions, structure inputs, and produce decision-ready outputs. Explore common advisory areas we support."
        sideCards={[
          { title: 'Context-first', text: 'Grounded in regional business realities and constraints.' },
          { title: 'Decision-ready', text: 'Outputs structured for action, not just analysis.' },
          { title: 'Risk-aware', text: 'We identify dependencies and trade-offs early.' },
          { title: 'Practical process', text: 'Clear steps, milestones, and deliverables.' },
        ]}
        tabs={[
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
        ]}
      />

      {service && (
        <ServiceDetailSections
          intro={service.intro}
          keyPoints={service.keyPoints}
          deliverables={service.deliverables}
        />
      )}

      <PageCTA
        title="Talk to us about a consultancy scope"
        description="Share what you are evaluating and your timeline. We will propose a structured approach and deliverables."
      />
    </main>
  )
}
