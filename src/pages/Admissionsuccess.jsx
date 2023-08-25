import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export const AdmissionSuccess = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='ovrl'>
        <h1>Admission Form</h1>
        <h6>Thanks for Applying for admission. Your details has been received will soon be reviewed</h6>
        </div>
    </div>
  )
}

