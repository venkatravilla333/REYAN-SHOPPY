
// let express = require('express')

import express from 'express'
import { PORT, dbURL } from './config.js'
import mongoose from 'mongoose'
import productsRoute from './Routes/productsRoute.js'
import usersRoute from './Routes/usersRoute.js'
import ordersRoute from './Routes/ordersRoute.js'
import cors from 'cors'

let app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello i am from server')
})

app.use('/', productsRoute)
app.use('/', usersRoute)
app.use('/', ordersRoute)


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


