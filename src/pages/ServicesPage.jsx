import React from 'react';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import HeroServ from '../components/HeroServ';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

function ServicesPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroServ />
      <Services />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
}

export default ServicesPage;