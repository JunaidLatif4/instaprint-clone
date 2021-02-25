// Import Requried Components
import React from 'react'

import img1 from '../img/1title.jpg'
import img2 from '../img/2title.jpg'

import '../CSS/Section2.scss'

const Section2 = () => {
    return (
        <div className="s2_container">
            <div className="s2_box">
                <div className="s2_card_box">
                    <a href="/" className="s2_card">
                        <img src={img1} alt="ERROR"/>
                    </a>
                    <a href="/" className="s2_card">
                        <img src={img2} alt="ERROR"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Section2;
