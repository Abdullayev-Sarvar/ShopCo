import React from 'react'
import './AboutOffer.scss'

const AboutOffer = () => {
  return (
    <div className='offer'>
      <div className="container">
        <div className="offer__wrapper">
          <p className="offer__text">STAY UPTO DATE ABOUT OUR LATEST OFFERS </p>
          <div className='offer-input-container'>
            <input className='offer-input' type="email"  placeholder='Enter your email address' />
            <button className='offer-btn'>Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutOffer