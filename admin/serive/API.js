function select(model, params) {
  return new Promise((resolve, reject) => [
    model.find(params, function (err, data) {
      console.log(data)
      console.log(err)
      if (err) {
        resolve({
          code: 404,
          msg: err
        })

      }
      if (data) {
        resolve({
          code: 200,
          data: data
        })
      }

    })
  ])
}

function selectPage(model, params) {
  return new Promise((
    resolve,
    reject
  ) => {
    let obj;
    let params11;
    console.log(params)
    if (params.type) {
      params11 = {
        type: params.type
      }
    } else {
      params11 = {}
    }
    model.find(params11).count((err, data) => {
      obj = data;
      model.find(params11).skip((params.currentPage - 1) * params.pagesize).limit(params.pagesize).exec((err, data) => {
        if (err) {
          resolve({
            code: 404,
            data: [],
            msg: err
          })
        } else {
          resolve({
            code: 200,
            data: data,
            count: obj,
            msg: '查询成功'
          })
        }
        // console.log(data)
      })
    })
    console.log(obj)
  })
}

function add(models, params) {
  return new Promise((resolve, reject) => {
    var dbModel = new models(params);
    console.log(params)
    dbModel.save((err, data) => {
      if (data) {
        resolve({
          code: 200,
          msg: '成功'
        })
      }
      if (err) {
        resolve({
          code: 404,
          msg: err
        })
      }
    })
  })
}

function updata(models, whirerparams, updateParams) {
  return new Promise((resolve, reject) => {

    models.update(whirerparams, updateParams, (err, data) => {
      if (data) {
        resolve({
          code: 200,
          msg: '成功'
        })
      }
      if (err) {
        resolve({
          code: 404,
          msg: err
        })
      }
    })
  })
}

function Delete(models, params) {

  return new Promise((resolve, reject) => {
    models.remove(params, (err, data) => {
      if (data) {
        resolve({
          code: 200,
          msg: '删除成功'
        })
      }
      if (err) {
        resolve({
          code: 404,
          msg: err
        })
      }
    })
  })
}
module.exports = {
  add,
  select,
  updata,
  Delete,
  selectPage
}
