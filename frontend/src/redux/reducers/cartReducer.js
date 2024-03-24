


export let addToCartReducer = (state = { cartItems: [] }, action) => {
  console.log(action.payload)
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
    default:
      return state
  }
  
}