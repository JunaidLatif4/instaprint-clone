import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


import "../CSS/Checkout.scss";

import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';




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

  const [state, setState] = React.useState({
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({[event.target.name]: event.target.checked });
    console.log(state.checkedB)
  };

  return (
    <>
    <div className="Checkout_full_div">
      <div className="Checkout_main_div">
        <div className="header_div">
          <p className="header_ptag">SHOPPING INFORMATION</p>
          <br/>
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
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="EasyPaisa"
          /> <br />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
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

    </>
  )
}

export default Checkout
