// App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import About from './components/About'
import ContactCTA from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductsSection from './components/Products'
import Services from './components/Services'
import Vision from './components/Vision'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <section id="home"> <Hero /> </section>
        <section id="about-us"> <About /> </section>
        <section id="services"> <Services /> </section>
        <section id="products"> <ProductsSection /> </section>
        <section id="WhyChooseUs"> <WhyChooseUs /> </section>
        <section id="Vision"> vision
          {/* <Vision /> */}
        </section>
        <section id="contact"> <ContactCTA /> </section>
      </div>
    </ThemeProvider>
  )
}

export default App;