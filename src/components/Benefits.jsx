import React from 'react';
import {
  ShieldCheck,
  DollarSign,
  CalendarCheck,
  Banknote,
  Timer,
  BadgeCheck,
} from 'lucide-react';

const benefits = [
  {
    title: 'CRA Compliance',
    icon: <ShieldCheck className="h-8 w-8 text-pink-500" />,
    description: 'Avoid penalties by ensuring timely remittance of payroll source deductions.',
  },
  {
    title: 'Accurate Payments',
    icon: <DollarSign className="h-8 w-8 text-purple-500" />,
    description: 'We process all employee payments with guaranteed accuracy and clarity.',
  },
  {
    title: 'Flexible Scheduling',
    icon: <CalendarCheck className="h-8 w-8 text-indigo-500" />,
    description: 'Choose weekly, bi-weekly, Semi-monthly or monthly schedules based on your needs.',
  },
  {
    title: 'Direct Deposit by employer',
    icon: <Banknote className="h-8 w-8 text-pink-400" />,
    description: 'Based on our pay stubs, the employer might make the direct deposit to employees.',
  },
  {
    title: 'Time Saved',
    icon: <Timer className="h-8 w-8 text-purple-400" />,
    description: 'No more spreadsheets we handle everything so you can focus on business.',
  },
  {
    title: 'Peace of Mind',
    icon: <BadgeCheck className="h-8 w-8 text-indigo-400" />,
    description: 'We handle year-end T4s, ROEs, and CRA forms with expert care.',
  },
];

const imageUrl = 'images/cadflg.jpg'; // relative path from public folder

const Benefits = () => {
  return (
    <section className="bg-gradient-to-br  py-16 px-6 text-center" style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h2 className="text-4xl font-bold text-gray-50 mb-10">Why Choose PayHubMb</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;