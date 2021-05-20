import React, { useState } from 'react'
import { useGlobalState } from '../state/provider';
import { NavLink } from 'react-router-dom';

import { Button, Typography } from "@material-ui/core"

// CSS :
import '../CSS/Profile.scss';
import '../CSS/ProfileMenu.scss';

const ProfileMenu = () => {
    return (
        <>
            <div className="profile_menu">
                <Typography className="my_account">MY ACCOUNT</Typography>
                <NavLink to="#" className="links">Account Dashboard</NavLink>
                <NavLink to="#" className="links">Account Information</NavLink>
                <NavLink to="/address" className="links">Address Book</NavLink>
                <NavLink to="#" className="links">My Orders</NavLink>
                <NavLink to="#" className="links">MY ACCOUNT</NavLink>
            </div>
        </>
    )
}


const Profile = () => {

    const [{ profile }, dispatch] = useGlobalState();

    const [userProfile, updateUserProfile] = useState({
        FirstName: profile?.profile_user.first_name,
        LastName: profile?.profile_user.last_name,
        Email: profile?.profile_user.email,
        address: profile?.addres,
        city: profile?.city,
        state: profile?.state,
        phone: profile?.phone,
        country: profile?.country,
    })

    return (
        <>
            <div className="profile_container">
                <div className="profile_box">
                    <ProfileMenu/>
                    <div className="profile_data">
                        <div className="account_info">
                            <h3>CONTACT INFORMATION</h3> <hr />
                            <div className="user_profile">
                                <p>{userProfile.FirstName} {userProfile.LastName}</p>
                                <p>{userProfile.Email}</p>
                            </div>
                            <NavLink to="/">
                                <button className="btn"> CHANGE INFO. </button>
                            </NavLink>
                        </div>
                        <div className="address_info">
                            <h3>ADDRESS BOOK</h3> <hr />
                            <div className="user_address">
                                <p style={{ textTransform: "capitalize" , fontWeight:"bold" , fontStyle:"italic" }}>{userProfile.FirstName} {userProfile.LastName}</p>
                                <p>{userProfile.address}</p>
                                <p>{userProfile.city}</p>
                                <p>{userProfile.state}</p>
                                <p>{userProfile.country}</p>
                                <p><b>T :</b> {userProfile.phone}</p>
                            </div>
                            <NavLink to="/">
                                <button className="btn"> CHANGE ADDRESS. </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
export {ProfileMenu};
