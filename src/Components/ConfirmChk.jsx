import React from 'react'
import img1 from './mug-113.jpg'

import './ConfirmChk.scss'

import Sdata from './Sdata'

const nCard = (val)=>{
    return(
        <div className="main_confirm">
            <h3 className = "Confirm_heading">{val.product}</h3>
            <h4 className = "Confirm_heading">{val.quantity}</h4> 
            <h3 className = "Confirm_heading">{val.image}</h3>
            <img className = "Confirm_img" src={val.imgsrc} alt="Error" />
            <p className = "Confirm_ptag">{val.color}</p>
            <h3 className = "Confirm_heading">{val.Details}</h3>
            <p className = "Confirm_ptag">{val.text}</p>
            <h3 className = "Confirm_heading">{val.price}</h3>
            
        </div>

    )

}

const ConfirmChk = () => {
    return (
        <>
        
       { Sdata.map(nCard)}

        
            
        </>
    )
}

export default ConfirmChk
