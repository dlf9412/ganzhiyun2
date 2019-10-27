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

router.post(httpUrl.componyAdd, (req, res) => { //添加新闻
  console.log(req.body)
  req.body.data = new Date().format("yyyy-MM-dd hh:mm:ss")
  add(model.compony, req.body).then((response) => {
    res.send(response)
  })
})

router.post(httpUrl.componySelect, (req, res) => { //分页和条件查询新闻
  console.log(req.body)
  // req.body.data = new Date().format("yyyy-MM-dd hh:mm:ss")
  select(model.compony, req.body).then((response) => {
    res.send(response)
  })
})


router.post(httpUrl.componyUpdata, (req, res) => {
  req.body.data = new Date().format("yyyy-MM-dd hh:mm:ss")
  select(model.compony, {
    _id: req.body._id
  }).then(res1 => {
    console.log(121212121333332)
    console.log(res1)
    if (res1.data[0].src !== req.body.src) {
      let file_path = __dirname + "/" + res1.data[0].src.split(host)[1];
      fs.unlink(file_path, function (error) {
        if (error) {
          console.log('删除失败')
        } else {
          delete1(model.homeImg1, {
            url: res1.data[0].src
          }).then(res2 => {
            console.log(1212121212)
            console.log(res2)
            updata(model.compony, {
              _id: req.body._id
            }, req.body).then((response) => {
              res.send(response)
            })
          })

        }
      })
    } else {
      updata(model.compony, {
        _id: req.body._id
      }, req.body).then((response) => {
        res.send(response)
      })
    }

  })

})

router.post(httpUrl.componyDelete, (req, res) => { //删除新闻



  let file_path = __dirname + "/" + req.body.src.split(host)[1];
  fs.unlink(file_path, function (error) {
    if (error) {
      console.log('删除失败')
    } else {
      delete1(model.homeImg1, {
        url: req.body.src
      }).then(res2 => {
        console.log(1212121212)
        console.log(res2)
        delete1(model.compony, {
          _id: req.body._id
        }).then((response) => {
          res.send(response)
        })
      })

    }
  })



  //       delete1(model.compony, req.body).then((response) => {
  //         res.send(response)
  //       })


  //   }
  // } else {
  //   delete1(model.compony, req.body).then((response) => {
  //     res.send(response)
  //   })
  // }



})

// 公司简介
router.post(httpUrl.componyintroAdd, (req, res) => {
  select(model.componyintro, {}).then((res1) => {
    console.log(res1)

    if (res1.data.length == 0) {
      add(model.componyintro, req.body).then((response) => {
        res.send(response)
      })
    } else {
      delete1(model.componyintro, {
        _id: res1.data[0]._id
      }).then((resp) => {
        add(model.componyintro, req.body).then((response) => {
          res.send(response)
        })
      })
    }
  })
})
router.post(httpUrl.componyintroSelect, (req, res) => {
  select(model.componyintro, req.body).then((res1) => {
    res.send(res1)
    console.log(res1)
  })
})


// 企业实力
router.post(httpUrl.enterpriseSelect, (req, res) => {
  select(model.enterprise, req.body).then((res1) => {
    res.send(res1)
    console.log(res1)
  })
})

router.post(httpUrl.enterpriseAdd, (req, res) => {
  console.log(req.body)
  add(model.enterprise, req.body).then(res1 => {
    res.send(res1)
  })
})
router.post(httpUrl.enterpriseDelete, (req, res) => {
  console.log(req.body)
  delete1(model.enterprise, req.body).then(res1 => {
    res.send(res1)
  })
})
router.post(httpUrl.enterpriseUpdata, (req, res) => {
  updata(model.enterprise, {
    _id: req.body._id
  }, req.body).then((response) => {
    res.send(response)
  })
})


module.exports = router
