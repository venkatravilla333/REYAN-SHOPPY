


import {applyMiddleware, combineReducers, createStore} from 'redux'
import { getAllProductsReducer, getProductByIdReducer } from './reducers/productReducer'
import { thunk } from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {  cartReducer } from './reducers/cartReducer';
import { loginUserReducer, signUpUserReducer } from './reducers/userReducer';
import { paymentReducer, placeOrderReducer } from './reducers/orderReducer';

let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
let userdata = localStorage.getItem('userdata') ? JSON.parse(localStorage.getItem('userdata')) : []

console.log(cartItems)

let rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  signUpUserReducer: signUpUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  paymentReducer: paymentReducer
});

let initialState = {
  cartReducer: { cartItems: cartItems },
  loginUserReducer: {userdata: userdata}
}

export let store = createStore(
  rootReducer, initialState, 
  composeWithDevTools(applyMiddleware(thunk))
);



  
  