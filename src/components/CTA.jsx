import React from 'react';

const CTA = () => {
  const imageUrl = '/payroll.jpg'; // relative path from public folder

  return (
    <section
      className="relative py-20 px-6 text-white text-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Simplify Your Payroll?
        </h2>
        <p className="text-lg mb-6">
          Let us handle the details accurate, secure, and on time. Book a free consultation today.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-500 font-semibold py-3 px-6 rounded shadow hover:bg-blue-100 transition"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CTA;