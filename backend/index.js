
// let express = require('express')

import express from 'express'
import { PORT, dbURL } from './config.js'
import mongoose from 'mongoose'
import { Product } from './Models/productModel.js'
import router from './Routes/productsRoute.js'
import cors from 'cors'

let app = express()

app.use(express.json())

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello i am from server')
})

app.use('/', router)

mongoose.connect(dbURL)
  .then(() => {
    console.log('DB connected')
    app.listen(PORT, () => {
      console.log(`Server started in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error)
  })


