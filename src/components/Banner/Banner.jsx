import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'
import BannerImg from '../../assets/images/banner.jpg'
import frontalLine from '../../assets/svg/frontalLine.svg'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="container">
          <div className="banner-wrapper">
            <div className='banner-info'>
              <h2 className='banner-title'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
              <p className='banner-text'>Browse through our diverse range of meticulously crafted garments,
                 designed to bring out your individuality and cater to your sense of style.
              </p>
              <button className='banner-btn'>Shop Now</button>
              <div className='banner-stats'>
                <div className='stats'>
                  <b className='stats-buys'>200+</b>
                  <span className='buy-names'>International Brands</span>
                </div>
                <img src={frontalLine} alt="" />
                <div className='stats'>
                  <b className='stats-buys'>2,000+</b>
                  <span className='buy-names'>High-Quality Products</span>
                </div>
                <img src={frontalLine} alt="" />
                <div className='stats'>
                  <b className='stats-buys'>30,000+</b>
                  <span className='buy-names'>Happy Customers</span>
                </div>
              </div>
            </div>
            <img className='banner-img' src={BannerImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Banner