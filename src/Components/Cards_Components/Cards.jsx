import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/Cards.scss'

const Cards = ({ data }) => {
    return (
        <div className="cards_box">
            <div className="addtocart">
            <button>Add to Cart</button>
            </div>
            <NavLink to={`/product/${data.id}`}>
                <div className="img_box">

                    <img src={data.img} alt="Error" />
                </div>

                <div className="data">
                    <div className="title">
                        {data.title}
                    </div>
                    <div className="price">
                        {data.price}
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
