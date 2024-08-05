import React from 'react'
import Card from '../Components/cards/Card'
import './NewCards.scss'

const NewCards = () => {
  return (
    <div className='Cards'>
      <div className="container">
        <div className='Cards-wrapper'>
          <strong className='Cards-title'>New Arrivals</strong>
          <Card category="newArrivals" />
          <div>
            <button className='Cards-btn'>View All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCards