const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  location:{
    type:{
      type:String,
      default:"Point"
    },
    coordinates:[Number]
  },
  street:{
    type:String,
    required:true
  },
  houseNumber:{
    type:Number,
    required:true
  },
  aptNumber:String,
  city:{
    type:String,
    required:true
  },
  state:{
    type:String,
    required:true
  },
  zipcode:Number
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Address', addressSchema)