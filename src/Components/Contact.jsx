// Import Requried Components
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";

import '../CSS/Contact.scss';

const Style = makeStyles({
    btn: {
      margin: "0.5rem 0",
      width: "20%",
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
    btnn: {
      margin: "0.5rem 0",
      width: "100%",
      background: "white",
      color: "black",
      border: "1px solid #8a8686",
      height: "3rem",
      textTransform: "none",
      // color: "#fff",
      "&:hover": {
        // color: "red",
        transition: ".5s ease-in-out",
      },
    },
  });

const Contact = () => {

    const classes = Style();
  return (
    <>
      <div className="Central_div">
        <div className="Middle_div">
          <span className="cont_contact">CONTACT US</span>

          <div className="inputs">
            <TextField
              name="fname"
              label="First Name"
              variant="outlined"
              style={{ width: "100%", marginRight: "23px" , marginBottom: "5px" }}
            />

            <TextField
              type="text"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={{ width: "100%", marginRight: "2%" }}
            />

            <TextField
              id="outlined-basic"
              label="Email Adress"
              variant="outlined"
              style={{ width: "100%", marginRight: "2%", color: "black" }}
            />
          </div>

          <div className="textfield">
            <TextField
              id="outlined-multiline-static"
              label="Entre Your Text Here"
              multiline
              rows={10}
              style={{ width: "100%", marginTop: "2%" }}
              variant="outlined"
            />
          </div>

          <div className="button" >
            <Button id = 'materialbtn4' variant="contained" type="submit" className={classes.btn}>
              SIGN UP
            </Button>
          </div>

          <div className="Contact_button" >
            <Button id="materialbtn1" variant="contained" type="submit" className={classes.btnn}>
              <GitHubIcon />
              &nbsp;&nbsp;&nbsp; Zendesk
            </Button>
            <Button id="materialbtn2" variant="contained" type="submit" className={classes.btnn}>
              <WhatsAppIcon />
              &nbsp;&nbsp;&nbsp;&nbsp; +923********
            </Button>
            <Button id="materialbtn3" variant="contained" type="submit" className={classes.btnn}>
              <MailOutlineIcon />
              &nbsp;&nbsp;&nbsp;&nbsp; @instaprint.pk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;