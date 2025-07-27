import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const path = window.location.pathname;
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <a href='/'><h3 className="text-xl font-bold mb-2">PayHub Canada</h3></a>
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
            <li><a href="/checklist" className="hover:text-blue-400 transition">Tax File Checklist</a></li>
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
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-semibold mb-2">Let's Connect</h4>
          <p className="text-sm text-gray-400"><a href="mailto:Payhubmb@outlook.com" className="text-sm text-gray-400 mb-4 hover:underline">
            Payhubmb@outlook.com
          </a></p>
          <p className="text-sm text-gray-400 mb-4"><a href="tel:4313746695" className="text-sm text-gray-400 mb-4 hover:underline">
            (431) 374-6695
          </a></p>

          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="h-8 w-8 hover:opacity-80 transition rounded-2xl shadow-[0_0_15px_3px_rgba(0,191,255,0.7)]"
              />
            </a>

            <a href="https://www.linkedin.com/in/labib-rana-28244b293/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="h-8 w-8 hover:opacity-80 transition rounded-md shadow-[0_0_15px_3px_rgba(0,191,255,0.7)]"
              />
            </a>

            <a href="https://www.instagram.com/payhubcanada?igsh=ZXNmZm42cW96ZXhx" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram"
                className="h-8 w-8 hover:opacity-80 transition rounded-xl shadow-[0_0_15px_3px_rgba(225,48,108,0.7)]"
              />
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
                className="h-8 w-8 hover:opacity-80 transition rounded-2xl shadow-[0_0_15px_3px_rgba(37,211,102,0.7)]"
              />
            </a>

            <a
              href="https://x.com/PayHubCanada?s=09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1024px-X_logo_2023.svg.png"
                alt="WhatsApp"
                className="h-8 w-8 hover:opacity-80 transition rounded-2xl shadow-[0_0_15px_3px_rgba(157,148,153,0.8)]"
              />
            </a>
          </div>

          {/* Logos */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href='https://www.canada.ca/en/revenue-agency.html' target="_blank" rel="noopener noreferrer">
              <img
                src="/images/cra.png"
                alt="CRA Logo"
                className="h-7 object-contain"
              />
            </a>
            <a href='https://www.ranaaccounting.com/' target="_blank" rel="noopener noreferrer">
              <img
                src="/images/ranaacc.jpg" // Put your own logo in public/images/
                alt="Trusted Partner"
                className="h-12 object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PayHub Canada. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;