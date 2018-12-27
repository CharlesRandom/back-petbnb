const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  name:String,
  email:{
    type:String,
    unique:true
  },
  pets:[
    {
      type:Schema.Types.ObjectId,
      ref:'Pet'
    }
  ],
  host:Boolean,
  phone:Number,
  address:{
    type:Schema.Types.ObjectId,
    ref:'Address'
  },
  photoURL:String,
  cover:String,
  price:Number,
  homeType:{
    type:String,
    enum:["House","Apt","Other"]
  },
  bank:{
    type:Schema.Types.ObjectId,
    ref:'Bank'
  },
  title:String,
  description:String,
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

userSchema.plugin(plm,{usernameField:'email'})

module.exports = mongoose.model('User', userSchema)