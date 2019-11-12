const express = require('express');
const model = require('./db')
const router = express.Router();
const httpUrl = require('./url');
const API = require('./API');
let fs = require('fs');
let formidable = require('formidable');
let sd = require('silly-datetime');
const host = 'http://120.79.222.61:5000'

var path = require("path");

const select = API.select;
const add = API.add;
const update = API.updata;
const Delete = API.Delete;
let write;
let errMsg;

router.post(httpUrl.homeImgSelect, (req, res) => { //图片查找
  select(model.homeImg1, req.body).then((response) => {
    console.log(response)
    res.send(response)
  })
})

router.post(httpUrl.homeImgAdd, (req, res) => { //图片添加
  console.log(req.query.index)
  // if (req.query.index == 3) {

  // }
  dealImg(req).then(reslove => {
    let addObj = {
      index: req.query.index,
      url: host + reslove.data.url,
      name: reslove.data.name
    }
    add(model.homeImg1, addObj).then(response => {
      if (response.code == 200) {
        // response.data = reslove.data
        let obj = {
          code: 200,
          msg: '添加成功',
          data: addObj
        }
        if (req.query.index == 3) {
          res.send({
            'link': addObj.url
          })
          return
        }

        res.send(obj)
        // res.send(response)
      } else {
        res.send(response)
      }
    })

    //   console.log(res)
  })

})

router.post(httpUrl.homeImgDelet, (req, res) => { //图片删除
  console.log(11115555)
  console.log(req.body)
  let file_path = __dirname + "/" + req.body.url.split(host)[1];
  fs.unlink(file_path, function (error) {
    if (error) {
      console.log('删除失败')
    } else {
      Delete(model.homeImg1, req.body).then(res1 => {
        res.send(res1)
      })
      console.log('删除成功')
    }
  })

})
// function dealImgIndex3() {

// }



// router.post(httpUrl.homeimgUp,(req,res)=>{

//     if(req.body.index!==undefined){
//         Delete(model.homeImg1,{index:req.body.index}).then(res1=>{

//             for(let i=0;i<req.body.fileList.length;i++){
//                 add(model.homeImg1,req.body.fileList[i]).then(response=>{
//                     console.log(response)
//                     if(response.code==404){
//                         errMsg=response;
//                     }else{
//                         write=response;
//                     }
//                     if(i=req.body.fileList.length-1){
//                         if(errMsg!==undefined) res.send(errMsg)
//                         else res.send(write)
//                     }
//                 })
//             }

//         })
//     }
// })

function dealImg(req) {
  return new Promise((reslove, reject) => {
    let datas = {};
    datas.code = '0';
    datas.message = '上传图片成功';
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    let PUBLIC_PATH = '../public';
    console.log("PUBLIC_PATH:" + PUBLIC_PATH);
    console.log(__dirname);
    let filedr = "/upload";
    form.uploadDir = path.join(__dirname + filedr);
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    //处理图片
    form.parse(req, function (err, fields, files) {
      console.log(files.file);
      var filename = files.file.name
      var nameArray = filename.split('.');
      var type = nameArray[nameArray.length - 1];
      var name = '';
      for (var i = 0; i < nameArray.length - 1; i++) {
        name = name + nameArray[i];
      }
      var date = new Date();
      // var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
      //var avatarName = '/' + name + '_' + date.getTime() + '.' + type;
      var avatarName = '/' + date.getTime() + '.' + type;
      var newPath = form.uploadDir + avatarName;
      fs.renameSync(files.file.path, newPath); //重命名
      console.log(newPath)
      // res.send({data:"/upload/"+avatarName})
      let data = {};
      data.name = avatarName;
      data.url = filedr + avatarName;
      datas.data = data
      reslove(datas)
      // res.send(datas);
      return;
    })

  })


}

//图片加载,
router.get('/upload/*', function (req, res) {
  console.log(req.url)
  let file_path = __dirname + "/" + req.url;

  fs.readFile(file_path, 'binary', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      //console.log(data);
      console.log("输出文件");
      //不加这句，页面可能会乱码，图片包含中文也会乱码
      res.writeHead(200, {
        'Content-Type': 'image/jpeg'
      });
      res.write(data, 'binary');
      res.end();
    }
  })
})

module.exports = router
