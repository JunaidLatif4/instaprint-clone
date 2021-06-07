import React from 'react';

import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import payment from '../img/pay.jpg';



import '../CSS/MobileFooter.scss';


const style = makeStyles({
    btn: {
        margin: "1rem 0",
        width: "25%",
        background: "red",
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
                
            </div>
        </div>
    )
}

export default Footer;



