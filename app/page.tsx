import Hero from '../components/Hero'
import TimelineBar from '../components/TimelineBar'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import About from '../components/About'
import Stats from '../components/Stats'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Page(){
  return(
    <main>
      <Hero />
      <TimelineBar />
      <About />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  )
}
