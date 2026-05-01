import Hero from '../components/Hero'
import TimelineBar from '../components/TimelineBar'
import WhyChooseUs from '../components/WhyChooseUs'
import WhyTrust from '../components/WhyTrust'
import Services from '../components/Services'
import About from '../components/About'
import Stats from '../components/Stats'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import LatestArticles from '../components/LatestArticles'
import ClientsAndAgencies from '../components/ClientsAndAgencies'
import ServicesMarquee from '../components/ServicesMarquee'

export default function Page(){
  return(
    <main>
      <Hero />
      <TimelineBar />
      <About />
      {/* <Stats /> */}
       <WhyTrust />
      <WhyChooseUs />
      <Services />
      <ClientsAndAgencies />
       <ServicesMarquee />
      {/* <Process /> */}
     
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      {/* <LatestArticles /> */}
      {/* <CTA /> */}
    </main>
  )
}
