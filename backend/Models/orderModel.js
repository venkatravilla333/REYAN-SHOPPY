import mongoose from "mongoose";


var orderSchema = mongoose.Schema({
  username: {
    type: String,
   
  },
  email: {
    type: String,
    // require,
  },

  orderItems: [
    {
      name: {
        type: String,
        // require,
      },
      quantity: {
        type: Number,
        // require,
      },
      _id: {
        type: String,
        // require,
      },
      price: {
        type: Number,
        // require,
      },
    },
  ],
  orderAmount: {
    type: Number,
    // require,
  },
  // orderId: {
  //   type: String,
  //   require
  // },

}, { timestamps: true });


var OrderModel = mongoose.model('orders', orderSchema)

export default OrderModel