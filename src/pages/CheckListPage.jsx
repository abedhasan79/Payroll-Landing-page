import React from 'react';
import TaxChecklist from '../components/TaxCheckList';
import CRALinks from '../components/CraLinks';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

function CheckListPage() {
  return (
    <div className='from-blue-50 via-grey-400 to-blue-200'>
      {/* <Navbar /> */}
      <TaxChecklist/>
      <CRALinks />
      {/* <Footer /> */}
    </div>
  );
}

export default CheckListPage;