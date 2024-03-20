
import mongoose from 'mongoose'


let reviewSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId
  }, 
  name: {
    type: String,
    required: true
  }, 
  comment: {
    type: String
  },
  rating: {
    type: Number,
    required: true
  }
})


let productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }, 
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }, 
  countInstock: {
    type: Number,
    required: true
  }, 
  rating: {
    type: Number,
    required: true
  },
  reviews: [reviewSchema]
})

export let Product =  mongoose.model('products', productSchema)