const host = 'http://172.17.27.238:5000'

export default {
  login: host + '/user/login',
  homeImgSelect: host + '/user/ImgSelect',
  homeImgAdd: host + '/user/imgAdd', //图片添加，index:1开头首页轮播图和广告位图片，3 为新闻中心图片，4为产品图片
  homeImgUpdate: host + '/user/imgUpdate',
  homeImgDelete: host + '/user/imgDelete',
  newlistAdd: host + '/user/newlist/add', //新闻添加
  newlistSelect: host + '/user/newlist/select', //新闻查询
  newlistUpdata: host + '/user/newlist/updata', //更新新闻
  newlistDelete: host + '/user/newlist/delete', //更新新闻
  productAdd: host + '/user/product/add',
  productDelete: host + '/user/product/delete',
  productSelect: host + '/user/product/select',
  productUpdata: host + '/user/product/updata',
  cooporateAdd: host + '/user/cooporate/add',
  cooporateDelete: host + '/user/cooporate/delete',
  cooporateUpdata: host + '/user/cooporate/updata',
  cooporateSelect: host + '/user/cooporate/select',
  componyAdd: host + '/user/compony/add',
  componyDelete: host + '/user/compony/delete',
  componyUpdata: host + '/user/compony/updata',
  componySelect: host + '/user/compony/select',
  componyintroAdd: host + '/user/componyintro/add',
  componyintroSelect: host + '/user/componyintro/select',
  enterpriseAdd: host + '/user/compony/enterprise/add',
  enterpriseDelete: host + '/user/compony/enterprise/delete',
  enterpriseUpdata: host + '/user/compony/enterprise/updata',
  enterpriseSelect: host + '/user/compony/enterprise/select',

  callMeAdd: host + '/user/compony/callMe/add',
  callMeDelete: host + '/user/compony/callMe/delete',
  callMeUpdata: host + '/user/compony/callMe/updata',
  callMeSelect: host + '/user/compony/callMe/select',

}
