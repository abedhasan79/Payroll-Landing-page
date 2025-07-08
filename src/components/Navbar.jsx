import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="PayHubMb Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-white">PayHubMb</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <a href="#" className="hover:text-pink-400 transition">Home</a>
          <a href="#services" className="hover:text-pink-400 transition">Services</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-3 text-sm font-medium text-white">
          <a href="#" className="block hover:text-pink-400 transition">Home</a>
          <a href="#services" className="block hover:text-pink-400 transition">Services</a>
          <a href="#contact" className="block hover:text-pink-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;