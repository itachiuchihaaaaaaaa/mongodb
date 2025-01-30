const mongoose = require("mongoose")
const productschema=mongoose.Schema({
    productname:String,
    productcat:String,
    productprize:Number,
    productquantity:Number
})

const productModel = mongoose.model("product",productschema)
module.exports=productModel