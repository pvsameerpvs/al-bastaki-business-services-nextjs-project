import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'

import { getService } from '../../lib/services'

export const metadata = {
  title: 'Event Management | Al Bastaki Business Services LLC',
  description:
    'Event management in Dubai and the UAE: structured planning, logistics coordination, and end-to-end delivery for conferences, exhibitions, ceremonies, and more.',
}

export default function EventsPage() {
  const service = getService('events')

  return (
    <main>
      <PageHero
        badge="Event management"
        title={service?.title ?? 'Event Management'}
        subtitle={
          service?.subtitle ??
          'End-to-end event logistics and project management for conferences, exhibitions, ceremonies, and more.'
        }
        image={service?.coverImage ?? '/hero-main2.jpg'}
      />

      <ServiceFocusTabs
        eyebrow="Event formats"
        title="Plan, coordinate, and deliver events with confidence"
        description="From conferences and exhibitions to ceremonies and media production, we support the logistics and execution details so delivery stays smooth. Explore common formats we manage."
        sideCards={[
          { title: 'End-to-end', text: 'From planning through on-ground execution and wrap-up.' },
          { title: 'Project-managed', text: 'Clear milestones, owners, and follow-ups.' },
          { title: 'Vendor coordination', text: 'Structured coordination across suppliers and stakeholders.' },
          { title: 'On-time delivery', text: 'Practical timelines and execution discipline.' },
        ]}
        tabs={[
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
        title="Plan an event with a clear run-of-show"
        description="Tell us the event type, date, and audience size. We will recommend a practical scope and next steps."
      />
    </main>
  )
}
