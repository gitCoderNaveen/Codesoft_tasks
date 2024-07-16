import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from '../Images/phone.jpg'
import linkedIn from '../Images/linkedIn.png'
import Instagram from '../Images/instagram.png'
import Email from '../Images/email.png'
import '../CSS/Contact.css'

export default function Contact() {
  const iconHeight = {
    width: '5rem'
  }
  return (
    <div>
      <div className='container-fluid bg-dark contactDiv'>
        <h1>Contact us</h1>
        <div className='contactDetails bg-secondary bg-gradient'>
          <div className='imageDivision'>
            <img className='imageEdit' src={phone} alt='myPhone' style={iconHeight}/>
            <h2 className='textEdit'>+919655598389</h2>
          </div>
          <div className='imageDivision'>
            <img className='imageEdit' src={linkedIn} alt='myPhone' style={iconHeight}/>
            <h2 className='textEdit'>www.linkedin.com/in/thisisnaveen24</h2>
          </div>
          <div className='imageDivision'>
            <img className='imageEdit' src={Email} alt='myPhone' style={iconHeight}/>
            <h2 className='textEdit'>naveenbsc.mca1518@gmail.com</h2>
          </div>
          <div className='imageDivision'>
            <img className='imageEdit' src={Instagram} alt='myPhone' style={iconHeight}/>
            <h2 className='textEdit'>fullstacker's Hub</h2>
          </div>
        </div>
        </div>
    </div>
  )
}