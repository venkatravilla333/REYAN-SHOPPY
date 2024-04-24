

import Razorpay from 'razorpay'
import express from 'express'

let router = express.Router()

import { key_id, key_secret } from '../config.js';

router.post('/placeorder', async (req, res) => {
  
  try {
    var razorpay = new Razorpay({
      key_id: key_id,
      key_secret: key_secret,
    });

    let values = req.body;

    let order = await razorpay.orders.create(values);

    if (!order) {
      return res.status(500).send('Server Error')
    }
    return res.json(order)

  } catch (error) {
      console.log(error)
      return res.status(500).send('Server Error');
  }
  
})

export default router