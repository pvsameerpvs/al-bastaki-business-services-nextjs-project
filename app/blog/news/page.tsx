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
        subtitle="Updates and guidance around regulations and changes that affect how businesses operate in the UAE."
        image="/hero-main2.jpg"
      />

      <BlogSection
        title="Industry updates"
        description="A focused view of changes and guidance that can impact planning, compliance, and operational decisions."
        items={items}
      />

      <PageCTA
        title="Need help navigating an update?"
        description="Tell us what you are dealing with and we will guide you through the practical steps to stay compliant."
      />
    </main>
  )
}
