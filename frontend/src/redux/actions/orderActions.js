


export let placeOrder = (token, amount) => {
  return (dispatch, getState) => {
    let currentUser = getState().loginUserReducer.username
    let cartItems = getState().cartReducer.cartItems;
    dispatch({ type: 'PLACE_ORDER_REQUEST' })   

    axios.post('http://localhost:5000/placeorder', {token, amount, currentUser, cartItems})
      .then(() => {
       dispatch({ type: 'PLACE_ORDER_SUCCESS' });
      
    })
      .catch(() => {
       dispatch({ type: 'PLACE_ORDER_FAILURE' });
      
    })
  }
}