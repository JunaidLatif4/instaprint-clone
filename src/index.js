import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

// GlobalStates :
import { GlobalState } from './state/provider'
import reducer, { initial } from './state/reducer';
import { Provider } from 'react-redux'
import cart from './GlobalStateStore'
cart.subscribe(() => console.log('The Suscribe = ' , cart.getState()));


ReactDOM.render(
  <GlobalState initial={initial} reducer={reducer}>
    <BrowserRouter>
      <Provider store={cart}>
        <App />
      </Provider>
    </BrowserRouter>
  </GlobalState>,
  document.getElementById('root')
);

