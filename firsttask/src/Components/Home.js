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

export default function Home() {

    const progress={
        width:'100%'
    }

    const skilsImage = {
        width: '80%',
        height: '80%'
    }

    const pBar2 = {
        width: '80%'
    }
    return (
        <div>
            <div class="d-flex justify-content-between mb-3 myfirstDiv">
                <div class="p-2 mt-5 nameDiv"><h1 className='myName'>Naveen kumar.S</h1></div>
                <img src={naveen} alt='Naveen' width={200} />
            </div>
            <div class="container skillsDiv">                
                    <img class='rounded float-start' src={html} alt='HTML' style={skilsImage} />
                    <div>                           
                    <div class="progress" style={progress}> 
                        <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style={pBar2} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>  
            </div>
            <div class="container skillsDiv">                
                    <img class='rounded float-start' src={css} alt='HTML' style={skilsImage} />
                    <div>                           
                    <div class="progress" style={progress}> 
                        <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style={pBar2} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>  
            </div>
            <div class="container skillsDiv">                
                    <img class='rounded float-start' src={javaScript} alt='HTML' style={skilsImage} />
                    <div>                           
                    <div class="progress" style={progress}> 
                        <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style={pBar2} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>  
            </div>
            <div class="container skillsDiv">                
                    <img class='rounded float-start' src={mern} alt='HTML' style={skilsImage} />
                    <div>                           
                    <div class="progress" style={progress}> 
                        <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style={pBar2} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>  
            </div>
        </div>
    )
}
