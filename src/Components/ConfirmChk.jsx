import React from 'react'

import { useSelector, useDispatch } from 'react-redux'


import '../CSS/ConfirmChk.scss'


const NCard = ({data}) => {
    console.log("Data =============", data)
    return (
        <div className="main_confirm">
            <h3 className="Confirm_heading">{data.title}</h3>
            <h4 className = "Confirm_heading">{data.qty}</h4> 
            {/* <h3 className = "Confirm_heading">{val.image}</h3> */}
            <img className = "Confirm_img" src={data.img} alt="Error" />
            {/* <p className = "Confirm_ptag">{val.color}</p> */}
            <h3 className = "Confirm_heading">{data.detail}</h3>
            {/* <p className = "Confirm_ptag">{val.text}</p> */}
            <h3 className="Confirm_heading">{data.price}</h3>

        </div>

    )

}

const ConfirmChk = () => {
    var cartItems = useSelector((state) => state?.addToCart)
    console.log("AT CFM CHECKOUT =========", cartItems)

    return (
        <>

            {
                cartItems.map((item, idex) => (
                    <NCard data={item} key={idex} />
                ))
            }



        </>
    )
}

export default ConfirmChk
