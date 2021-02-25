// Import Requried Components
import React from 'react';
import  {NavLink} from 'react-router-dom';

import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import "../CSS/Header.scss"


const Header = () => {
    return (
        <>
            <div className="header">

                <div className="header_contact">
                    <div className="call">
                        Call us +92 ********* | Free shipping on orders above PKR 3000
                    </div>
                    <div className="how">
                        How To Place An Order
                    </div>
                </div>

                <div className="header_contant">
                    <div className="container">
                        <NavLink to="/">
                        <img src="img/logo.png" alt="Error" className="img" />
                        </NavLink>

                        <input type="text" name="search" id="search" className="search" />

                        <NavLink to="/contact" className="help"> <span><ContactSupportIcon className="icon" /></span> <span className="mes">Help &nbsp; is here</span>   </NavLink>
                        <NavLink to="/register" className="login"> <span><PersonPinIcon className="icon" /></span> <span className="mes">Sign in</span>   </NavLink>
                        <a href="/" className="cart"> <span><ShoppingCartIcon className="icon" /></span> <span className="mes">Cart</span>   </a>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/bu"> All &nbsp; |</NavLink></li>
                        <li><NavLink to="/"> Business Cards &nbsp; |</NavLink></li>
                        <li><NavLink to="/"> Clothing, Bags & Boxes  &nbsp; |</NavLink></li>
                        <li><NavLink to="/"> Markiting Material &nbsp; |</NavLink></li>
                        <li><NavLink to="/"> Office Stationary &nbsp; |</NavLink></li>
                        <li><NavLink to="/"> Promotional Items &nbsp; |</NavLink></li>
                        <li><NavLink to="/"> Weddings &nbsp; |</NavLink></li>
                        <li><NavLink to="/"> Bundles &nbsp; |</NavLink></li>
                        <li><NavLink to="/"> Design Services</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
