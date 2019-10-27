const express = require('express');
const model = require('./db')
const router = express.Router();
const httpUrl = require('./url');
const API = require('./API');
const add = API.add;
const selectPage = API.selectPage;
const select = API.select;
const Date = require('./common');
const updata = API.updata;
const delete1 = API.Delete;
let fs = require('fs');
const host = 'http://120.79.222.61:5000'

router.post(httpUrl.newlistAdd, (req, res) => { //添加新闻
  console.log(req.body)
  req.body.data = new Date().format("yyyy-MM-dd hh:mm:ss")
  add(model.newlist, req.body).then((response) => {
    res.send(response)
  })
})

router.post(httpUrl.newlistSelect, (req, res) => { //分页和条件查询新闻
  console.log(req.body)
  // req.body.data = new Date().format("yyyy-MM-dd hh:mm:ss")
  selectPage(model.newlist, req.body).then((response) => {
    res.send(response)
  })
})


router.post(httpUrl.newlistUpdata, (req, res) => {
  req.body.data = new Date().format("yyyy-MM-dd hh:mm:ss");
  updata(model.newlist, {
    _id: req.body._id
  }, req.body).then((response) => {
    res.send(response)
  })
})

router.post(httpUrl.newlistDelete, (req, res) => { //删除新闻
  console.log(req.body)
  let obj = [];
  let img = req.body.html.split("src=");
  for (let i = 0; i < img.length; i++) {
    if (i < img.length - 1) {
      obj.push(
        img[i + 1]
        .split(" ")[0]
        .replace('"', "")
        .replace('"', "")
      );
    }
  }
  console.log(obj)
  if (obj.length > 0) {
    for (let i = 0; i < obj.length; i++) {
      let file_path = __dirname + "/" + obj[i].split(host)[1];
      fs.unlink(file_path, function (error) {
        if (error) {
          console.log('删除失败')
        } else {
          delete1(model.homeImg1, {
            url: obj[i]
          }).then(res1 => {
            // res.send(res1)
          })
          console.log('删除成功')
        }
      })
      if (i == obj.length - 1) {
        delete1(model.newlist, req.body).then((response) => {
          res.send(response)
        })

      }
    }
  } else {
    delete1(model.newlist, req.body).then((response) => {
      res.send(response)
    })
  }



})

module.exports = router
