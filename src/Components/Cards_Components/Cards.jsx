import React from 'react'
import { NavLink } from 'react-router-dom'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Button} from "@material-ui/core"

import { useSelector, useDispatch } from 'react-redux'
import {add} from '../../GlobalStates/actions/index';


import './css/Cards.scss'

const Cards = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <div className="cards_box">
            <Button className="addtocart" onClick={ ()=> dispatch(add(data)) }>
                <AddShoppingCartIcon style={{color:"white"}}/>
            </Button>
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
