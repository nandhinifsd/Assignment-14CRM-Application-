const express=require("express");
const dbConnect = require("./config/dbConnection");
const app=express();

require("dotenv").config();
const cors=require("cors");
//const path = require("path");
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const userRouter=require("./router/user.router");
const productRouter=require("./router/product.router");
const orderRouter=require("./router/order.router");
//const cartRouter=require("./router/cart.router");
const customerRouter=require("./router/customer.router");

dbConnect();
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/products",productRouter);
app.use("/orders",orderRouter);
app.use("/customers",customerRouter);
//app.use("/cart",cartRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server connected on ${process.env.PORT}`);
})
module.exports=app;