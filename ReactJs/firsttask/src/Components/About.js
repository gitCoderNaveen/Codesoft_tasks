import React from 'react'
import '../CSS/About.css'
import introNaveen from '../Images/introductionNaveen.png'

export default function About() {
  const cardWidth = {
    width: '18rem'
  }
  return (
    <div>
      <div className='container bg-dark aboutDiv'>
        <h1>Self Introduction</h1>
        <div className='container selfIntro'>
          <div className='col'>
            <h2>Naveen kumar.S</h2>
            <p>Fullstack Developer</p>
            <div>
              <img src={introNaveen} alt='naveen Introduction' width={200} className='introImage' />
            </div>
          </div>
        </div>
        <div className='container skillsDiv bg-secondary bg-gradient p-3'>
          <h1>Soft Skills</h1>
          <div className='row'>
            <div className='col'>
              <div class="card bg-dark skillsCard" style={cardWidth}>
                <div class="card-body">
                  <h3 class="card-title skillName bg-primary p-2">Project Management</h3>
                  <p class="card-text">Clearly defining project goals, deliverables, and requirements.</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div class="card bg-dark skillsCard" style={cardWidth}>
                <div class="card-body">
                  <h3 class="card-title skillName bg-primary p-2">Team<br/> Work</h3>
                  <p class="card-text">Paying attention to others' ideas and feedback without interrupting.</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div class="card bg-dark skillsCard" style={cardWidth}>
                <div class="card-body">
                  <h3 class="card-title skillName bg-primary p-2">Time Management</h3>
                  <p class="card-text">Determining which tasks are most important and tackling them first</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container internDiv bg-primary bg-gradient p-3'>
          <h1>Internships</h1>
          <div className='container internSubDiv bg-dark bg-gradient p-2'>
            <h2 className='internName'>CodSoft</h2>
            <h4 className='internDesc'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do intern as a React Developer, Have complete all the tasks and allocated project within a time period</h4>
          </div>
          <div className='container internSubDiv bg-dark bg-gradient p-2 mt-2'>
            <h2 className='internName'>KGISL</h2>
            <h4 className='internDesc'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do intern as a MERN Stack Developer, here I gain knowledge about full fledged web site deeply with the database connectivity. how to store data and how retrive the data's </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
