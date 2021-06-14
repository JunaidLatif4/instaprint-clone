import React, { useEffect, useState } from 'react'
import axois from 'axios'
import {
    Typography, Button, Grid, Checkbox, TextField, OutlinedInput,
    FormControl, InputLabel, InputAdornment, IconButton
} from "@material-ui/core"
import Phone from "material-ui-phone-number";

import { ProfileMenu } from './Profile'
import { useGlobalState } from '../state/provider';

import '../CSS/AddressBook.scss'
import '../CSS/ProfileMenu.scss'

const AddressBook = () => {

    const [{ profile }, dispatch] = useGlobalState();
    const [userProfile, updateUserProfile] = useState({
        address: profile?.addres,
        city: profile?.city,
        state: profile?.state,
        phone: profile?.phone,
        country: profile?.country,
    })


    const [enteredData, updateEnteredData] = useState({
        address: "",
        city: "",
        state: "",
        phone: "",
        country: ""
    })

    const enteringData = (event) => {
        const { name, value } = event.target

        updateEnteredData((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }



    const phone = (event) => {
        console.log(event)
        updateEnteredData((preValue) => {
            return {
                ...preValue,
                phone: event
            }
        })
    }

    useEffect(() => {
        updateEnteredData(() => {
            return {
                address: userProfile.address,
                city: userProfile.city,
                state: userProfile.state,
                phone: userProfile.phone,
                country: userProfile.country
            }
        })
    }, [userProfile])

    const submit = async (event) => {
        event.preventDefault();
        const userToken = window.localStorage.getItem('token')
        await axois({
            method: "post",
            url: "http://127.0.01:8000/api/updateprofile/",
            headers: {
                Authorization: `token ${userToken}`,
            },
            data: {
                "addres": enteredData.address,
                "city": enteredData.city,
                "state": enteredData.state,
                "phone": enteredData.phone,
                "country": enteredData.country
            }
        }).then((res) => {
            console.log("The ADDREESS DATA = ", res)
        })

    }

    return (
        <div className="address_container">
            <div className="address_box">
                <ProfileMenu />
                <div className="address_data">
                    <Typography variant="h5" > BILLING ADDRESS </Typography> <hr />

                    <form className="form" onSubmit={submit} autoComplete="off">

                        <TextField
                            label="STREET ADDRESS"
                            variant="outlined"
                            name="address"
                            // defaultValue = {enteredData.address}
                            value={enteredData.address}
                            onChange={enteringData}
                            style={{ margin: ".5rem 0", width: "100%" }}
                        />

                        <TextField
                            label="CITY"
                            variant="outlined"
                            name="city"
                            // defaultValue = {enteredData.city}
                            value={enteredData.city}
                            onChange={enteringData}
                            style={{ width: "100%", margin: "0.5rem 0rem 1rem 0rem" }}
                        />

                        <Phone
                            variant="outlined"
                            style={{ width: "100%" }}
                            name="phone"
                            value={enteredData.phone}
                            defaultCountry={'pk'}
                            onlyCountries={['pk']}
                            onChange={phone}
                        />

                        <TextField
                            label="STATE / PROVINCE"
                            variant="outlined"
                            name="state"
                            // defaultValue = {enteredData.state}
                            value={enteredData.state}
                            onChange={enteringData}
                            style={{ width: "100%", margin: "1rem 0 0.5rem 0" }}
                        />

                        <TextField
                            label="COUNTRY"
                            variant="outlined"
                            name="country"
                            // defaultValue = {enteredData.country}
                            value={enteredData.country}
                            onChange={enteringData}
                            style={{ width: "100%", margin: "1rem 0 0.5rem 0" }}
                        />

                        <Button
                            variant="contained"
                            type="submit"
                            style={{ color: "white", backgroundColor: "#ed1b24", fontSize: "large", fontWeight: "bold" }}
                        >
                            SAVE ADDRESS
                  </Button>
                        <Typography > {enteredData.address} </Typography>
                        <Typography > {enteredData.city} </Typography>
                        <Typography > {enteredData.state} </Typography>
                        <Typography > {enteredData.phone} </Typography>
                        <Typography > {enteredData.country} </Typography>


                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddressBook
