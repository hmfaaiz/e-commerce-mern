const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const userRoute=require('./routes/user.js');
const productRoute=require('./routes/product.js');
const cartRoute=require('./routes/cart.js');
const orderRoute=require('./routes/order.js');
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(
    ()=>
        console.log("Successful"))
    .catch((err)=>{
        console.log(err);
    })



app.listen(process.env.PORT, () => {
    console.log("Server is running")
})
app.use(express.json());
app.use('/api/users',userRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/order',orderRoute)
// app.get("/api",()=>{
//     console.log("Api is got 2")

// })