import HeroSection from '../comps/HeroSection'
import About from '../comps/About'
import WhyUs from '../comps/WhyUs'
import Extra from '../comps/Extra'
import CTA from '../comps/CTA'


export default function Index() {
  return (
  <div className="md:flex flex-col justify-around items-center" >
      <HeroSection />
      <About />
      <WhyUs />
      <Extra />
      <CTA />
    </div>
  )
}
