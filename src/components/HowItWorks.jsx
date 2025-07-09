import React from 'react';
import { ClipboardList, MailCheck, Banknote } from 'lucide-react';

const steps = [
  {
    title: 'Send Your Hours',
    icon: <ClipboardList className="h-8 w-8 text-pink-500" />,
    description: 'Email us the hours for your employees weekly, bi-weekly, or monthly.',
  },
  {
    title: 'We Process Payroll',
    icon: <MailCheck className="h-8 w-8 text-purple-500" />,
    description: 'We calculate wages, source deductions, and prepare paystubs.',
  },
  {
    title: 'Ensuring Full Compliance',
    icon: <Banknote className="h-8 w-8 text-indigo-500" />,
    description: 'We prepare and submit all required reports, Records of Employment (ROEs), and source deduction filings to ensure your business remains fully compliant with CRA regulations and deadlines.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-16 px-6  text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">How Payroll Works</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;