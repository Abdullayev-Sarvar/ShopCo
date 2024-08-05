import React from 'react'
import './Footer.scss'
import AboutOffer from './AboutOffer/AboutOffer'
import FooterNav from './footerNav/footerNav'
import line from '../../assets/svg/Cards-line.svg'
import { Link } from 'react-router-dom'
import Visa from '../../assets/images/Visa.png'
import MasterCard from '../../assets/images/MasterCard.png'
import PayPal from '../../assets/images/PayPal.png'
import ApplePay from '../../assets/images/ApplePay.png'
import GooglePay from '../../assets/images/GooglePay.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="Footer-wrapper">
                <AboutOffer />
                <FooterNav />
                <img src={line} alt="" />
                <div className='footer-buy__cards'>
                    <p className='footerNav-info__text'>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div>
                        <Link to='/'><img src={Visa} alt="" /></Link>
                        <Link to='/'><img src={MasterCard} alt="" /></Link>
                        <Link to='/'><img src={PayPal} alt="" /></Link>
                        <Link to='/'><img src={ApplePay} alt="" /></Link>
                        <Link to='/'><img src={GooglePay} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer