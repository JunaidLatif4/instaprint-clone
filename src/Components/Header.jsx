// Import Requried Components
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';



import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SearchIcon from '@material-ui/icons/Search';
// BADGE :
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Logo from '../img/logo.png';

// GlobalStates :
import { CartPage, HideCart } from './CartPage'
import { useGlobalState } from '../state/provider';
import { useSelector } from 'react-redux'

import "../CSS/Header.scss"
import "../CSS/SideMenu.scss"



// BADGE STYLE / COMPONENT :
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 25,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const CartBadge = () => {
    const cartItems = useSelector((state) => state.addToCart)
    const [cartCount , updateCartCount] = useState(0)

    useEffect(() => {
        let count = 0;
        cartItems.forEach( item => {
            count += item.qty
        });
        updateCartCount(count)
    }, [cartItems , cartCount])

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon style={{color : "#231f20" , fontSize : "35px"}} />
            </StyledBadge>
        </IconButton>
    );
}
// ---------------------------------------------------------------------------------------------------------\\

const Btn = (props) => {

    return (
        <>
            <div className="btn_container" onClick={props.click}>
                <MenuIcon />
            </div>
        </>
    )
}

const MenuBar = () => {
    return (
        <>
            <div className="menu_container">
                <ul>
                    <li><NavLink to="/card/bu"> All </NavLink></li>
                    <li><NavLink to="/card/business_card"> Business Cards</NavLink></li>
                    <li><NavLink to="/card/clothing_bags"> Clothing, Bags & Boxes</NavLink></li>
                    <li><NavLink to="/card/markiting_material"> Markiting Material</NavLink></li>
                    <li><NavLink to="/card/office_stationary"> Office Stationary</NavLink></li>
                    <li><NavLink to="/card/promotional_items"> Promotional Items</NavLink></li>
                    <li><NavLink to="/card/weddings"> Weddings</NavLink></li>
                    <li><NavLink to="/card/bundles"> Bundles</NavLink></li>
                    <li><NavLink to="/card/design_services"> Design Services</NavLink></li>
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


const UserMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // props.logout()
    };
    return (
        <>
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" className="login" onClick={handleClick}> <span><PersonPinIcon className="icon" /></span> <span className="mes" style={{ textTransform: "uppercase", color: "rgb(237, 27, 36)" }}>{props.data}</span>   </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><NavLink to="/profile" style={{ textDecoration: "none", color: "black", font: "inherit" }}> Profile </NavLink></MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose, props.logout}>Logout</MenuItem>
                </Menu>
            </div>
        </>
    )
}



const Header = () => {

    const [{ profile }, dispatch] = useGlobalState();

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

    const LogOut = () => {
        window.localStorage.clear()
        dispatch({
            type: "ADD_PROFILE",
            profile: null
        })
        window.location.href = "/"
    }


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
                        <NavLink to="/" className="img">
                            <img src={Logo} alt="Error"/>
                        </NavLink>

                        <input type="text" name="search" id="search" className="search" />

                        <NavLink to="/contact" className="help"> <span><ContactSupportIcon className="icon" /></span> <span className="mes">Help &nbsp; is here</span>   </NavLink>

                        {
                            (profile !== null) ?
                                <>
                                    <UserMenu data={profile.profile_user.first_name} logout={LogOut} />
                                </>
                                :
                                <>
                                    <NavLink to="/register" className="login"> <span><PersonPinIcon className="icon" /></span> <span className="mes">Sign in</span>   </NavLink>
                                </>
                        }

                        <p onClick={togelShowCart} className="cart"> <span><CartBadge className="icon" /></span> <span className="mes">Cart</span>   </p>
                        <div className="animation">
                            {showCart.cShow ? (<> <CartPage /> <HideCart click={togelHideCart} /> </>) : null}
                        </div>
                    </div>
                </div>
                <div className="nav_container">
                    <Btn click={togelShow} />
                    {show.mShow ? (<> <MenuBar /><MenuClose click={togelHide} /> </>) : null}

                    <div className="mbl_nav">
                        <div className="mbl_nav_box">
                            <div className="mbl_nav_img">
                                <NavLink to="/">
                                    <img src={Logo} alt="Error" />
                                </NavLink>
                            </div>
                            <div className="mbl_nav_data">
                                <div className="mbl_nav_search">
                                    <span><SearchIcon style={{ fontSize: "2rem" }} /></span>
                                </div>
                                <div className="mbl_nav_register">
                                    <NavLink to="/register"><PersonPinIcon style={{ fontSize: "2rem" }} /></NavLink>
                                </div>
                                <div className="mbl_nav_cart">
                                    <span onClick={togelShowCart} ><ShoppingCartIcon style={{ fontSize: "2rem" }} /></span>
                                </div>
                                {showCart.cShow ? (<> <CartPage /> <HideCart click={togelHideCart} /> </>) : null}
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/card/bu"> All &nbsp; |</NavLink></li>
                            {/* <li><NavLink to="/card/business_card"> Business Cards &nbsp; |</NavLink></li> */}
                            <li><NavLink to="/profile"> Business Cards &nbsp; |</NavLink></li>
                            {/* <li><NavLink to="/card/clothing_bags"> Clothing, Bags & Boxes  &nbsp; |</NavLink></li> */}
                            <li><NavLink to="/checkout"> Clothing, Bags & Boxes  &nbsp; |</NavLink></li>
                            <li><NavLink to="/card/markiting_material"> Markiting Material &nbsp; |</NavLink></li>
                            <li><NavLink to="/card/office_stationary"> Office Stationary &nbsp; |</NavLink></li>
                            <li><NavLink to="/card/promotional_items"> Promotional Items &nbsp; |</NavLink></li>
                            <li><NavLink to="/card/weddings"> Weddings &nbsp; |</NavLink></li>
                            <li><NavLink to="/card/bundles"> Bundles &nbsp; |</NavLink></li>
                            <li><NavLink to="/card/design_services"> Design Services</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
