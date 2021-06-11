// Import Requried Components
import React, { useState } from 'react'
// Material UI Carousel :
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

// CSS :
import '../CSS/Slider.scss'

// Slider IMG :
import img1 from "../img/slider1.jpg";
import img2 from "../img/slider2.jpg";
import img3 from "../img/slider3.jpg";
import img4 from "../img/slider4.jpg";


// Costom IMG Component :
const Img = (prop) => {
    return (
        <>
            <Paper className="slider_box">
                <img src={prop.src} alt="ERROR" id="img" />
            </Paper>
        </>
    )
}

// Main SLIDER Component
const Slider = () => {

    let imgArray = [
        img1,
        img2,
        img3,
        img4
    ]

    return (
        <>
            <div className="slider_container">
                <Carousel >
                    {
                        imgArray.map((item, i) => <Img key={i} src={item} />)
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Slider;
