import About from './components/About'
import ContactCTA from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductsCarousel from './components/Products'
import Services from './components/Services'
import TrustBar from './components/TrustBar'
import Vision from './components/Vision'
import WhyChooseUs from './components/WhyUs'

function App() {
  return (
    <div
      className="bg-dark min-h-screen"
    >
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <ProductsCarousel />
      <WhyChooseUs />
      <Vision />
      <ContactCTA />
    </div>
  )
}

export default App