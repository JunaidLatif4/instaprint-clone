// Import Requried Components
import React from 'react'


import '../CSS/Section4.scss';

import insta1 from '../img/1insta.jpg';
import insta2 from '../img/2insta.jpg';
import insta3 from '../img/3insta.jpg';
import insta4 from '../img/4insta.jpg';
import insta5 from '../img/5insta.jpg';
import insta6 from '../img/6insta.jpg';
import insta7 from '../img/7insta.jpg';
import insta8 from '../img/8insta.jpg';


let Insta = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8]

const InstaCard = (props) => {
    return (
        <div className="s4_card">
            <img src={props.img} alt="ERROR" />
        </div>
    )
}

const Section4 = () => {
    return (
        <div className="s4_container">
            <div className="s4_box">
                <p className="s4_box_heading">Shop Our Gram</p>
                <div className="s4_card_box">
                    {
                        Insta.map((val, ind) => {
                            return (
                                <InstaCard img={val} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Section4;
