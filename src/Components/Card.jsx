// Import Requried Components
import React from 'react'



const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="ERROR"/>
            <p className="card_name">{props.name}</p>
        </div>
    )
}

export default Card;
