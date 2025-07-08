import React from 'react';

const benefits = [
  {
    title: 'CRA Compliance',
    description: 'We stay up-to-date with the latest regulations and ensure your payroll meets all federal and provincial requirements.',
  },
  {
    title: 'Direct Support',
    description: 'Get personalized, responsive support — no call centers or chatbots. We’re real people who know your business.',
  },
  {
    title: 'Accurate & On Time',
    description: 'Pay runs are processed accurately and delivered on schedule, helping you avoid penalties and employee frustration.',
  },
  {
    title: 'Secure Data Handling',
    description: 'Your sensitive payroll data is handled with strict confidentiality and stored securely.',
  },
  {
    title: 'Simple & Flexible',
    description: 'Just send us your hours — we’ll take care of everything else, including cheques or direct deposit.',
  },
  {
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise charges or unnecessary upsells.',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
      <p className="max-w-2xl mx-auto text-lg mb-12">
        We take care of your payroll so you can take care of your business. Here's what makes us stand out.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        {benefits.map(({ title, description }) => (
          <div key={title} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;