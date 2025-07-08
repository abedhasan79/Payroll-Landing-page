import React from 'react';

const steps = [
  {
    step: 'Step 1',
    title: 'Send Us Employee Hours',
    description: 'Email or fax your payroll data — we support weekly, bi-weekly, semi-monthly, and monthly schedules.',
  },
  {
    step: 'Step 2',
    title: 'We Process Payroll',
    description: 'We handle deductions, direct deposits, cheques, and ensure full CRA compliance.',
  },
  {
    step: 'Step 3',
    title: 'You Get Reports & Peace of Mind',
    description: 'We send summary reports, remittance info, and generate T4s at year-end.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-6">How It Works</h2>
      <p className="max-w-2xl mx-auto text-lg mb-12">
        Getting started is easy — we’ve streamlined payroll so you don’t have to worry about the details.
      </p>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        {steps.map(({ step, title, description }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="text-sm font-medium text-gray-500 mb-1">{step}</p>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;