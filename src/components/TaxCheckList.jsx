import React from 'react';

const TaxChecklist = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-grey-400 to-blue-200 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Tax File Checklist</h2>
        <p className="mb-10 text-lg text-gray-700">Download the checklist you need to file your taxes easily and accurately.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="/checklists/new-client-t1.pdf"
            download
            className="bg-pink-500 text-white px-6 py-4 rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            New Client <br />(T1)
          </a>

          <a
            href="/checklists/returning-client-t1.pdf"
            download
            className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Returning Client <br />(T1)
          </a>

          <a
            href="/checklists/corporate-t2.pdf"
            download
            className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Corporate <br />(T2)
          </a>
        </div>
      </div>
    </section>
  );
};

export default TaxChecklist;