import React from 'react'
import './brands.scss'
import BrandsLogo from './Brands-logo/Logo'

const Brands = () => {
  return (
    <div className='Brands'>
        <div className="container">
            <div className="brands-wrapper">
                <BrandsLogo />
            </div>
        </div>
    </div>
  )
}

export default Brands