// Import Requried Components
import React, { useState } from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import c1 from '../img/1c.png';
import c2 from '../img/2c.png';
import c3 from '../img/3c.png';
import c4 from '../img/4c.png';
import c5 from '../img/5c.png';
import c6 from '../img/6c.png';

import '../CSS/Section3.scss'

const Section3 = () => {

    let clients = [c1, c2, c3, c4, c5, c6]

    const [x, setx] = useState(0);

    const prev = () => {
        x == 0 ? setx(-100 * (clients.length - 1)) : setx(x + 100);
    }
    const next = () => {
        (x == -100 * (clients.length - 1)) ? setx(0) : setx(x - 100);
    }


    return (
        <div className="s3_container">
            <div className="s3_box">
                <div className="s3_heading">
                    <p className="s3_left_line"> <hr /> </p>
                    <p className="s3_heading_content">Clients</p>
                    <p className="s3_right_line"> <hr /> </p>
                </div>
                <div className="client_slider_container">
                    {
                        clients.map((item, index) => {
                            return (
                                <>
                                    <div className="client_slider" key={index} style={{ transform: `translateX(${x}%)` }}>
                                        <img src={item} alt="ERROR" />
                                    </div>
                                </>
                            )
                        })
                    }

                    <button id="prevbtn" onClick={prev}> <NavigateBeforeIcon className="navbtn" style={{ fontSize: 40 }}/> </button>
                    <button id="nextbtn" onClick={next}> <NavigateNextIcon className="navbtn" style={{ fontSize: 40 }}/> </button>
                </div>
                <p className="s3_down_line"> <hr /> </p>
            </div>

        </div>
    )
}

export default Section3;
