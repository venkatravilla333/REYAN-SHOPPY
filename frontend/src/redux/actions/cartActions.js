
import { store } from "../store"

export let addToCart = (product, quantity) =>  {
  // console.log(quantity)
  let cartItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    countInStock: product.countInStock,
    quantity: quantity
    
  }
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
     
  }
  
}

export let deleteFromCart = (item) => {
  return (dispatch) => {
   return dispatch({ type: 'DELETE_FROM_CART', payload: item })
  }
}