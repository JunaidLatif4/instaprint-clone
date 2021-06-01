// Import Requried Components :
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Import Components :
import Header from "./Components/Header";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Login from './Components/Login';
import AllCards from './Components/Cards_Components/AllCards.jsx';
import Product from './Components/Product';
import Profile from './Components/Profile';
import AddressBook from './Components/AddressBook'
import Checkout from './Components/Checkout'

import axios from 'axios';
import { useGlobalState } from './state/provider';


const App = () => {

    const [{profile , reloadPage} , dispatch] = useGlobalState();
    const userToken = window.localStorage.getItem('token')
    useEffect(() => {
        const getProfile = async () => {
            if (userToken !== null) {
                await axios({
                    method: "get",
                    url: "http://127.0.0.1:8000/api/profile/",
                    headers: {
                        Authorization: `token ${userToken}`,
                    }
                }).then((res) => {
                    let user = res.data['data']
                    dispatch({
                        type : "ADD_PROFILE",
                        profile : user
                    })
                }).catch((err) => {
                    console.log("The ERROR FOR PROFILE ============" , err)
                    dispatch({
                        type : "ADD_PROFILE",
                        profile : null
                    })
                })
            }
        }
        getProfile()
    }, [])

    return (
        <>
            <Header />

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/card" component={AllCards} />
                <Route path="/product/:pid" component={Product} />
                <Route path="/profile" component={Profile} />
                <Route path="/address" component={AddressBook} />
                <Route path="/checkout" component={Checkout} />
                <Redirect to="/" />
            </Switch>

            <Footer />
        </>
    )
}

export default App;