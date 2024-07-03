import React from 'react'
import '../CSS/About.css'
import introNaveen from '../Images/introductionNaveen.png'

export default function About() {
  const cardWidth = {
    width:'18rem'
  }
  return (
    <div>
      <div className='container bg-dark aboutDiv'>
        <h1>Self Introduction</h1>
        <div className='container selfIntro'>
          <div className='row'>
            <div className='col'>
              <div class="card" style={cardWidth}>
                <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
            </div>
            <div className='col'>
              <h2>Naveen kumar.S</h2>
              <p>Fullstack Developer</p>
              <div>
                <img src={introNaveen} alt='naveen Introduction' width={200} className='introImage' />
              </div>
            </div>
            <div className='col'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
