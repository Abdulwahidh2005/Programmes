import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import HeroSection    from './components/HeroSection'
import WorkSection    from './components/WorkSection'
import AboutSection   from './components/AboutSection'
import PricingSection from './components/PricingSection'
import ContactSection from './components/ContactSection'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      syncTouch: true,
      wheelMultiplier: 0.82,
      touchMultiplier: 0.9,
    })
    lenisRef.current = lenis

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar lenisRef={lenisRef} />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </div>
  )
}
