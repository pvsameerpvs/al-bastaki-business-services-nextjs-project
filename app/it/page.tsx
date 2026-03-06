import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import ServiceDetailSections from '../../components/ServiceDetailSections'
import ServiceFocusTabs from '../../components/ServiceFocusTabs'

import { getService } from '../../lib/services'

export const metadata = {
  title: 'IT Services | Al Bastaki Business Services LLC',
  description:
    'IT services in Dubai and the UAE: web design, development, portals, software design, and digital support to strengthen your business presence.',
}

export default function ITPage() {
  const service = getService('it')

  return (
    <main>
      <PageHero
        badge="IT services"
        title={service?.title ?? 'IT Services'}
        subtitle={
          service?.subtitle ??
          'Website, branding, and digital solutions under one roof to grow your business with a stronger online presence.'
        }
        image={service?.coverImage ?? '/hero-main1.jpg'}
      />

      <ServiceFocusTabs
        eyebrow="Digital delivery"
        title="Web, software, and platform support built for growth"
        description="We deliver practical digital solutions with clear deliverables and timelines. Explore common IT service areas we provide and the outcomes teams typically look for."
        sideCards={[
          { title: 'Modern delivery', text: 'Clean UX and implementation that feels current.' },
          { title: 'Clear scope', text: 'We define deliverables and checkpoints early.' },
          { title: 'Practical support', text: 'Reliable follow-ups and handover documentation.' },
          { title: 'Affordable outcomes', text: 'Solutions aligned to budget and business goals.' },
        ]}
        tabs={[
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
        title="Build something practical and polished"
        description="Tell us what you need (website, portal, or software). We will recommend a scope and timeline to deliver."
      />
    </main>
  )
}
