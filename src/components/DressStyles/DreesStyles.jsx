import React from 'react'
import './DressStyles.scss'
import { Link } from 'react-router-dom'
import Casual from '../../assets/images/StyleCasual.png'
import Formal from '../../assets/images/StyleFormal.png'
import Party from '../../assets/images/StyleParty.png'
import GYM from '../../assets/images/StyleGYM.png'

const DreesStyles = () => {
  return (
    <div>
      <div className="container">
        <div className="DressStyles-wrapper">
            <h2 className="DressStyles-title">BROWSE BY DRESS STYLE</h2>
            <div className='Styles'>
              <Link className='DressStyles-btn' to="/"><img src={Casual} alt="" /></Link>
              <Link className='DressStyles-btn' to='/'><img src={Formal} alt="" /></Link>
              <Link className='DressStyles-btn' to='/'><img src={Party} alt="" /></Link>
              <Link className='DressStyles-btn' to='/'><img src={GYM} alt="" /></Link>
            </div>
        </div>    
      </div>
    </div>
  )
}

export default DreesStyles