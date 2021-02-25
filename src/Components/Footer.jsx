// Import Requried Components
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import payment from '../img/pay.jpg';

import '../CSS/Footer.scss'

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_box">
                <div className="footer_about">
                    <div className="branch_box">
                        <h3>BRANCHES</h3>
                        <ul className="footer_data">
                            <li><b>Gulberg:</b> <p>124 - P, M.M. Alam Road Gulberg -II Lahore</p> </li>
                            <li><b>Corporate office:</b> <p>1st floor 124 - P, M.M. Alam Road Gulberg -II Lahore</p> </li>
                            <li><b>Defence:</b> <p>2 - H, Commercial Area, DHA, Lahore</p> </li>
                        </ul>
                    </div>
                    <div className="contact_box">
                        <h3>CONTACT</h3>
                        <ul className="footer_data">
                            <li><b>WhatsApp:</b> <p> +923465000777</p> </li>
                            <li><b>Phone:</b> <p>+923344333573</p> </li>
                            <li><b>Email:</b> <p>sales@instaprint.pk</p> </li>
                        </ul>
                    </div>
                    <div className="company_box">
                        <h3>COMPANY</h3>
                        <ul className="footer_data">
                            <li> <a href="/">About US</a> </li>
                            <li> <a href="/">Contact Us</a> </li>
                            <li> <a href="/">FAQ's </a></li>
                            <li> <a href="/">Privacy Policy </a></li>
                            <li> <a href="/">Returns Exchanges </a></li>
                            <li> <a href="/">Careers Internships </a></li>
                            <li> <a href="/">How to Place an Order </a></li>
                            <li> <a href="/">Corporate Profile </a></li>
                        </ul>
                    </div>
                    <div className="news_box">
                        <h3>NEWSLETTER</h3>
                        <ul className="footer_data">
                            <li>For Deals And Offers Please Subscribe</li>
                            <li> <input type="text" placeholder="Type Email Here"/> <button> Subcribe </button> </li>
                            <li> <b className="payment"> Payment Method </b> </li>
                            <li>
                                <img src={payment} alt="ERROR"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright_box">
                    <hr />
                    <p> © 2020 instaprint All Rights Reserved. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Powered by <a href="/"> Jarviz Production </a> <div className="fright">
                        Follow us  &nbsp;&nbsp;&nbsp; <div className="icons">
                            <FacebookIcon /> <InstagramIcon /> <PinterestIcon /> <LinkedInIcon />
                        </div>
                    </div></p>

                </div>
            </div>
        </div>
    )
}

export default Footer
