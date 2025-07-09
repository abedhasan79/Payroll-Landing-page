import React from 'react';
import {
  Facebook,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-2">PayHubMb</h3>
          <p className="text-sm text-gray-400">
            Helping Canadian businesses simplify payroll and stay CRA compliant.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-400">Payhubmb@outlook.com</p>
          <p className="text-sm text-gray-400 mb-4">(431) 374-6695</p>

          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 hover:text-pink-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/labib-rana-28244b293/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-pink-400 transition" />
            </a>
            <a
              href="https://wa.me/message/X4RIHSSRDWFCH1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-6 w-6 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PayHubMb All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;