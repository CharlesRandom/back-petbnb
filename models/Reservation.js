const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema({
  host:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  guest:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  pet:{
    type:Schema.Types.ObjectId,
    ref:'Pet',
    required:true
  },
  startDate:{
    type:Date,
    required:true
  },
  endDate:{
    type:Date,
    required:true
  },
  status:{
    type:String,
    enum:["Inactive", "Active", "Canceled"],
    required:true
  },
  review:String
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Reservation', reservationSchema)