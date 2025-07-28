import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname;
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">

          <a href='/'>
            <img
              src="/images/main_logo.png"
              alt="PayHub Canada Logo"
              className="h-20 w-auto"
            />
          </a>
          <a href='/'>
            <span className="text-3xl font-bold text-white" style={{ textShadow: '0 0 12px rgb(87, 244, 250)' }}>PayHub Canada</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/services" className="hover:text-blue-400 transition">Services</a>
          <a href="/checklist" className="hover:text-blue-400 transition">Tax File Checklist</a>
          {/* <a href="/#contact" className="hover:text-blue-400 transition">Contact</a> */}
          {/* <HashLink smooth to="/#contact" className="hover:text-blue-400 transition">Contact</HashLink> */}
          {
            path === '/services' ? (
              <HashLink smooth to="#contact" className="hover:text-blue-400 transition">
                Contact
              </HashLink>
            ) : (
              <HashLink smooth to="/#contact" className="hover:text-blue-400 transition">
                Contact
              </HashLink>
            )
          }
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
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-4 text-sm font-medium text-white">
          <a href="/" className="block hover:text-blue-400 transition">Home</a>
          <a href="/services" className="block hover:text-blue-400 transition">Services</a>
          <a href="/checklist" className="block hover:text-blue-400 transition">Tax File Checklist</a>
          {
            path === '/services' ? (
              <HashLink smooth to="#contact" className="block hover:text-blue-400 transition">
                Contact
              </HashLink>
            ) : (
              <HashLink smooth to="/#contact" className="block hover:text-blue-400 transition">
                Contact
              </HashLink>
            )
          }
        </div>
      )}
    </nav>
  );
};

export default Navbar;