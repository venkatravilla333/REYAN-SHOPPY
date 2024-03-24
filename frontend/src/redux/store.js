


import {applyMiddleware, combineReducers, createStore} from 'redux'
import { getAllProductsReducer, getProductByIdReducer } from './reducers/productReducer'
import { thunk } from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { addToCartReducer } from './reducers/cartReducer';



let rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer
  
});



export let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);