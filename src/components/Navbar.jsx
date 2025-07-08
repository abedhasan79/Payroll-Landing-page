import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="PayHubMb Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-white">PayHubMb</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm md:text-base font-medium">
          <a href="#" className="hover:text-pink-400 transition">Home</a>
          <a href="#Services" className="hover:text-pink-400 transition">Services</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;