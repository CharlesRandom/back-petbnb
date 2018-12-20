const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  size:{
    type:String,
    required:true,
    enum:["Small","Medium","Large","X-large"]
  },
  gender:{
    type:String,
    required:true,
    enum:["Male","Female"]
  },
  kind:{
    type:String,
    required:true
  },
  description:String
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Pet', petSchema)