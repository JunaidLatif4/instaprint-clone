import React from 'react'
import { TextField } from "@material-ui/core";


import '../CSS/Checkout.scss'

const Checkout = () => {
    return (
        <>
        <div className="main_div">
            <div className="header_div">
            <p className="header_ptag">SHOPPING INFORMATION</p> <br />
            {/* <p>Where your order will be delivered</p> */}
            </div>
            <div className="about">
                <p className="about_ptag">Shipping Details</p>\
            <div className="about_input">
                <TextField
                type="text"
                name="FName"
                label="First Name"
                variant="outlined"
                style={{ width: "50%", marginRight: "15px", marginBottom: "5px" }}
              />
                <TextField
                type="text"
                name="LName"
                label="Last Name"
                variant="outlined"
                style={{ width: "50%",marginBottom: "15px" }}
              />
              </div>
              <TextField
                type="text"
                name="ADDRESS"
                label="ADDRESS"
                variant="outlined"
                style={{ width: "100%",marginBottom: "10px" }}
              />

            </div>

        </div>
            
        </>
    )
}

export default Checkout
