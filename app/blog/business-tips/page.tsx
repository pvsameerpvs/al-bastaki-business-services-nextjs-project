import PageHero from '../../../components/PageHero'
import PageCTA from '../../../components/PageCTA'
import BlogSection from '../../../components/BlogSection'

import { articles } from '../../../lib/articles'

export default function BusinessTipsPage() {
  const items = articles.filter((a) => a.category === 'Business Tips')

  return (
    <main>
      <PageHero
        badge="Blog category"
        title="Business Tips"
        subtitle="Practical guidance for founders, SMEs, and regional teams building in the UAE with clearer decisions and smoother execution."
        image="/businesstips.jpg"
      />

      <BlogSection
        title="Practical business tips"
        description="Guidance to help you choose the right route, avoid common setup mistakes, prepare documents properly, and keep progress moving."
        items={items}
      />

      <PageCTA
        title="Want a setup checklist for your business?"
        description="Share your activity, current stage, and timeline. We will provide the next steps and the documents required."
      />
    </main>
  )
}
