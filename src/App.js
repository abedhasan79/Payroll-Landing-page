import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
