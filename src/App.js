import React from 'react';
import Hero from './components/Hero';
import PayrollSection from './components/PayrollSection';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Badges from './components/Badges';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PayrollSection />
      <Benefits />
      <Badges />
      <HowItWorks />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
