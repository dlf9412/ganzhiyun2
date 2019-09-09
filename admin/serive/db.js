const mongoose=require('mongoose')

// 连接MongoDB数据库
// 参数1：要连接的数据库地址 默认localhost:27017
// 参数2：回调函数，用于判断是否连接成功
mongoose.connect('mongodb://localhost:27017/ganzhiyun',err=>{
    if(err)console.log('数据库连接失败');
    else console.log('数据库连接成功')
})

const user=new mongoose.Schema({
    username:String,
    password:String,
    userImg:{
        type:String,
        default:'111',
        validate:function(){

        }
    }
})


const homeImg=new mongoose.Schema({
    index:Number,
    base64Code:String
})
// 要导出的模型
const models={
    login:mongoose.model('user',user,'user'),
    homeImg:mongoose.model('homeImg',homeImg,'homeImg')
}


module.exports=models