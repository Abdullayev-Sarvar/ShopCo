import React from 'react'
import '../brands.scss'
import Versace from '../../../assets/svg/Versace.svg'
import Zara from '../../../assets/svg/Zara.svg'
import Gucci from '../../../assets/svg/Gucci.svg'
import Prada from '../../../assets/svg/Prada.svg'
import CelvinClien from '../../../assets/svg/Celvin.svg'

const Logo = () => {
  return (
    <div className='logos'>
        <img src={Versace} alt="" />
        <img src={Zara} alt="" />
        <img src={Gucci} alt="" />
        <img src={Prada} alt="" />
        <img src={CelvinClien} alt="" />
    </div>
  )
}

export default Logo