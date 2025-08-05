import Navbar from "../Components/Navbar/Navbar"
import { Hero } from "../Components/Hero Section/hero"
import { Footer } from "../Components/Footer/footer"
import { HomeContentSection } from "../Components/Home Main Content Section/HomeContentSection"
import { AltTextSection } from "../Components/Text Section/AltTextSection"
import { CTA } from "../Components/Call to Action/CTA"

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