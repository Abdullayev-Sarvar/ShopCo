import React from 'react'
import './TopCards.scss'
import Card from '../Components/cards/Card'

const TopCards = () => {
  return (
    <div className='Cards'>
      <div className="container">
        <div className="Cards-wrapper">
          <strong className="Cards-title">Top Selling</strong>
          <Card category="topSailing" />
          <div>
            <button className='Cards-btn'>View All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCards