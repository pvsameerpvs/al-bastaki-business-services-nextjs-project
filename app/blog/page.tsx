import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import BlogSection from '../../components/BlogSection'

import { articles } from '../../lib/articles'

export default function BlogPage() {
  return (
    <main>
      <PageHero
        badge="Insights"
        title="Blog"
        subtitle="Business insights, industry updates, and practical guidance — aligned to the same tone and design system as the homepage."
        image="/Insights.jpg"
      />

      <BlogSection
        title="Latest articles"
        description="Quick reads on company formation, tax and compliance updates, consulting guidance, and operational planning."
        items={articles}
      />

      <PageCTA
        title="Need advice for your situation?"
        description="Tell us your business goals and we will recommend the next practical steps for setup and support."
      />
    </main>
  )
}
