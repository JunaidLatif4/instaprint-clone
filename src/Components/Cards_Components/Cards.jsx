import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/Cards.scss'

const Cards = ({ data }) => {
    return (
        <NavLink to={`/product/${data.id}`}>
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
        </NavLink>
    )
}

export default Cards;
