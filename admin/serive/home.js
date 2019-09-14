const express=require('express');
const model=require('./db')
const router=express.Router();
const httpUrl=require('./url');
const API=require('./API');
const select=API.select;
const add=API.add;
const update=API.updata;


router.post(httpUrl.homeImgSelect,(req,res)=>{
    select(model.homeImg1,req.body).then((response)=>{
        console.log(response)
        res.send(response)
    })
})

router.post(httpUrl.homeImgAdd,(req,res)=>{
    console.log(req.body)
    for(let i=0;i<req.body.length;i++){
        add(model.homeImg1,req.body[i]).then(response=>{
            console.log(response)
            res.send(response)
        })
    }
    
})

router.post(httpUrl.homeImgUpdate,(req,res)=>{
    console.log(req.body)
    // update(model.homeImg,req.body).then(response=>{
    //     console.log(response)
    //     res.send(response)
    // })
})

module.exports=router
