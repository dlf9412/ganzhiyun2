// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import {get,post} from './assets/js/httpAPI'
import httpUrl from './assets/js/httpUrl'



Vue.config.productionTip = false;
Vue.use(elementUi);
Vue.prototype.$get=get;
Vue.prototype.$post=post;
Vue.prototype.url=httpUrl;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
