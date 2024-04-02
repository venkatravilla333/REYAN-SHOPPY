import React from 'react'
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'

function Checkout({amount}) {
let dispatch = useDispatch()
  let onToken = (token) => {
   dispatch(amount, token)
  }
  return (
    <div>
      <StripeCheckout
        token={onToken}
        amount={amount * 100}
        currency='INR'
        shippingAddress
        name="This is my card"
        stripeKey='pk_test_51P13sVSGGMHgvHeag8keowkIm3RH55gVqRS80MtZZdpqoVbNs94jO2VMMz4XkYbqJl7jTpannvOxEFwe2RkdOlhp00zqtF0PXM'
      >
        <button className='btn btn-dark'>Buy Now</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout