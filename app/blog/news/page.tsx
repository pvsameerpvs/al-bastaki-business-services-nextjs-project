import PageHero from '../../../components/PageHero'
import PageCTA from '../../../components/PageCTA'
import BlogSection from '../../../components/BlogSection'

import { articles } from '../../../lib/articles'

export default function IndustryNewsPage() {
  const items = articles.filter((a) => a.category === 'Industry News')

  return (
    <main>
      <PageHero
        badge="Blog category"
        title="Industry News"
        subtitle="Updates and guidance around regulatory, tax, banking, and business changes that affect companies operating in the UAE and wider region."
        image="/hero-main2.jpg"
      />

      <BlogSection
        title="Industry updates"
        description="A focused view of changes and guidance that can affect planning, documentation, compliance coordination, and operational decisions."
        items={items}
      />

      <PageCTA
        title="Need help navigating an update?"
        description="Tell us what you are dealing with and we will guide you through the practical steps to stay organized and compliant."
      />
    </main>
  )
}
