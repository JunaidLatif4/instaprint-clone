import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import payment from '../img/pay.jpg';



import '../CSS/MobileFooter.scss';


const style = makeStyles({
    btn: {
        margin: "1rem 0",
        width: "26%",
        background: "#ed1c24",
        height: "2rem",
        color: "#fff",
        "&:hover": {
            color: "red",
            transition: ".5s ease-in-out"
        }
    }
})

const Footer = () => {
    const classes = style();
    return (
        <div className="mbl_footer_container">
            <div className="mbl_footer_newsletter">
                <h3>NEWSLETTER</h3>
                <p>For Deals And Offers Please Subscribe</p>
                <input type="email" placeholder="Type Email Here" />
                <Button className={classes.btn}> Subscribe </Button>
            </div>
            <div className="mbl_footer_payment">
                <h3>Payment Methods</h3>
                <img src={payment} alt="ERROR" />
            </div>
            <div className="mbl_footer_branches">
                <h3>BRANCHES</h3>
                <ul>
                    <li>
                        <b>Gulberg :</b>
                        <p>124 - P, M.M. Alam Road Gulberg -II Lahore</p>
                    </li>
                    <li>
                        <b>Corporate Office :</b>
                        <p>1st floor 124 - P, M.M. Alam Road Gulberg -II Lahore</p>
                    </li>
                    <li>
                        <b>Defence :</b>
                        <p>Plaza N0. 1/Cca, 1st Floor Above HBL Bank Near Jalal Sons DHA Phase 5, DHA Lahore</p>
                    </li>
                </ul>
            </div>
            <div className="mbl_footer_contact">
                <h3> CONTACT </h3>
                <ul>
                    <li>
                        <b>WhatsApp :</b>
                        <p>+92-3174919633</p>
                    </li>
                    <li>
                        <b>Phone :</b>
                        <p>+92-3004050673</p>
                    </li>
                    <li>
                        <b>Email :</b>
                        <p>sales@instaprintclone.pk</p>
                    </li>
                </ul>
            </div>
            <div className="mbl_footer_company">
                <h3>COMPANY</h3>
                <ul>
                    <li><NavLink to="/"> About Us </NavLink> </li>
                    <li><NavLink to="/"> Contact Us </NavLink> </li>
                    <li><NavLink to="/"> FAQ's </NavLink> </li>
                    <li><NavLink to="/"> Privacy Policy </NavLink> </li>
                    <li><NavLink to="/"> Returns Exchanges </NavLink> </li>
                    <li><NavLink to="/"> Careers Internships </NavLink> </li>
                    <li><NavLink to="/"> How to Place an Order </NavLink> </li>
                    <li><NavLink to="/"> Corporate Profile </NavLink> </li>
                </ul>
            </div>
            <div className="mbl_footer_icon">
                <FacebookIcon/> <InstagramIcon/> <PinterestIcon/> <LinkedInIcon/>
            </div>
            <div className="mbl_footer_copy">
            © 2020 instaprint All Rights Reserved. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Powered by <a href="/"> Jarviz Production </a>
            </div>
        </div>
    )
}

export default Footer;



