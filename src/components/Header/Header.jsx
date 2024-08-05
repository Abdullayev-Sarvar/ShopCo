import React from 'react'
import './Header.scss'
import Logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom'
import Cart from '../../assets/svg/cart.svg'
import Profile from '../../assets/svg/profile.svg'
import ArrowBottom from '../../assets/svg/Arrow-bottom.svg'

const Header = () => {
  return (
    <div className='Header'>
        <div className="container">
            <div className="header-wrapper">
                <div className='logo'>
                    <Link to='/'><img src={Logo} alt="logo" /></Link>
                </div>
                <ul className='nav-list'>
                    <li className='nav-items'>Shop <img src={ArrowBottom} className="arrow" alt="" /></li>
                    <li className='nav-items'>On Sale</li>
                    <li className='nav-items'>New Arrivals</li>
                    <li className='nav-items'><Link className='nav-link' to='/contact'>Contact</Link></li>
                </ul>
                <div className='nav-search'>
                    <input className='input-search' type="text" maxLength={50} placeholder='Search for products...'/>
                </div>
                <div className='nav-icons'>
                    <button className='nav-btn'><img src={Cart} alt="" /></button>
                    <button className='nav-btn'><img src={Profile} alt="" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header