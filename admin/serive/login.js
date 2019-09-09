const express=require('express');
const model=require('./db')
const router=express.Router();
const httpUrl=require('./url');
const API=require('./API');
const select=API.select;
const add=API.add;

// 登录
router.post(httpUrl.login,(req,res)=>{
    select(model.login,req.body).then((response)=>{
        console.log(req.session)
        console.log(response)
        if(response.data.length>0){
            req.session.user={
                username:response.data[0].username
            }
            res.send({
                code:200
            })
        }else{
            res.send({code:404,msg:'该用户不存在或者密码不正确'})
        }
    })
})

router.post(httpUrl.register,(req,res)=>{
  select(model.login,{
      username:req.body.username
  }).then((response)=>{
      if(response.data.length>0){
          res.send({
              code:201,
              msg:'该用户已经存在，请重新注册'
          })
      }else{
          add(model.login,req,body).then((response)=>{
              res.send(response)
          })
      }
  })
})
module.exports=router