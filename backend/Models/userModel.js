import mongoose from 'mongoose'

let userSchema = mongoose.Schema({
  username: {
    type: String,
    required : true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String,
    required: true
  },

}, { timestamps: true })

export let User = mongoose.model('User', userSchema)