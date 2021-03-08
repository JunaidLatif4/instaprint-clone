// Import Requried Components
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Logo from '../img/logo.png';

import {Cart , HideCart} from './Cart'

import "../CSS/Header.scss"
import "../CSS/SideMenu.scss"


const Btn = (props) => {

    return (
        <>
            <div className="btn_container" onClick={props.click}>
                <MenuIcon />
            </div>
        </>
    )
}

const Menu = () => {
    return (
        <>
            <div className="menu_container">
                <ul>
                    <li><NavLink to="/bu"> All </NavLink></li>
                    <li><NavLink to="/"> Business Cards</NavLink></li>
                    <li><NavLink to="/"> Clothing, Bags & Boxes</NavLink></li>
                    <li><NavLink to="/"> Markiting Material</NavLink></li>
                    <li><NavLink to="/"> Office Stationary</NavLink></li>
                    <li><NavLink to="/"> Promotional Items</NavLink></li>
                    <li><NavLink to="/"> Weddings</NavLink></li>
                    <li><NavLink to="/"> Bundles</NavLink></li>
                    <li><NavLink to="/"> Design Services</NavLink></li>
                </ul>
            </div>
        </>
    )
}
const MenuClose = (props) => {
    return (
        <>
            <div className="menuClose_container" onClick={props.click}>
                Hellow
        </div>
        </>
    )
}


const Header = () => {

    const [show, updateShow] = useState({
        mShow: false
    })

    const togelShow = () => {
        updateShow((preValue) => {
            return {
                mShow: !preValue.mShow
            }
        })
    }
    const togelHide = () => {
        updateShow((preValue) => {
            return {
                mShow: !preValue.mShow
            }
        })
    }


    const [showCart, updateShowCart] = useState({
        cShow: false
    })

    const togelShowCart = () => {
        updateShowCart((preValue) => {
            return {
                cShow: !preValue.cShow
            }
        })
    }
    const togelHideCart = () => {
        updateShowCart((preValue) => {
            return {
                cShow: !preValue.cShow
            }
        })
    }

    console.log(show)

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
                            <img src={Logo} alt="Error" className="img" />
                        </NavLink>

                        <input type="text" name="search" id="search" className="search" />

                        <NavLink to="/contact" className="help"> <span><ContactSupportIcon className="icon" /></span> <span className="mes">Help &nbsp; is here</span>   </NavLink>
                        <NavLink to="/register" className="login"> <span><PersonPinIcon className="icon" /></span> <span className="mes">Sign in</span>   </NavLink>
                        <p onClick={togelShowCart} className="cart"> <span><ShoppingCartIcon className="icon" /></span> <span className="mes">Cart</span>   </p>
                        <div className="animation">
                        {showCart.cShow ? (<> <Cart /> <HideCart click={togelHideCart}/> </>) : null}
                        </div>
                    </div>
                </div>
                <div className="nav_container">
                    <Btn click={togelShow} />
                    {show.mShow ? (<> <Menu /><MenuClose click={togelHide} /> </>) : null}
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
            </div>
        </>
    )
}

export default Header
