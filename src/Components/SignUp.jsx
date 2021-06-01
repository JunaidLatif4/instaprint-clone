import React, { useState } from "react";
import { NavLink, Route, useLocation } from 'react-router-dom';
import axois from "axios";
import {
  Typography, Button, Grid, Checkbox, TextField, OutlinedInput,
  FormControl, InputLabel, InputAdornment, IconButton
} from "@material-ui/core"
import Show from '@material-ui/icons/Visibility';
import Hide from '@material-ui/icons/VisibilityOff';
import SharpIcon from '@material-ui/icons/SendSharp';
import BlockIcon from '@material-ui/icons/BlockSharp';

import Phone from "material-ui-phone-number";

import { makeStyles } from '@material-ui/core/styles';

import Register from './BackEnd_Connection/SignUp_API';

// CSS :
import "../CSS/SignUp.scss";
import { RegisterHeader } from "../env";

const Style = makeStyles({
  btn: {
    margin: "0.5rem 0",
    width: "100%",
    background: "red",
    height: "3rem",
    color: "#fff",
    "&:hover": {
      color: "red",
      transition: ".5s ease-in-out"
    }
  },
  logbtn: {
    color: "yellow",
    fontWeight: "bolder",
    margin: "0 5px",
    "&:hover": {
      color: "black"
    }
  },
  disbtn: {
    background: "rgb(0,0,0, 0.38)",
    width: "100%",
    height: "3rem"
  },
  error: {
    color: "red",
    width: "100%",
    textAlign: "center",
    fontSize: "smaller"

  }
})


const SignUp = () => {
  const classes = Style();


  // Form Data Control :
  const [enteredData, updateEnteredData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  })


  const [error, updateError] = useState({
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: ""
  })

  const enteringData = (event) => {

    const { value, name } = event.target;

    switch (name) {
      case "firstname":
        updateEnteredData((preValue) => {
          return {
            ...preValue,
            [name]: value
          }
        })
        if (!enteredData.firstname || enteredData.firstname.length < 3) {
          updateError((preValue) => {
            return {
              ...preValue,
              firstnameError: "First Name Must be more than 3 Characters"
            }
          })
        } else {
          updateError((preValue) => {
            return {
              ...preValue,
              firstnameError: ""
            }
          })
        }
        break;

      case "lastname":
        updateEnteredData((preValue) => {
          return {
            ...preValue,
            [name]: value
          }
        })
        if (!enteredData.lastname || enteredData.lastname.length < 3) {
          updateError((preValue) => {
            return {
              ...preValue,
              lastnameError: "Last Name Must be more than 3 Characters"
            }
          })
        } else {
          updateError((preValue) => {
            return {
              ...preValue,
              lastnameError: ""
            }
          })
        }
        break;

      case "email":
        updateEnteredData((preValue) => {
          return {
            ...preValue,
            [name]: value
          }
        })
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(enteredData.email)) {
          updateError((preValue) => {
            return {
              ...preValue,
              emailError: ""
            }
          })
        } else {
          updateError((preValue) => {
            return {
              ...preValue,
              emailError: "Invalid Email"
            }
          })
        }
        break;

      case "password":
        updateEnteredData((preValue) => {
          return {
            ...preValue,
            [name]: value
          }
        })
        if (!enteredData.password || enteredData.password.length < 8) {
          updateError((preValue) => {
            return {
              ...preValue,
              passwordError: "Password Must be more than 8 Characters"
            }
          })
        } else {
          updateError((preValue) => {
            return {
              ...preValue,
              passwordError: ""
            }
          })
        }
        break;

      case "confirmPassword":
        updateEnteredData((preValue) => {
          return {
            ...preValue,
            [name]: value
          }
        })
        if (enteredData.confirmPassword !== enteredData.password) {
          updateError((preValue) => {
            return {
              ...preValue,
              confirmPasswordError: "Password did not Match"
            }
          })
        } else {
          updateError((preValue) => {
            return {
              ...preValue,
              confirmPasswordError: ""
            }
          })
        }
        break;

      default:
        console.log("Sonthing went wrong")
        break;
    }


  }


  // Show Hide Password :
  const [showPV, updateShowPV] = useState({
    showP: false
  })
  const [showCPV, updateShowCPV] = useState({
    showCP: false
  })

  const clikShowP = () => {
    updateShowPV({
      showP: !showPV.showP
    })
  }
  const clikShowCP = () => {
    updateShowCPV({
      showCP: !showCPV.showCP
    })
  }


  const submit = (data) => {
    data.preventDefault();
    updateEnteredData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    })

  }
  // ------------------------USER REGISTER------------------------
  const userRegister = async () => {
    await axois({
      method: "post",
      url: "http://127.0.01:8000/api/register/",
      headers: RegisterHeader,
      data: {
        "username": enteredData.firstname,
        "password": enteredData.password,
        "first_name": enteredData.firstname,
        "last_name": enteredData.lastname,
        "email": enteredData.email
      }
    }).then((res) => {
      console.log("The Register DATA = ", res)
    })
  }

  return (
    <>
      <div className="signup_container">
      <div className="login_btn_container">
                    <NavLink to="/login" style={{ textDecoration: "none" }}>
                        <Button
                            id="logbtn"
                            variant="contained"
                            endIcon={<SharpIcon />}
                            className={classes.btn}
                        >
                            Already Have an Account <span className={classes.logbtn}> LOG IN</span>
                        </Button>
                    </NavLink>
                </div>
        <div className="signup_box">
          <Typography variant="h5" style={{ textAlign: "center" }}>
            SIGN-UP
        </Typography>

          <form className="form" onSubmit={submit} autoComplete="off">
            <TextField
              label="First Name"
              variant="outlined"
              name="firstname"
              value={enteredData.firstname}
              onChange={enteringData}
              style={{ margin: ".5rem 0", width: "100%" }}
            />
            <Typography className={classes.error}> {error.firstnameError} </Typography>
            <TextField
              label="Last Name"
              variant="outlined"
              name="lastname"
              value={enteredData.lastname}
              onChange={enteringData}
              style={{ width: "100%", margin: "0.5rem 0rem 1rem 0rem" }}
            />
            <Typography style={{ paddingBottom: "0.5rem" }} className={classes.error}> {error.lastnameError} </Typography>

            <Phone
              variant="outlined"
              defaultCountry={'pk'}
              onlyCountries={['pk']}
              style={{ width: "100%" }}

            />

            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={enteredData.email}
              onChange={enteringData}
              style={{ width: "100%", margin: "1rem 0 0.5rem 0" }}
            />
            <Typography className={classes.error}> {error.emailError} </Typography>

            <FormControl style={{ margin: "0.5rem 0", width: "100%" }} variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                name="password"
                value={enteredData.password}
                onChange={enteringData}
                type={showPV.showP ? "text" : "password"}
                labelWidth={70}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={clikShowP}>
                      {showPV.showP ? <Show /> : <Hide />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Typography className={classes.error}> {error.passwordError} </Typography>

            <FormControl style={{ margin: "0.5rem 0", width: "100%" }} variant="outlined">
              <InputLabel>Confirm Password</InputLabel>
              <OutlinedInput
                name="confirmPassword"
                value={enteredData.confirmPassword}
                onChange={enteringData}
                type={showCPV.showCP ? "text" : "password"}
                labelWidth={130}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={clikShowCP}>
                      {showCPV.showCP ? <Show /> : <Hide />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Typography className={classes.error}> {enteredData.confirmPassword !== enteredData.password ? "Password did not Match" : ""} </Typography>

            {
              enteredData.firstname &&
                enteredData.lastname &&
                enteredData.email &&
                enteredData.password &&
                enteredData.confirmPassword &&
                !error.firstnameError &&
                !error.lastnameError &&
                !error.emailError &&
                !error.passwordError &&
                (enteredData.confirmPassword == enteredData.password)
                ?
                (
                  <Button
                    variant="contained"
                    type="submit"
                    endIcon={<SharpIcon />}
                    className={classes.btn}
                    onClick={userRegister}
                  >
                    SIGN UP
                  </Button>
                )
                :
                <Button
                  variant="contained"
                  disabled
                  endIcon={<BlockIcon />}
                  className={classes.disbtn}
                >
                  SIGN UP
                  </Button>
            }
          </form>
        </div>
      </div>

      <div>
      </div>
    </>
  )
}


export default SignUp;