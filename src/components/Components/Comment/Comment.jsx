import React from 'react'
import './Comment.scss'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import statusSucces from '../../../assets/svg/succes.svg'
import commentStars from '../../../assets/images/CommentStars.png'
import likes from '../../../assets/svg/Likes.svg'

const Comment = () => {
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios("https://dummyjson.com/comments")
            .then(response => setComment(response.data.comments))
            .finally(() => setLoading(false));
    }, [])

    if(loading) {
        return <div className="loader"></div>
    }

  return (
    <div className='Comments-container'>
        {
            comment.slice(0, 3).map(comment => (
                <div className='Comment' key={comment.id}>
                    <img src={commentStars} alt="" />
                    <div className='comment-info'>
                        <div className='comment-user'>
                            <b className='comment-user'>{comment.user.fullName}</b>
                            <img src={statusSucces} alt="" /></div>
                        <div className='comment-likes'>
                            <button className='Likes-btn'><img className='Likes-image' src={likes} alt="" /></button>
                            <span className='Likes'>{comment.likes}</span>
                        </div>
                    </div>
                    <p className='comment-text'>{comment.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Comment