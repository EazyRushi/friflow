import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import Hero from '../sections/Hero'
import MarqueeBand from '../sections/MarqueeBand'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Disciplines from '../sections/Disciplines'
import Process from '../sections/Process'
import Testimonial from '../sections/Testimonial'
import About from '../sections/About'
import CTA from '../sections/CTA'
import { useReveal } from '../components/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <MarqueeBand />
      <Services />
      <Work />
      <Disciplines />
      <Process />
      <Testimonial />
      <About />
      <CTA />
      <Footer />
    </>
  )
}
