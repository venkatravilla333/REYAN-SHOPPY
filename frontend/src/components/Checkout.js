// PaymentComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder, validatePayment } from '../redux/actions/orderActions';

const Checkout = ({amount}) => {
  const dispatch = useDispatch();
  const orderdata = useSelector((state) => state.placeOrderReducer);
  const user = useSelector((state) => state.loginUserReducer);
  console.log(user)

  console.log(orderdata)

  var { loading, order } = orderdata
  
  const paymentdata = useSelector((state) => state.paymentReducer);
  console.log(paymentdata)
  
  var { loading, success } = paymentdata
  console.log(success)


  const [rzp, setRzp] = useState(null);

  const handlePayment = () => {
    dispatch(placeOrder(amount, {currency: 'INR'})); 

    const options = {
      key: 'rzp_test_06q1mJXO4n4bXr',
      amount: amount*100,
      currency: 'INR',
      name: 'Reyan Soft',
      description: 'This is test transaction',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7qsbwN8LHKzsXeU-uUb8Ve5VLhMlfGM8Yg&s',
      order_id: order.id,
      handler: async function (response) {
        console.log(response);
        dispatch(validatePayment(response));
      },
      prefill: {
        name: 'Venkat',
        email: 'venkat@gmail.com',
        contact: '8885659590',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const instance = new window.Razorpay(options);
    instance.open();
    setRzp(instance);
  };

  return (
    <div>
      <button onClick={handlePayment} className='btn btn-primary' >
        Buy now
      </button>
     
    </div>
  );
};

export default Checkout;
