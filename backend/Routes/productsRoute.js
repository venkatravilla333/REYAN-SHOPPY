
import express from 'express'
import { Product } from '../Models/productModel.js';

let router = express.Router()

router.get('/products', async (req, res) => {
  try {
    let allProducts = await Product.find({});
    // console.log(allProducts)
    return res.status(200).send(allProducts);
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
});
export default router