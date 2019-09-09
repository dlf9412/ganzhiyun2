// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {get,post} from './assets/js/httpAPI'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import httpUrl from './assets/js/httpUrl'

Vue.config.productionTip = false
Vue.prototype.$get=get;
Vue.prototype.$post=post;
Vue.prototype.url=httpUrl;
Vue.use(elementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
