
import Hero from '../components/Hero'
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
      <Services />
      <About />
      <Stats />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  )
}
