// PaymentComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder, validatePayment } from '../redux/actions/orderActions';


const Checkout = ({amount}) => {
  const dispatch = useDispatch();
  const orderdata = useSelector((state) => state.placeOrderReducer);

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
      amount: order.amount, // Example amount in paise (1000 paise = ₹10)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo.png',
      order_id: order.id,
      handler: async function (response) {
        console.log(response);
       dispatch(validatePayment(response))
      },
      prefill: {
        name: 'Reyan Soft',
        email: 'venkat@gmail.com',
        contact: '9999999999',
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
