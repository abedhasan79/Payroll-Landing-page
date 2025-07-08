import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Connect to form backend like EmailJS, Formspree, etc.
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="max-w-xl mx-auto text-lg mb-8">
        Ready to outsource your payroll or have a few questions? Send us a message and we'll get back to you shortly.
      </p>

      {submitted ? (
        <p className="text-green-600 text-lg font-medium">Thanks! We'll contact you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-5">
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
            <label className="block mb-1 font-medium">Phone Number (Optional)</label>
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
            className="bg-pink-600 text-white font-semibold py-3 px-6 rounded hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;