import React from 'react'
import { NavLink, Route,useLocation} from 'react-router-dom';

import '../CSS/Register.scss';

import Login from './Login';
import SignUp from './SignUp';

const Register = () => {
    const location = useLocation();
    const log = document.getElementById("log");

    const border = ()=>{
        log.style.borderBottom = "2px solid black";
    }

    return (
        <>
            <div className="register_container">
                <div className="register_link">
                    <NavLink exact to="/register" activeClassName="active_nav" id="log"> LOG IN </NavLink>
                    <NavLink to="/register/signup" activeClassName="active_nav"> SIGN UP </NavLink>
                    


                </div>
                    {/* {location.pathname == "/register/signup" ? log.style.border = "none"  : null}
                    {location.pathname == "/register" ? border()  : null} */}

                    <Route exact path="/register" component={Login} />
                    <Route path="/register/signup" component={SignUp} />
            </div>
        </>
    )
}

export default Register;
