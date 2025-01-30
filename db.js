const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://anurag:anurag@cluster0.bdgyb.mongodb.net/Acompany?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{console.log("connected to db")})
.catch((err)=>{console.log(err)})