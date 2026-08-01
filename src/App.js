import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cards from './components/Cards';
import Button from './components/Button';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Services />
      <Cards />
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <Button />
      </div>
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;