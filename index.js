const express = require('express')
const productModel = require('./model/product')
const app = express()

var port=4444
app.use(express.json())
require("./db")
app.post('/',(req,res)=>{
    try {
        productModel(req.body).save()
        res.send("data added successfully")
    } catch (error) {
        res.send(error)
    }
})
app.get('/',async(req,res)=>{
    try {
        var data=await productModel.find()
        res.send(data) 
    } catch (error) {
        res.send(error)
    }
})

app.delete('/remove/:id',async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.params.id)
        res.send("Deleted succesfully")
    } catch (error) {
        res.send(error)
    }
})

//to update data
app.put('/edit/:id',async(req,res)=>{
    try {
        var data=await productModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"updated successfully",data})
    } catch (error) {
        res.send(error)
    }
})


app.listen(port,(req,res)=>{
    console.log(`server is listening in port ${port}`)
})
 
