import React from 'react'
import './footerNav.scss'
import logo from '../../../assets/svg/logo.svg'
import twitter from '../../../assets/svg/twitter.svg'
import facebook from '../../../assets/svg/facebook.svg'
import instagram from '../../../assets/svg/instagram.svg'
import github from '../../../assets/svg/github.svg'
import { Link } from 'react-router-dom'

const footerNav = () => {
  return (
    <div className='footer-container'>
        <div className="footerNav">
            <div className='footerNav-info'>
                <img src={logo} alt="" />
                <p className='footerNav-info__text text-padding'>We have clothes that suits your style and which you're proud to wear. 
                    From women to men.
                </p>
                <div className='footerNav-info__icons'>
                    <Link className='icons-link' to='/'><img src={twitter} alt="" /></Link>
                    <Link className='icons-link' to='/'><img src={facebook} alt="" /></Link>
                    <Link className='icons-link' to='/'><img src={instagram} alt="" /></Link>
                    <Link className='icons-link' to='/'><img src={github} alt="" /></Link>
                </div>
            </div>
            <ul className='Footer-list'>
                <b>COMPANY</b>
                <li className='Footer-items'>About</li>
                <li className='Footer-items'>Features</li>
                <li className='Footer-items'>Works</li>
                <li className='Footer-items'>Career</li>
            </ul>
            <ul className='Footer-list'>
                <b>HELP</b>
                <li className='Footer-items'>Customer Support</li>
                <li className='Footer-items'>Delivery Details</li>
                <li className='Footer-items'>Terms & Conditions</li>
                <li className='Footer-items'>Privasy Policy</li>
            </ul>
            <ul className='Footer-list'>
                <b>FAQ</b>
                <li className='Footer-items'>Account</li>
                <li className='Footer-items'>Manage Deliveries</li>
                <li className='Footer-items'>Orders</li>
                <li className='Footer-items'>Payments</li>
            </ul>
            <ul className='Footer-list'>
                <b>RESOURCES</b>
                <li className='Footer-items'>Free eBooks</li>
                <li className='Footer-items'>Delevopment Tutoriel</li>
                <li className='Footer-items'>How to - Blog</li>
                <li className='Footer-items'>Youtube Playlist</li>
            </ul>
        </div>
    </div>
  )
}

export default footerNav