import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/Cards.scss'

const Cards = ({ data }) => {
    return (
        <div className="cards_box">
            <NavLink to={`/product/${data.id}`}>
            <div className="img_box">
                <img src={data.img} alt="Error" />
            </div>
            <div className="data">
                <div className="price">
                   <b>Starting From PKR</b> {data.price}.00
                </div>
                <div className="title">
                    {data.title}
                </div>
                <div className="dis">
                    {data.dis}
                </div>
            </div>
        </NavLink>
        </div>
    )
}

export default Cards;
