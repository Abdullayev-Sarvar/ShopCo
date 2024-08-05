import React from 'react'
import './Contacts.scss'
import Phone from '../../assets/svg/phono.svg'
import Email from '../../assets/svg/email.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import insta from '../../assets/svg/contact-ins.svg'
import behance from '../../assets/svg/behance.svg'

const Contacts = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3 className='contact-title'>Les't talk on something <span className='contact-span'>great</span> together</h3>
            <div className='contact-info-cont'>
              <div className="contact-cont">
                <img src={Email} alt="" />
                <p className='contact-addres'>andreaDesign@gmail.com</p>
              </div>
              <div className="contact-cont">
                <img src={Phone} alt="" />
                <p className='contact-addres'>+34 123 456 789</p>
              </div>
              <div className="contact-cont">
                <img src={Phone} alt="" />
                <p className='contact-addres'>123 Street 487 House</p>
              </div>
            </div>
            <div className='contact-social'>
              <img src={linkedin} alt="" />
              <img src={behance} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
          <div className="send-message">
            <div className='contact-buttons'>
              <p className='contact-text'>I'm interested in:</p>
              <div className='btns'>
                <button className='contact-btn'>UX/UI Design</button>
                <button className='contact-btn'>Web design</button>
                <button className='contact-btn'>Design system</button>
                <button className='contact-btn'>Graphic design</button>
                <button className='contact-btn'>Other</button>
              </div>
            </div>
            <form className='contact-form'>
              <label htmlFor="name">Your name</label>
              <input className='form-input' id='name' type="text" placeholder='John Smith'/>

              <label htmlFor="email">Your email</label>
              <input className='form-input' id='email' type="email" placeholder='email@gmail.com'/>

              <label htmlFor="message">Your message</label>
              <textarea id="message" cols="50" rows="10"></textarea>
            </form>
            <button className='contact-form-btn'>Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts