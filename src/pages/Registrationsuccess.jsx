import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes.constants';

export const Registrationsuccess = () => {
  return (
    <div className="register-div">
    <div className="bg"></div>
    <div className="bgg">
        <p className='reg-succ-p'>You have successfully Created an account</p>
        <p className='reg-succ-p'><Link to={ROUTES.LOGIN}>You can now sign into your account</Link></p>
        </div>    
    </div>
  )
}
