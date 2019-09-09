const express=require('express');
const model=require('./db')
const router=express.Router();
const httpUrl=require('./url');
const API=require('./API');
const select=API.select;
const add=API.add;


router.post(httpUrl.homeImgSelect,(req,res)=>{
    select(model.homeImg,req.body).then((response)=>{
        console.log(response)
        res.send(response)
    })
})

module.exports=router
