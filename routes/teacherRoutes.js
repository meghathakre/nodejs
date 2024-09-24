const express=require("express");
const route=express.Router();

route.get("/",(req,res)=>{
    res.send("<h1>Teacher Home page</h1>");
})
route.get("/teachersub",(req,res)=>{
    res.send("<h1>teacher subject!!")
})



route.get("/teachersal",(req,res)=>{
    res.send("<h1>Teacher sallery</h1>");
})
route.get("/teacherdep",(req,res)=>{
    res.send("<h1>Teacher Deparmant</h1>")
})


module.exports=route;