import Navbar from "../Components/Navbar/Navbar"
import { Hero } from "../Components/HeroSection/Hero"
import { Footer } from "../Components/Footer/Footer"
import { HomeContentSection } from "../Components/HomeMainContentSection/HomeContentSection"
import { AltTextSection } from "../Components/TextSection/AltTextSection"
import { CTA } from "../Components/CallToAction/CTA"

export function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <HomeContentSection />
   <AltTextSection />
   <CTA />
   <Footer/>
   </>
  )
}