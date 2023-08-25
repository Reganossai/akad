import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';

export const Admission = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='ovrl'>
        <h1>Admission Form</h1>
        <h6>Start Applying for Admission </h6>
        <Menu/>
        <p>Please Fill in your personal details, Guardian/ Parent Information or Previous Education Information By clicking their respective Menu above.</p>
        </div>
    </div>
  )
}
