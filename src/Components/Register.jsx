import React from 'react'
import {
    Typography, Button, Grid, Checkbox, TextField, OutlinedInput,
    FormControl, InputLabel, InputAdornment, IconButton
} from "@material-ui/core"
import SharpIcon from '@material-ui/icons/SendSharp';
import { makeStyles } from '@material-ui/core/styles';


import '../CSS/Register.scss';

// import Login from './Login';
import SignUp from './SignUp';

const Style = makeStyles({
    btn: {
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
    }
})

const Register = () => {
    const classes = Style();

    return (
        <>
            <div className="register_container">
                    <SignUp />
            </div>
        </>
    )
}


export default Register;