import { HeroSection } from './components/heroSection'
import { AboutMe } from './components/about'
import { MyEducationSection } from './components/education'
import { Designer } from './components/designer'
import { Footer } from './components/footer'
import { SendAws } from './components/sendAws'



export default function Home() {
  return (
    <>
    <div>
      <SendAws />
      <HeroSection />
      <AboutMe />
      <MyEducationSection />
      <Designer />
      <Footer />
    </div>
    
    </>
  )
}
