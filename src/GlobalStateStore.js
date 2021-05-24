import {createStore} from 'redux'

import allReducer from './GlobalStates/reducers/index'


const cart = createStore(allReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default cart;