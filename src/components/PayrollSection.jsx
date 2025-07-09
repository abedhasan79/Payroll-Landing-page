import React from 'react';
import { UserPlus, Calendar, FileText, Send, Banknote, Receipt } from 'lucide-react';

const features = [
  {
    title: 'Employee Setup',
    icon: <UserPlus className="h-6 w-6 text-pink-500" />,
    description: 'We onboard employees into our system for accurate records and T4 reporting.',
  },
  {
    title: 'Send Hours Easily',
    icon: <Send className="h-6 w-6 text-purple-500" />,
    description: 'Submit hours by email or fax weekly, bi-weekly, semi-monthly, or monthly.',
  },
  {
    title: 'Flexible Payouts',
    icon: <Banknote className="h-6 w-6 text-indigo-500" />,
    description: 'We prepare paystubs and email them to you directly you choose how to pay your employees, whether by e-transfer, cheque, or directly through your business bank.',
  },
  {
    title: 'ROE Support',
    icon: <FileText className="h-6 w-6 text-pink-400" />,
    description: 'We generate Record of Employment documents when employees leave.',
  },
  {
    title: 'CRA Deduction Reports',
    icon: <Receipt className="h-6 w-6 text-purple-400" />,
    description: 'Monthly deduction summaries and deadlines to avoid late penalties.',
  },
  {
    title: 'Year-End T4s',
    icon: <Calendar className="h-6 w-6 text-indigo-400" />,
    description: 'We handle full T4 generation and filing at year-end for peace of mind.',
  },
];

const PayrollSection = () => {
  return (
    <section id="payroll" className="bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 bg-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 font-verdana">Payroll Services</h2>
        <p className="text-gray-600 mb-10">
          We manage your entire payroll process from setting up employees to issuing pay,
          filing deductions, and generating year-end T4s. You send us the hours, we do the rest.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {features.map(({ title, icon, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PayrollSection;