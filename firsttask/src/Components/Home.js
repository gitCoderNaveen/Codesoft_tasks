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

    const textStyle = {
        width: '25%'
    }
    return (
        <div>
            <div class="container" height={300}>
                <h1 class="float-start">Naveen kumar.S</h1>
                <img src={naveen} class="rounded float-end" alt="myImage" width={200} />
            </div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src={html} alt='HTML' style={textStyle} />
                    </div>
                    <div clss="col">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example" style={textStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <img src={html} alt='HTML' style={textStyle} />
                    </div>
                    <div clss="col">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Basic example" style={textStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style={textStyle}></div>
                </div>
            </div>
        </div>
    )
}
