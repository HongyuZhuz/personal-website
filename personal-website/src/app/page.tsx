import Image from 'next/image'
import { HeroSection } from './components/heroSection'
import { AboutMe } from './components/about'
import { MyEducationSection } from './components/education'
import { Designer } from './components/designer'



export default function Home() {
  return (
    <>
    <div>
      <HeroSection />
      <AboutMe />
      <MyEducationSection />
      <Designer />
    </div>
    
    </>
  )
}
