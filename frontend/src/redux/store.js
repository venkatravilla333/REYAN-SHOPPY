


import {applyMiddleware, combineReducers, createStore} from 'redux'
import { getAllProductsReducer, getProductByIdReducer } from './reducers/productReducer'
import { thunk } from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {  cartReducer } from './reducers/cartReducer';
import { signUpUserReducer } from './reducers/userReducer';


let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
console.log(cartItems)

let rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  signUpUserReducer: signUpUserReducer
});

let initialState = {
  cartReducer : {cartItems: cartItems}
}

export let store = createStore(
  rootReducer, initialState, 
  composeWithDevTools(applyMiddleware(thunk))
);



  
  