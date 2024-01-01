import Image from 'next/image'
import { HeroSection } from './components/heroSection'
import { AboutMe } from './components/about'



export default function Home() {
  return (
    <>
    <div>
      <HeroSection />
      <AboutMe />
    </div>
    
    </>
  )
}
