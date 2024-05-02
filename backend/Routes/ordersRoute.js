
import Razorpay from 'razorpay'
import express from 'express'
import crypto from 'crypto'
import OrderModel from '../Models/orderModel.js'

let router = express.Router()

import { key_id, key_secret } from '../config.js';

router.post('/placeorder', async (req, res) => {
  
  try {
    var razorpay = new Razorpay({
      key_id: key_id,
      key_secret: key_secret,
    });

    console.log(req.body)

    let options = {
      amount: Number(req.body.amount*100),
      currency: req.body.currency.currency,
    } 
    console.log(options)
      

    let Order = await razorpay.orders.create(options);
    console.log(Order)

    if (Order) {
      var newOrder = {
        username: req.body.currentUserName,
        email: req.body.currentUserEmail,
        orderItems: req.body.cartItems,
        orderAmount: req.body.amount,
      }
      var dbOrder = OrderModel.create(newOrder)
      if (dbOrder) {
        res.send('order created in db')
      }
        
      

    } else {
      return res.status(500).send('Server Error')
    }

  } catch (error) {
      console.log(error)
      return res.status(500).send('Server Error');
  }
  
})

router.post('/validatepayment', async(req, res) => {
  var { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  console.log('data from body', req.body)

  var sha = crypto.createHmac("sha256", key_secret)

  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`)

  var decode_signature = sha.digest("hex")

  if (decode_signature == razorpay_signature) {
     return res.json({
       message: 'Payment success',
       orderId: razorpay_order_id,
       paymentId: razorpay_payment_id,
     });
    } else {
      return res.status(400).send('Payment not success')
  }
  
})

export default router