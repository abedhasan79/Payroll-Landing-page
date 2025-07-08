import React from 'react';

const services = [
  { title: 'Personal Tax (T1)', description: 'Fast and accurate filing for individual tax returns with expert guidance.' },
  { title: 'Corporate Tax (T2)', description: 'Ensure your business stays compliant and tax-efficient with our corporate filing service.' },
  { title: 'Bookkeeping & Accounting', description: 'Professional bookkeeping and financial record management tailored to your business.' },
  { title: 'GST/HST & RST/PST E-Filing', description: 'We calculate and e-file all federal and provincial sales taxes on your behalf.' },
  { title: 'Payroll Services', description: 'Seamless payroll processing, CRA remittance, and T4/T5 slip generation.' },
  { title: 'Accounting Software Setup', description: 'Expert setup and support for QuickBooks, Sage, Xero, and other platforms.' },
  { title: 'Business Setup (Federal & Provincial)', description: 'Get your business registered and compliant across all jurisdictions in Canada.' },
];

const Services = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map(({ title, description }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;