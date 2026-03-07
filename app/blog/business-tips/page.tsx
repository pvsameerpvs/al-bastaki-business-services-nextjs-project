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
        subtitle="Practical guidance for founders and teams building in the UAE — designed for clear decision-making and smoother execution."
        image="/businesstips.jpg"
      />

      <BlogSection
        title="Practical business tips"
        description="Tips to help you choose the right route, avoid common mistakes, and keep your setup moving smoothly."
        items={items}
      />

      <PageCTA
        title="Want a setup checklist for your business?"
        description="Share your activity and timeline. We will provide the next steps and the documents required."
      />
    </main>
  )
}
