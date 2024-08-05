import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Close from '../../../assets/svg/x-lg.svg';
import './Offer.scss';

const Offer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; 
  }

  return (
    <div className='Offer'>
        <div className='offer-wrapper'>
            <p className='offer-text'>Sign up and get 20% off to your first order.</p>
            <Link className='sign-up-link' to="/">Sign Up Now</Link>
            <button className='close-btn' onClick={handleClose}>
              <img src={Close} alt="Close" />
            </button>
        </div>
    </div>
  );
};

export default Offer;
