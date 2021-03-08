import React from 'react'

import '../CSS/Cart.scss'

const Cart = () => {
    return (
        <div className="cart_container">
            <div className="cart_box">
            CART
            </div>
        </div>
    )
}

const HideCart = (props)=>{
    return(
        <>
            <div className="hidecart_container" onClick={props.click}>
                
            </div>
        </>
    )
}

export {Cart , HideCart};
