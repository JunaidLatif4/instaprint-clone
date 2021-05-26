// Import Requried Components
import React, { useState } from 'react'
// Material UI Icons :
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

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
            <img src={prop.src} alt="ERROR" id="img" />
        </>
    )
}

// Main SLIDER Component
const Slider = () => {

    let imgArray = [
        <Img src={img1} />,
        <Img src={img2} />,
        <Img src={img3} />,
        <Img src={img4} />
    ]
    const [x, setx] = useState(0);

    const prev = () => {
        x == 0 ? setx(-100 * (imgArray.length - 1)) : setx(x + 100);
    }
    const next = () => {
        (x == -100 * (imgArray.length - 1)) ? setx(0) : setx(x - 100);
    }

    // setInterval(next, 7000)


    return (
        <>
            <div className="slider_container">
                {
                    imgArray.map((item, index) => {
                        return (
                            <>
                                <div className="slider" key={index} style={{ transform: `translateX(${x}%)` }}>
                                    {item}
                                </div>
                            </>
                        )
                    })
                }

                <button id="prevbtn" onClick={prev}> <NavigateBeforeIcon className="navbtn"/> </button>
                <button id="nextbtn" onClick={next}> <NavigateNextIcon className="navbtn"/> </button>
            </div>

        </>
    )
}

export default Slider;
