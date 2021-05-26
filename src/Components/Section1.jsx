// Import Requried Components
import React from 'react'
// Custom Components :
import Card from './Card'

import cardData from './CardData'

// CSS :
import '../CSS/Section1.scss'

// Main SECTION1 Component :
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
                                <Card key={ind} img={val.img} name={val.name} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Section1
