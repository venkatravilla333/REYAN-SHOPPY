
import stripe from 'stripe'


import express from 'express'

let router = express.Router()

import { v4 as uuidv4 } from 'uuid';

let Stripe = stripe('sk_test_51P13sVSGGMHgvHeaZuRNeLp6GO5fmVHrRXJubcyUTLzwPt2h8Xf7sLJdYZuOuYunlsy08njSZfTa9fOcI1vRHWmT00FuqchVwd')

router.post('/placeorder', async (req, res) => {
  console.log(req.body)
  let {token , amount, currentUser, cartItems} = req.body

  let customer = await Stripe.customers.create({
    email: token.email,
    source: token.id
  })
  let payment = await Stripe.charges.create({
    amount: amount * 100,
    currency: 'INR',
    customer: customer.id,
    receipt_email: token.email

  }, {
    idempotencyKey: uuidv4()
  })
  if (payment) {
    res.send('payment successfull')
    
  } else {
    res.send('payment failed')
  }
})

export default router