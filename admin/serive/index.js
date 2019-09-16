const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');

const models=require('./db');
const httpUrl=require('./url');
const login=require('./login');
const home=require('./home')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});



app.use(bodyparser.json({limit:'50mb'}))//post转译
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieParser())

app.use(session({secret:'test',name:'user',cookie:{
    maxAge:60000
}}))

app.use(login);
app.use(home);

app.post('/user/post',(req,res)=>{
    console.log(req);res.send('post访问成功')
})

app.listen(5000,()=>{
    console.log('服务器启动')
})