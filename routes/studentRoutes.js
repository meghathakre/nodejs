const express=require("express");
const route=express.Router();

route.get("/",(req,res)=>{
    res.send("<h1>students Home page</h1>");
})
route.get("/stuinfo",(req,res)=>{
    res.send("<h1>Students Information!!")
})



route.get("/stufees",(req,res)=>{
    res.send("<h1>Students Fees</h1>");
})
route.get("/stuclass",(req,res)=>{
    res.send("<h1>Student class</h1>")
})
route.get("/sturesult",(req,res)=>{
    res.send("<h1>Student result</h1>")
})
module.exports=route;