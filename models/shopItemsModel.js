const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shopItemsSchema = new Schema({
  shopName:{
    type:String,
    required:true
  },
  title: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  quantity:{
    type:Number,
    default:1
  }
}, { timestamps: true })

module.exports = mongoose.model('ShopItems', shopItemsSchema)