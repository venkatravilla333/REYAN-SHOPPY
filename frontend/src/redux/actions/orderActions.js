
import axios from 'axios'

export let placeOrder = (amount, currency) => {
  console.log(amount)
  return (dispatch, getState) => {
    let currentUser = getState().loginUserReducer.username
    let cartItems = getState().cartReducer.cartItems;
    dispatch({ type: 'PLACE_ORDER_REQUEST' })   

    axios.post('http://localhost:5000/placeorder', {amount, currency, currentUser, cartItems})
      .then((res) => {
        console.log(res)
       dispatch({ type: 'PLACE_ORDER_SUCCESS', payload: res.data });
      
    })
      .catch((error) => {
       dispatch({ type: 'PLACE_ORDER_FAILURE', payload:error  });
      
    })
  }
}
export let validatePayment = (orderdata) => {
  console.log(orderdata)
  return (dispatch, getState) => {
    // let currentUser = getState().loginUserReducer.username
    // let cartItems = getState().cartReducer.cartItems;
    dispatch({ type: 'PAYMENT_REQUEST' })   

    axios.post('http://localhost:5000/validatepayment', orderdata)
      .then((res) => {
        console.log(res)
       dispatch({ type: 'PAYMENT_SUCCESS', payload: res.data });
      
    })
      .catch((error) => {
       dispatch({ type: 'PAYMENT_FAILURE', payload:error  });
      
    })
  }
}