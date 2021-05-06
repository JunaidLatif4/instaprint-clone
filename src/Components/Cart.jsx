import React from 'react'

import '../CSS/Cart.scss'

const Cart = () => {
    return (
        <div className="cart_container">
            <div className="cart_box">
                <h2>SHOPING CART </h2> <hr />
                <div className="checkout">
                    <hr />
                    <div className="total">
                        <p>Subtotal</p>
                        <p className="amount">555</p>
                    </div>
                    <div className="checkout_btn">
                        <button className="btn">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HideCart = (props) => {
    return (
        <>
            <div className="hidecart_container" onClick={props.click}>

            </div>
        </>
    )
}

export { Cart, HideCart };
