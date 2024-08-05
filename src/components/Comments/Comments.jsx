import React from 'react'
import './Comments.scss'
import Comment from '../Components/Comment/Comment'

const Comments = () => {
  return (
    <div className='Comments'>
        <div className="container">
            <div className="Comments-wrapper">
                <strong className='Comments-title'>OUR HAPPY CUSTOMERS</strong>
                <Comment />
            </div>
        </div>
    </div>
  )
}

export default Comments