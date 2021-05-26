import React, { useState } from "react";
import axois from "axios";
import { NavLink } from 'react-router-dom';
import {
  Typography, Button, Grid, Checkbox, TextField, OutlinedInput,
  FormControl, InputLabel, InputAdornment, IconButton
} from "@material-ui/core";
import Show from '@material-ui/icons/Visibility';
import Hide from '@material-ui/icons/VisibilityOff';
import SharpIcon from '@material-ui/icons/SendSharp';
import BlockIcon from '@material-ui/icons/BlockSharp';

import { makeStyles } from '@material-ui/core/styles';

import '../CSS/Login.scss';
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

  },
  signbtn: {
    color: "yellow",
    fontWeight: "bolder",
    margin: "0 5px",
    "&:hover": {
      color: "black"
    }
  }
})

const Login = () => {
  const classes = Style();

  const [enteredData, updateEnteredData] = useState({
    email: "",
    password: ""
  })

  const [error, updateError] = useState({
    emailError: "",
    passwordError: ""
  })


  const enteringData = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "email":
        updateEnteredData((preValue) => {
          return {
            ...preValue,
            [name]: value
          }
        })

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(enteredData.email)) {
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
              passwordError: "Password Must be more than 8 Character"
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

      default:
        break;
    }
  }

  const [showPV, updateShowPV] = useState({
    showP: false
  })

  const clickShowP = () => {
    updateShowPV({
      showP: !showPV.showP
    })
  }

  const submit = (data) => {
    data.preventDefault();
    updateEnteredData({
      email: "",
      password: ""
    })

  }


  const userLogin = async ()=>{
    axois({
      url : "http://127.0.0.1:8000/api/login/",
      method : "post",
      headers : RegisterHeader ,
      data : {
        "username" : enteredData.email ,
        "password" : enteredData.password
      }
    }).then((res)=>{
      // console.log("User LOGED IN ==============" , res.data['token'])
      window.localStorage.setItem("token", res.data["token"])
      window.location.href = "/"
    }).catch((err)=>{
      console.log("LOGIN ERROR ===========" , err)
    })
  }

  return (
    <>
      <div className="login_container">
        <div className="login_c">
          <div className="login_box">

            <Typography variant="h5" style={{ textAlign: "center" }}>
              LOG-IN
            </Typography>

            <form className="login_form" onSubmit={submit}>
              <TextField
                label="Emial"
                name="email"
                value={enteredData.email}
                variant="outlined"
                onChange={enteringData}
                style={{ margin: ".5rem 0", width: "100%" }}
              />

              <Typography className={classes.error}> {error.emailError} </Typography>

              <FormControl variant="outlined" style={{ margin: ".5rem 0", width: "100%" }}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  name="password"
                  type={showPV.showP ? "text" : "password"}
                  onChange={enteringData}
                  value={enteredData.password}
                  labelWidth={70}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={clickShowP}>
                        {showPV.showP ? <Show /> : <Hide />}
                      </IconButton>
                    </InputAdornment>
                  }

                />
              </FormControl>

              <Typography className={classes.error}> {error.passwordError} </Typography>

              {
                enteredData.email &&
                  enteredData.password &&
                  !error.emailError &&
                  !error.passwordError
                  ?
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={userLogin}
                    endIcon={<SharpIcon />}
                    className={classes.btn}
                  >
                    LOG IN
                </Button>
                  :
                  <Button
                    variant="contained"
                    disabled
                    endIcon={<BlockIcon />}
                    className={classes.disbtn}
                  >
                    LOG IN
                </Button>
              }
            </form>

          </div>
        </div>

        <div className="signup_btn_container">
          <NavLink to="/register" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              endIcon={<SharpIcon />}
              className={classes.btn}
            >
              Creat an Account <span className={classes.signbtn}> SIGN UP</span>
            </Button>
          </NavLink>
        </div>

      </div>
    </>
  )
};




export default Login;