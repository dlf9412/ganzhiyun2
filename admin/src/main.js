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

Vue.config.productionTip = false
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.url = httpUrl;
Vue.use(elementUI)
/* eslint-disable no-new */

// const whiteList=['/login'];//不需要登录能访问的path
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach');
//   var userInfo= JSON.parse(sessionStorage.getItem('userInfoStorage'));//获取缓存看是否登录过
//   if(whiteList.indexOf(to.path)<0){//访问了需要登录才能访问的页面
//     if(userInfo){//登录过来直接进去
//       next();
//     }else{
//       if(to.path=='/login'){
//         next();
//       }else{
//         next('/login');
//       }
//     }
//   }
//   else{
//     next();
//   }
// });


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
