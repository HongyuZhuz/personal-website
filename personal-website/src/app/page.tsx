import Image from 'next/image'
import { HeroSection } from './components/heroSection'
import { AboutMe } from './components/about'
import { MyEducationSection } from './components/education'
import { Designer } from './components/designer'
import { Footer } from './components/footer'



export default function Home() {
  return (
    <>
    <div>
      <HeroSection />
      <AboutMe />
      <MyEducationSection />
      <Designer />
      <Footer />
    </div>
    
    </>
  )
}
