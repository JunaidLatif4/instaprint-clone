import React, { useState } from 'react'
import { Button, Typography } from "@material-ui/core"
// CSS :
import '../CSS/Profile.scss';
import { NavLink } from 'react-router-dom';
import { useGlobalState } from '../state/provider';

const Profile = () => {

    const [{ profile }, dispatch] = useGlobalState();

    const [userProfile, updateUserProfile] = useState({
        FirstName: profile?.profile_user.first_name,
        LastName: profile?.profile_user.last_name,
        Email: profile?.profile_user.email,
    })

    return (
        <>
            <div className="profile_container">
                <div className="profile_box">
                    <div className="profile_menu">
                        <Typography className="my_account">MY ACCOUNT</Typography>
                        <NavLink to="#" className="links">Account Dashboard</NavLink>
                        <NavLink to="#" className="links">Account Information</NavLink>
                        <NavLink to="#" className="links">Address Book</NavLink>
                        <NavLink to="#" className="links">My Orders</NavLink>
                        <NavLink to="#" className="links">MY ACCOUNT</NavLink>
                    </div>
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
                                <p style={{textTransform:"capitalize"}}>{userProfile.FirstName} {userProfile.LastName}</p>
                                <p>kot murad khan kasur</p>
                                <p>kasur , 55050</p>
                                <p>punjab</p>
                                <p>pakistan</p>
                                <p><b>T :</b> 03174919000</p>
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
