import CompanyFormationOptions from './CompanyFormationOptions'
import ServiceFocusTabs from './ServiceFocusTabs'

import type { ServiceSlug } from '../lib/services'
import { focusTabsContentBySlug } from '../lib/service-detail-page-content'

export default function ServiceDetailFocusSection({
  slug,
}: {
  slug: ServiceSlug
}) {
  if (slug === 'company-formation') return <CompanyFormationOptions />

  const content = focusTabsContentBySlug[slug]
  if (!content) return null

  return <ServiceFocusTabs {...content} />
}
