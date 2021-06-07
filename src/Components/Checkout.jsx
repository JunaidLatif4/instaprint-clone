import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


import "../CSS/Checkout.scss";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Fullscreen } from "@material-ui/icons";





const Style = makeStyles({
  btn: {
    margin: "0.5rem 0",
    width: "100%",
    background: "red",
    height: "3rem",
    color: "#fff",
    position: "relative",

    float: "right",
    "&:hover": {
      color: "red",
      transition: ".5s ease-in-out",
    },
  },
});


const Checkout = () => {
  const classes = Style();

  const [FullName, useFullName] = useState({
    checkedA: false,
    checkedB: false,
    FName: ""

  });

  const InputEvent = (event) => {
    // useFullName({ [event.target.name]: event.target.checked });

    const { value, name , checked } = event.target;

    useFullName((pValue) => {
      return {
        ...pValue,
        [name]: value,
      }
    })
 

    console.log("Your First Name is =", event.target.name)
  };

  const CheckedInputEvent = (event) =>{

    const { name , checked} = event.target;

    useFullName((pValue) => {
      return {
        ...pValue,
        [name]: checked,
      }
    })

  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("your first name is =" , FullName.FName)
    console.log("Checked ==========" , FullName.checkedA)
    alert("Form Submitted")
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="Checkout_full_div">
          <div className="Checkout_main_div">
            <div className="header_div">
              <p className="header_ptag">SHOPPING INFORMATION</p>
              <br />
              <p className="header_ptag2">Where your order will be delivered</p>
            </div>
            <div className="about">
              <p className="about_ptag">Shipping Details</p>\
            <div className="about_input">
                <TextField
                  type="text"
                  name="FName"
                  label="First Name"
                  variant="outlined"
                  onChange={InputEvent}
                  value={FullName.FName}
                  style={{ width: "100%", marginRight: "15px", marginBottom: "10px" }}
                />
                <TextField
                  type="text"
                  name="LName"
                  label="Last Name"
                  variant="outlined"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <TextField
                  type="text"
                  name="ADDRESS"
                  label="ADDRESS"
                  variant="outlined"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <TextField
                  type="text"
                  name="COUNTRY"
                  label="COUNTRY"
                  variant="outlined"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <TextField
                  type="text"
                  name="STATE"
                  label="STATE/PROVINCE"
                  variant="outlined"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <TextField
                  type="text"
                  name="CITY"
                  label="CITY"
                  variant="outlined"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <TextField
                  type="number"
                  name="POSTAL CODE"
                  label="POSTAL CODE"
                  variant="outlined"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <TextField
                  type="number"
                  name="MOBILE NUMBER"
                  label="MOBILE NUMBER"
                  variant="outlined"
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </div>
            </div>
            <h3>Payment Mehtod</h3>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={FullName.checkedB}
                  onChange={InputEvent}
                  name="checkedA"
                  color="primary"
                />
              }
              label="EasyPaisa"
            /> <br />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={FullName.checkedC}
                  onChange={InputEvent}
                  name="checkedB"
                  color="primary"
                />
              }
              label="JazzCash"
            />
            <div className="button" >
              <Button id='materialbtn4' variant="contained" type="submit" className={classes.btn}>
                PLACE ORDER
            </Button>
            </div>
          </div>

        </div>
      </form>
    </>
  )
}

export default Checkout
