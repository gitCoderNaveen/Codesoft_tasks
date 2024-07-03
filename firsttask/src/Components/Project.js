import React from 'react'
import '../CSS/Project.css'
import trackerLogo from '../Images/locationTracker.png'
export default function Project() {
  return (
    <div >
      <div className='container-fluid bg-dark projectsMainDiv'>
        <div className='headerDiv bg-success container p-3'>
          <h1>Our Projects</h1>
        </div>
        <div className='container-fluid bg-light projectContainer'>
          <div className='row'>
            <div className='col'>
              <img className='busProjectImg' src={trackerLogo} alt='area Tracer'/>
            </div>
            <div className='col busProjectText'>
              <h1>Bus Tracker</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
