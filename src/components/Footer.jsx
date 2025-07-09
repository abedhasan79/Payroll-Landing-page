import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
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
            <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-pink-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-400">info@yourpayrollco.com</p>
          <p className="text-sm text-gray-400 mb-4">(123) 456-7890</p>

          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 hover:text-pink-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 hover:text-pink-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 hover:text-pink-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-pink-400 transition" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="h-5 w-5 hover:text-pink-400 transition"
              >
                <path d="M380.9 97.1C339-7.7 204.6-33.2 109.6 34.8c-86.4 61.3-97.2 174.6-25.4 247.4l-18.6 69.6 71.4-18.3c71.1 38.8 161.6 15.7 211.3-52.3 48.1-64.3 37.9-157.6-7.4-183.8zm-17.2 161.5c-16.6 22.3-37.5 40.1-61.1 52.1-23.4 11.8-49.4 17.9-76.6 17.9-27.3 0-53.2-6-77-17.7l-5.8-2.9-42.1 10.8 11.2-41.5-3.4-5.7c-16.5-27.8-24.8-60-23.2-92.4 1.7-32.9 13.7-63.1 34.7-86.8C176.4 71.4 219.2 64 260.2 77c33.3 10.4 60.6 33.7 77 64.6 16.3 30.7 19.5 66.8 7.3 98.6z"/>
              </svg>
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