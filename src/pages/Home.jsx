import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FormSection from '../components/home/FormSection'
import AboutUs from '../components/home/AboutUs'
import EcosystemSection from '../components/home/EcosystemSection'
import WhyChoose from '../components/home/WhyChoose'
import Treatment from '../components/home/Treatment'
import Testimonial from '../components/home/Testimonial'
import Cta from '../components/home/Cta'
import Surgery from '../components/home/surgery'

function Home() {
  return (
    <div className="">
      <HeroSection />
      {/* Priority Flagship Showcase: SPEED & DOPAMINE */}
      <EcosystemSection />
      <AboutUs />
      <WhyChoose />
      <Surgery />
      <Treatment />
      <Testimonial />
      <FormSection />
      <Cta />
    </div>
  )
}

export default Home
