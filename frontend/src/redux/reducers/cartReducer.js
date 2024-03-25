
import { store } from "../store"

export let cartReducer = (state = { cartItems: [] }, action,) => {
  // console.log(action.payload)
  switch (action.type) {
    case 'ADD_TO_CART':

      let alreadyExist = state.cartItems.find((item) => item._id == action.payload._id)
      if (alreadyExist) {
        return {
          ...state,
          cartItems: [...state.cartItems.map((item)=> item._id == action.payload._id ? action.payload : item)]
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      }
      break;
    case 'DELETE_FROM_CART':

      let remainingItemsAfterDelete = state.cartItems.filter((item) => item._id !== action.payload._id)
      
      localStorage.setItem('cartItems', JSON.stringify(remainingItemsAfterDelete))

      return {
        ...state,
        cartItems: remainingItemsAfterDelete
      }
        
      
      break
    
    default:
      return state
  }
  
}


