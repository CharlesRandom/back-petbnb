const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bankSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  name:{
    type:String,
    required:true
  },
  clabe:{
    type:Number,
    required:true
  }
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Bank', bankSchema)