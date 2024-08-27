import CaseStudy from "./components/CaseStudy"
import Contact from "./components/Contact"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LogoCarousel from "./components/LogoCarousel"
import Navbar from "./components/navbar/navbar"
import Services from "./components/Services"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials"
import WorkingProcess from "./components/WorkingProcess"

function App() {

  return (
    <>
    <main className="font-primary">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Services />
      <CTA />
      <CaseStudy />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App
