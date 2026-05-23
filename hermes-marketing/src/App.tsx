
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Showcase from './components/Showcase'
import { StrategyLeft, MindsetRight } from './components/Strategy'
import Services from './components/Services'
import Proof from './components/Proof'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useFadeInObserver, useParallax } from './hooks/useAnimations'
import './styles/globals.css'

export default function App() {
  useFadeInObserver('.svcc, .rc, .pc, .ai, .si, .vi')
  useParallax('.hero-video-bg video')

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Showcase />
      <StrategyLeft />
      <Services />
      <MindsetRight />
      <Proof />
      <CTA />
      <Footer />
    </>
  )
}
