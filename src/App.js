import {React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import CheckListPage from './pages/CheckListPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  useEffect(()=>{
    document.title = 'PayHubMB';
  });

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/checklist" element={<CheckListPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
