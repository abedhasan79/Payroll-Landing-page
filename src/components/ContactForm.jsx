import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l3mg6zr', // Replace with your service ID
      'template_ezmc6w2', // Replace with your template ID
      form.current,
      'yKrQdY5O2joQNkEn4'   // Replace with your public key
    )
    .then(() => {
      setSubmitted(true);
    }, (error) => {
      console.error('FAILED...', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-pink-50 via-grey-400 to-blue-200">
      {/* Left Side: Image */}
      <div className="md:w-1/2 h-auto bg-cover bg-center">
        <img src="images/handsh.png" alt="handshake" />
      </div>

      {/* Right Side: Form */}
      <div id="contact" className="md:w-1/2 text-gray-900 py-20 px-6 md:px-12 flex items-center justify-center">
        <div className="w-full max-w-xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-lg mb-8 text-center">
            Ready to outsource your payroll or want a quote? Send us a message and we'll reply shortly.
          </p>

          {submitted ? (
            <p className="text-green-600 text-lg font-medium text-center">Thanks! We'll contact you soon.</p>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input name="from_name" type="text" required placeholder="Your Name" className="w-full border border-gray-300 rounded p-3" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input name="from_email" type="email" required placeholder="you@business.com" className="w-full border border-gray-300 rounded p-3" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input name="phone" type="tel" placeholder="ex: (123) 456-7890" className="w-full border border-gray-300 rounded p-3" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Business Name</label>
                <input name="business" type="text" required placeholder="ex: ABC Corp" className="w-full border border-gray-300 rounded p-3" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Number of Employees</label>
                <input name="employees" type="number" className="w-full border border-gray-300 rounded p-3" />
              </div>
              <div>
                <label className="block mb-1 font-medium">How can we help?</label>
                <textarea name="message" required rows="4" placeholder="Tell us a bit about your payroll or other Service needs..." className="w-full border border-gray-300 rounded p-3"></textarea>
              </div>
              <button type="submit" className="bg-blue-400 text-white font-semibold py-3 px-6 rounded hover:bg-blue-800 transition">
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