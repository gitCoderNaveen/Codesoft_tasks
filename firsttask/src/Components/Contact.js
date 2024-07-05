import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from '../Images/phone.jpg'
import linkedIn from '../Images/linkedIn.png'
import Instagram from '../Images/instagram.png'
import Email from '../Images/email.png'
import '../CSS/Contact.css'

export default function Contact() {
  const iconHeight = {
    width: '50px',
  }
  return (
    <div>
      <div className='container-fluid bg-dark contactDiv'>
        <h1>Contact us</h1>
        <div className='container bg-secondary bg-gradient contactSubDiv'>
          <div className='row'>
            <div className='col'>
              <img src={phone} className='image' alt='phoneIcon' style={iconHeight} />
            </div>
            <div className='col'>
              <h2 className='text'>+919655698389</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src={Email} className='image' alt='phoneIcon' style={iconHeight} />
            </div>
            <div className='col'>
              <h2 className='text'>naveenbsc.mca1518@gmail.com</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <img src={linkedIn} className='image' alt='phoneIcon' style={iconHeight} />
            </div>
            <div className='col'>
              <h2 className='text'>www.linkedin.com/in/thisisnaveen24</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col instaCol'>
              <img src={Instagram} className='image' alt='phoneIcon' style={iconHeight} />
            </div>
            <div className='col'>
              <h2 className='text'>fullstacker's Hub</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}