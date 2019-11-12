// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  get,
  post
} from './assets/js/httpAPI'
import httpUrl from './assets/js/httpUrl'
// 引入 Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min')

//引入中文语言包
require('froala-editor/js/languages/zh_cn')

//引入 Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css') //此处可在index.html中引入：font-awesome cdn地址：<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import jQuery from 'jquery'
import VueFroala from 'vue-froala-wysiwyg'
window.$ = jQuery
Vue.use(VueFroala)


Vue.config.productionTip = false
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.url = httpUrl;
Vue.use(elementUI)
/* eslint-disable no-new */

const whiteList = ['/login']; //不需要登录能访问的path
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  var userInfo = sessionStorage.getItem('userInfoStorage'); //获取缓存看是否登录过
  console.log(userInfo)
  if (whiteList.indexOf(to.path) < 0) { //访问了需要登录才能访问的页面

    if (userInfo) { //登录过来直接进去
      next();
    } else {
      if (to.path == '/login') {
        next();
      } else {
        next('/login');
      }
    }
  } else {
    console.log(from)
    next();
  }
});


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
