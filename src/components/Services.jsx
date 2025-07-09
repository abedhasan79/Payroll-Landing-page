import React from 'react';

const services = [
  {
    title: "Personal Tax (T1)",
    description:
      "We prepare and file personal income taxes for individuals, students, and families. Whether you’re employed, self-employed, or retired, we maximize your return and ensure CRA compliance.",
  },
  {
    title: "Corporate Tax (T2)",
    description:
      "Full T2 corporate return preparation for small to mid-sized businesses. We ensure accurate filing, apply all eligible deductions, and handle year-end financial statements.",
  },
  {
    title: "Bookkeeping & Accounting",
    description:
      "We manage your books so you can focus on your business. From monthly reconciliations to expense tracking, our services keep your finances organized and audit-ready.",
  },
  {
    title: "GST/HST & RST/PST Calculations & E-Filing",
    description:
      "We calculate and file your sales tax returns on time. Whether it’s GST/HST or provincial RST/PST, we’ll ensure accurate submissions and help you avoid costly penalties.",
  },
  {
    title: "Payroll Services",
    description:
      "We handle payroll processing, employee T4s, ROEs, CRA deductions, and more. Our flexible scheduling options ensure your team is paid accurately and on time.",
  },
  {
    title: "Accounting Software Support",
    description:
      "We provide setup and training for tools like QuickBooks, Sage, and Xero. Whether you're starting fresh or migrating systems, we ensure your software fits your workflow.",
  },
  {
    title: "Business Setup (Federal & Provincial)",
    description:
      "Starting a business? We handle registrations, CRA accounts, provincial licenses, and more for sole proprietors, partnerships, or corporations.",
  },
];

const partnerFirms = [
  { name: "Rana Accounting & Tax Services Inc.", logo: "/images/ranaacc.jpg" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6 bg-gradient-to-br ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md border-l-4 border-pink-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">A concern of Rana Accounting & Tax Services Inc.</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {partnerFirms.map(({ name, logo }) => (
            <div key={name} className="flex flex-col items-center space-y-2">
              <a href='https://www.ranaaccounting.com/'>
                <img src={logo} alt={name} className="h-50 w-80 object-contain" />
                {/* <p className="text-sm text-gray-600">{name}</p> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;