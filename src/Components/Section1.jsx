// Import Requried Components
import React from 'react'

import Card from './Card'

import cardData from './CardData'


import '../CSS/Section1.scss'

const Section1 = () => {
    return (
        <div className="s1_container">
            <div className="s1_box">
                <p className="s1_box_heading">
                    BEST SELLER
                </p>
                <div className="s1_card_box">
                    {
                        cardData.map((val, ind) => {
                            return (
                                <Card img={val.img} name={val.name} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Section1
