
import axios from 'axios'

export let placeOrder = (amount, currency) => {
  return (dispatch, getState) => {
    let currentUserEmail = getState().loginUserReducer.userdata.email
    let currentUserName = getState().loginUserReducer.userdata.username
    console.log(currentUserName)
    console.log(currentUserEmail)
    let demoItems = getState().cartReducer.cartItems;

    var cartItems = new Array()

    for (var i = 0; i < demoItems.length; i++){
      var item = {
        name: demoItems[i].name,
        quantity: demoItems[i].quantity,
        price: demoItems[i].price,
        _id: demoItems[i]._id
      }
      cartItems.push(item)
    }
    dispatch({ type: 'PLACE_ORDER_REQUEST' })   

    axios.post('http://localhost:5000/placeorder', {amount, currency, currentUserEmail,currentUserName, cartItems})
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