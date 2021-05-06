import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import { GlobalState } from './state/provider'
import reducer, { initial } from './state/reducer';

ReactDOM.render(
  <GlobalState initial={initial} reducer={reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById('root')
);

