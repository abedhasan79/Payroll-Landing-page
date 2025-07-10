import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Connect to form backend like EmailJS, Formspree, etc.
  };

  // const imageUrl = 'images/handsh.png'; // relative path from public folder

  return (
    <section  className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-pink-50 via-grey-400 to-blue-200" >
      {/* Left Side: Image */}
      <div className="md:w-1/2 h-auto md:h-auto bg-cover bg-center">
        <img src='images/handsh.png' alt='handshake'/>
      </div>

      {/* Right Side: Form */}
      <div id="contact" className="md:w-1/2 text-gray-900 py-20 px-6 md:px-12 flex items-center justify-center">
        <div className="w-full max-w-xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-lg mb-8 text-center">
            Ready to outsource your payroll or have a few questions or want to get a Quote about a service? Send us a message and we'll get back to you shortly.
          </p>

          {submitted ? (
            <p className="text-green-600 text-lg font-medium text-center">Thanks! We'll contact you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full border border-gray-300 rounded p-3"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@business.com"
                  className="w-full border border-gray-300 rounded p-3"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full border border-gray-300 rounded p-3"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Business Name</label>
                <input
                  type="text"
                  placeholder="ABC Corp"
                  className="w-full border border-gray-300 rounded p-3"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Number of employees</label>
                <input
                  type="number"
                  placeholder=""
                  className="w-full border border-gray-300 rounded p-3"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">How can we help?</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Tell us a bit about your payroll needs..."
                  className="w-full border border-gray-300 rounded p-3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-400 text-white font-semibold py-3 px-6 rounded hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;