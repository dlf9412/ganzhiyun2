import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login/index'
import home from '@/view/home/index'
import firstPage from '@/view/home/page1'
import secondPage from '@/view/home/page2'
import page3 from '@/view/home/page3'
import page4 from '@/view/home/page3'
import page5 from '@/view/home/page3'
import page6 from '@/view/home/page3'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: login
  }, {
    path: '/home',
    name: 'home',
    component: home,
    redirect:'/home/firstPage',
    children: [{
      path: '/home/firstPage',
      name: 'firstPage',
      component: firstPage,
    },{
      path: '/home/secondPage',
      name: 'secondPage',
      component: secondPage,
    },{
      path: '/home/page3',
      name: 'page3',
      component: page3,
    },{
      path: '/home/page4',
      name: 'page4',
      component: page4,
    },{
      path: '/home/page5',
      name: 'page5',
      component: page5,
    },{
      path: '/home/page6',
      name: 'page6',
      component: page6,
    }]
  }]
})
