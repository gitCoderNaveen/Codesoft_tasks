import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import firstNav from '../Images/firstNav.jpg'
import secondNav from '../Images/secondNav.jpg'
import thirdNav from '../Images/thirdNav.jpg'
import '../CSS/Home.css'
import naveen from '../Images/naveen.jpg'
import html from '../Images/html.png'
import css from '../Images/css.png'
import javaScript from '../Images/javaScript.png'
import mern from '../Images/mern.png'
import greeting from '../Images/greeting.jpg'
import javaS from '../Images/Coursera JavaScript.jpg'

export default function Home() {

    const certificate1 ={
        width:'30rem',
        height:'20rem'
    }
    const progressBar1 = {
        width: '86%'
    }

    const progressBar2 = {
        width: '83%'
    }

    const progressBar3 = {
        width: '75%'
    }

    const progressBar4 = {
        width: '70%'
    }
    const cardWidth = {
        width: '18rem',
        color: 'white'
    }

    const imageSize = {
        width: '12rem',
        height: '10rem'
    }
    return (
        <div className='homeDiv'>
            <div class="d-flex justify-content-evenly mt-6 mb-3 myfirstDiv">
                <div class="p-2 mt-5 nameDiv"><h1 className='myName'>Naveen kumar.S</h1></div>
                <div className='p-2 mt-3'><img className='profileImage' src={naveen} alt='Naveen' width={200} /></div>
            </div>
            <div className='container skillDiv bg-primary p-2 shadow'>
                <div className='row'>
                    <div className='col'><h1>Skills</h1></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div class="card bg-dark" style={cardWidth}>
                            <img src={html} class="card-img-top p-2 m-5" alt="html" style={imageSize} />
                            <div class="card-body">
                                <h5 class="card-title">HTML</h5>
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={progressBar1}>86%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card bg-dark" style={cardWidth}>
                            <img src={css} class="card-img-top p-2 m-5" alt="html" style={imageSize} />
                            <div class="card-body">
                                <h5 class="card-title">CSS</h5>
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={progressBar2}>83%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card bg-dark" style={cardWidth}>
                            <img src={javaScript} class="card-img-top p-2 m-5" alt="html" style={imageSize} />
                            <div class="card-body">
                                <h5 class="card-title">JAVASCRIPT</h5>
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={progressBar3}>75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row secondRow'>
                    <div className='col'>
                        <div class="card bg-dark" style={cardWidth}>
                            <img src={mern} class="card-img-top p-2 m-5" alt="html" style={imageSize} />
                            <div class="card-body">
                                <h5 class="card-title">MERN STACK</h5>
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={progressBar4}>70%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-dark certificateContainer P-5'>
                <h1 className='mt-3'>Certifications</h1>
                <div className='row'>
                    <div className='col mt-4 certificate'>
                        <h1>JavaScript</h1>
                        <div class="card cardImage" style={certificate1}>
                            <div class="card-body">
                                
                            </div>                      
                        </div>
                    </div>
                    <div className='col mt-4 certificate'>
                    <h1>GitHub</h1>
                        <div class="card cardImage2" style={certificate1}>
                            <div class="card-body">
                                
                            </div>                        
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mt-4 mb-4 certificate'>
                    <h1>Java</h1>
                        <div class="card cardImage3" style={certificate1}>
                            <div class="card-body">
                                
                            </div>                     
                        </div>
                    </div>
                    <div className='col mt-4 mb-4 certificate'>
                    <h1>VersionControl</h1>
                        <div class="card cardImage4" style={certificate1}>
                            <div class="card-body">
                                
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
