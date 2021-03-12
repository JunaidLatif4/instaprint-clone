// Import Requried Components :
import React from 'react';
import {Route , Switch , Redirect} from 'react-router-dom';

// Import Components :
import Header from "./Components/Header";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Login from './Components/Login';
import AllCards from './Components/Cards_Components/AllCards.jsx';


const App = ()=>{

    return(
        <>
            <Header/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/card" component={AllCards} />
                <Redirect to="/" />
            </Switch>

            <Footer/>
        </>
    )
}

export default App;