const express=require('express');
const model=require('./db')
const router=express.Router();
const httpUrl=require('./url');
const API=require('./API');
const select=API.select;
const add=API.add;
const update=API.updata;
const Delete=API.Delete;
let write;
let errMsg;

router.post(httpUrl.homeImgSelect,(req,res)=>{
    select(model.homeImg1,req.body).then((response)=>{
        console.log(response)
        res.send(response)
    })
})

router.post(httpUrl.homeImgAdd,(req,res)=>{
    
    for(let i=0;i<req.body.length;i++){
        add(model.homeImg1,req.body[i]).then(response=>{
           
            if(response.code==404){
                errMsg=response;
            }else{
                write=response;
            }
            
            if(i=req.body.fileList.length-1){
                if(errMsg!==undefined) res.send(errMsg)
                else res.send(write)
            }
        })
    }
    
    
})

router.post(httpUrl.homeimgUp,(req,res)=>{

    if(req.body.index!==undefined){
        Delete(model.homeImg1,{index:req.body.index}).then(res1=>{
           
            for(let i=0;i<req.body.fileList.length;i++){
                add(model.homeImg1,req.body.fileList[i]).then(response=>{
                    console.log(response)
                    if(response.code==404){
                        errMsg=response;
                    }else{
                        write=response;
                    }
                    if(i=req.body.fileList.length-1){
                        if(errMsg!==undefined) res.send(errMsg)
                        else res.send(write)
                    }
                })
            }
           
        })
    }
})

module.exports=router
