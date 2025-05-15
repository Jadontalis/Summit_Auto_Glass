import Navbar from "../Components/Navbar/Navbar"
import { Hero } from "../Components/Hero Section/hero"
import { Footer } from "../Components/Footer/footer"
import { HomeContentSection } from "../Components/Home Main Content Section/HomeContentSection"

export function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <HomeContentSection />
   <Footer/>
   
   </>
  )
}