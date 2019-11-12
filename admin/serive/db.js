const mongoose = require('mongoose')

// 连接MongoDB数据库
// 参数1：要连接的数据库地址 默认localhost:27017
// 参数2：回调函数，用于判断是否连接成功
mongoose.connect('mongodb://localhost:27017/ganzhiyun', err => {
  if (err) console.log('数据库连接失败');
  else console.log('数据库连接成功')
})

const user = new mongoose.Schema({ //用户信息库
  username: String,
  password: String,
  userImg: {
    type: String,
    default: '111',
    validate: function () {

    }
  }
})


const homeimg = new mongoose.Schema({ //图片路径存储库
  index: Number,
  url: String,
  name: String
})

const newlist = new mongoose.Schema({
  type: String,
  html: String,
  title: String,
  data: String

})

const product = new mongoose.Schema({
  detail: String,
  productNum: String,
  productImgUrl: Array,
  title: String
})

const cooporate = new mongoose.Schema({
  html: String,
  type: String
})

const compony = new mongoose.Schema({
  name: String,
  src: String,
  index: Number,
  detail: String,
  position: String
})

const componyintro = new mongoose.Schema({
  name: String,
  detail: String,
  intro: String
})

const enterprise = new mongoose.Schema({
  title: String,
  detail: String
})
const callme = new mongoose.Schema({
  merchant: String,
  aftersales: String,
  fax: String,
  address: String,
  callMeImgUrl: Object
})
const cooperatemodel = new mongoose.Schema({
  title: String,
  name: String
})
// 要导出的模型
const models = {
  login: mongoose.model('user', user, 'user'),
  homeImg1: mongoose.model('homeimg', homeimg, 'homeimg'),
  newlist: mongoose.model('newlist', newlist, 'newlist'),
  product: mongoose.model('product', product, 'product'),
  cooporate: mongoose.model('cooporate', cooporate, 'cooporate'),
  compony: mongoose.model('compony', compony, 'compony'),
  componyintro: mongoose.model('componyintro', componyintro, 'componyintro'),
  enterprise: mongoose.model('enterprise', enterprise, 'enterprise'),
  callme: mongoose.model('callme', callme, 'callme'),
  cooperatemodel: mongoose.model('cooperatemodel', cooperatemodel, 'cooperatemodel')
}


module.exports = models
