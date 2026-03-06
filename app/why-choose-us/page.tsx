import PageHero from '../../components/PageHero'
import WhyChooseUs from '../../components/WhyChooseUs'
import WhyTrust from '../../components/WhyTrust'
import PageCTA from '../../components/PageCTA'

export default function WhyChooseUsPage() {
  return (
    <main>
      <PageHero
        badge="Our difference"
        title="Why Choose Al Bastaki"
        subtitle="A service model built around expertise, client-first execution, and dependable delivery — from formation to ongoing operational support."
        image="/hero-main1.jpg"
      />

      <WhyChooseUs />
      <WhyTrust />

      <PageCTA
        title="Get a clear setup plan"
        description="Tell us your business activity and goals. We will recommend the most practical route and support you through each step."
      />
    </main>
  )
}
