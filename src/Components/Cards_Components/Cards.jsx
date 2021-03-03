import React from 'react'

import './css/Cards.scss'

const Cards = ({ data }) => {
    return (
        <div className="cards_box">
            <div className="img_box">
                <img src={data.img} alt="Error" />
            </div>
            <div className="data">
                <div className="price">
                    {data.price}
                </div>
                <div className="dis">
                    {data.dis}
                </div>
            </div>
        </div>
    )
}

export default Cards;
