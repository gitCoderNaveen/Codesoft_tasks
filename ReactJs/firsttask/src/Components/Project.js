import React from 'react'
import '../CSS/Project.css'
import trackerLogo from '../Images/locationTracker.png'
import eCommerce from '../Images/ecommerce.jpg'
import rentalECommerce from '../Images/rental_Ecommerce.jpg'

export default function Project() {
  return (
    <div >
      <div className='container-fluid bg-dark projectsMainDiv'>
        <div className='headerDiv container p-3'>
          <h1>Our Projects</h1>
        </div>
        <div className='container-fluid bg-light projectContainer'>
          <div className='projectImage'>
            <img className='busProjectImg' src={trackerLogo} alt='area Tracer' />
          </div>
          <div className='busProjectText'>
            <div>
              <h1 className='projectText'>Bus Tracker</h1>
            </div>
          </div>
        </div>
        <div className='container bg-success p-3 descContainer'>
          <h1>Through this project we can track The availability of buses for the current time, then can we view the driver & conductor details, and track our bus routes where it comes from and where it is go, and what time the bus reach your current location. </h1>
        </div>
        <div className='container-fluid bg-light projectContainer'>
          <div className='projectImage'>
            <img className='ecommerceImg' src={eCommerce} alt='area Tracer' />
          </div>
          <div className='busProjectText'>
            <div>
              <h1 className='ecommerceText'>E-Commerce</h1>
            </div>
          </div>
        </div>
        <div className='container bg-success p-3 descContainer'>
          <h1>In this project we have implement the Rental based Forklift spares for sales we also implement the specification for the product and it's Prize we have also used filters based on specification & it's Rates after we have register our user Id for continue buisness with those peoples.</h1>
        </div>
        <div className='container-fluid bg-light projectContainer'>
          <div className='projectImage'>
            <img className='ecommerceImg' src={rentalECommerce} alt='area Tracer' />
          </div>
          <div className='busProjectText'>
            <div>
              <h1 className='ecommerceText'>Rental E-Commerce</h1>
            </div>
          </div>
        </div>
        <div className='container bg-success p-3 descContainer'>
          <h1>In this project provides Rental based construction equipment we track the rental time using Javascript frontend it could be ReactJs, then Backend used Mongodb to store the details for Water cans, and then the additional future is expense tracker of water can supply.</h1>
        </div>
      </div>
    </div>
  )
}
