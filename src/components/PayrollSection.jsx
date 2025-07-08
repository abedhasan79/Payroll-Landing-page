import React from 'react';

const PayrollSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-6">Our Payroll Solution</h2>
      <p className="max-w-2xl mx-auto text-lg mb-10">
        From new hire setup to T4 filing, we handle every part of your payroll. You simply send us your employees’ hours — we take care of the rest.
        Choose direct deposit or manual cheque processing, and we’ll ensure all records, remittances, and compliance tasks are handled on time.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">✔ Payroll Processing</h3>
          <p className="text-sm">
            Submit hours via email or fax — we’ll run payroll weekly, bi-weekly, semi-monthly, or monthly, based on your schedule.
            Choose to print cheques yourself or let us handle it.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">✔ Direct Deposit & ROEs</h3>
          <p className="text-sm">
            We offer secure direct deposit to employee accounts and provide Record of Employment (ROE) forms for terminated staff.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">✔ Source Deductions & Year-End Filing</h3>
          <p className="text-sm">
            Every month, we notify you of payroll deductions owed and their due dates to help you avoid penalties. At year-end, we generate and file all T4s.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PayrollSection;