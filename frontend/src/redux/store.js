


import {applyMiddleware, combineReducers, createStore} from 'redux'
import { getAllProductsReducer } from './reducers/productReducer'
import { thunk } from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'



let rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer
})



export let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);