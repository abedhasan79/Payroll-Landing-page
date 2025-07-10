import React from 'react';

const craLinks = [
  {
    name: 'Tax Forms',
    url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/forms.html',
  },
  {
    name: 'Income Tax Rates',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html',
  },
  {
    name: 'EI Rates',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei.html',
  },
  {
    name: 'CPP Rates',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html',
  },
];

const otherLinks = [
  {
    name: 'CRA Daily Updates',
    url: 'https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses.html',
  },
  {
    name: 'Report a CRA Scam',
    url: 'https://www.canada.ca/en/revenue-agency/corporate/security/protect-yourself-against-fraud.html',
  },
];

const CRALinks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-grey-400 to-blue-200 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">CRA Resources & Updates</h2>
        <p className="text-lg text-gray-700 mb-10">Useful links for filing taxes and staying informed.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-grey-600 font-bold font-verdana" style={{ textShadow: '0 0 12px rgb(255, 215, 0)' }}>CRA Quick Links</h3>
            <ul className="space-y-3">
              {craLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-grey-600  font-bold font-verdana" style={{ textShadow: '0 0 12px rgb(252, 7, 7)' }}>Updates & Alerts</h3>
            <ul className="space-y-3">
              {otherLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRALinks;