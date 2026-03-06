import PageHero from '../../components/PageHero'
import Process from '../../components/Process'
import Services from '../../components/Services'
import PageCTA from '../../components/PageCTA'
import ServicesCatalog from '../../components/ServicesCatalog'

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        badge="What we do"
        title="Services"
        subtitle="From company formation and business setup to accounting, consultancy, events, and IT — Al Bastaki provides structured support to help you establish, manage, and grow your business in the UAE."
        image="/hero-main1.jpg"
      />

      <ServicesCatalog />
      <Process />
      <Services />

      <PageCTA
        title="Get the right service mix"
        description="Tell us what you are building. We will recommend a practical scope across formation, licensing, PRO, and ongoing support."
      />
    </main>
  )
}
