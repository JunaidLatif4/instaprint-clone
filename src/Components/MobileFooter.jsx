import React from 'react';

import '../CSS/MobileFooter.scss';

const Footer = () => {
    return (
        <div className="all">
            <div className="footer_full">
                <div className="footer_newsletter">
                    <h3 className="newsletter_head">
                        NEWSLETTER
                </h3>
                    <p className="newsletter_para">
                        For Deals And Offers Please Subscribe
                </p>
                    <input type="email" className="newsletter_email"
                        placeholder="Type Email Here" />
                    <button className="newsletter_btn">Subscribe</button>
                    <hr className="newsletter_hr" />

                </div>
                <div className="footer_payment">
                    <h3 className="payment_head">
                        Payment Methods
                </h3>
                    <div className="payment_anchor">

                        <a className="anchor" href="bjo">hello</a>
                        <a className="anchor" href="bjo">hello</a>
                        <a className="anchor" href="bjo">hello</a>
                    </div>




                </div>
                <div className="branches">
                    <hr className="newsletter_hr" />
                    <h3 className="payment_head">
                        BRANCHES
                    </h3>
                    <div className="branches_main">
                        <p className="branches_para">
                            <span className="title">
                                124 - P, M.M Alam Road Gulberg -11 Lahore
                            </span>
                            Gulberg
                        </p>
                        <p className="branches_para">
                            <span className="title">
                                1st floor 124 - P, M.M Alam Road Gulberg -11 Lahore
                            </span>
                            Corporate
                        </p>
                        <p className="branches_para">
                            <span className="title">
                                2 - H, Commercial Area, DHA, Lahore
                            </span>
                              office:
                        </p>
                    </div>





                </div>
                <div className="footer_contact">
                    <hr className="newsletter_hr" />

                    <h3 className="payment_head" id='head'>
                        CONTACT
                    </h3>
                    <div className="contact_main">
                        <p className="contact_para">
                            <span className="contact_title">
                                +923004050673
                            </span>
                            WhatsApp:
                        </p>
                        <p className="contact_para">
                            <span className="contact_title">
                                +923174919633
                            </span>
                                Phone:
                        </p>
                        <p className="contact_para">
                            <span className="contact_title">
                                zahidghafoor40@gmail.com
                            </span>
                              Email:
                        </p>
                    </div>


                </div>

                <div className="footer_company">
                    <hr className="newsletter_hr" />

                    <h3 className="payment_head" id='head'>
                        COMPANY
                    </h3>

                    <div className="company_main">
                        <div className="company_anchors">
                            <a href="" className="company_para1"> About Us
                            <a href="" className="company_para2"> Contact Us
                            </a>
                            </a>
                        </div>
                        <div className="company_anchors">
                            <a href="" className="company_para1">FAQ'S
                            <a href="" className="company_para2">  Privacy Policy
                            </a>
                            </a>
                        </div>
                        <div className="company_anchors">
                            <a href="" className="company_para1"> Return Exchange
                            <a href="" className="company_para2"> Careers Internship
                            </a>
                            </a>
                        </div>

                        <div className="company_anchors">
                            <a href="" className="company_para1"> How to place an order
                            <a href="" className="company_para2"> Corporate Profile
                            </a>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="social">
                    <hr className="newsletter_hr" />
                    <div className="icons">

                        <a className="anchor" href="bjo">hello</a>
                        <a className="anchor" href="bjo">hello</a>
                        <a className="anchor" href="bjo">hello</a>
                        <a className="anchor" href="bjo">hello</a>

                    </div>
                    <hr className="newsletter_hr" />

                </div>

                <div className="copyright">
                    <p className="copy">
                        2020 jarviz All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer;



