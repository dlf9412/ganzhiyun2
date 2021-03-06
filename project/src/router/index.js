import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/page/home'
import company from '@/view/page/company'
import newsList from '@/view/page/newsList'
import product from '@/view/page/product'
import cooperate from '@/view/page/cooperate'
import callUs from '@/view/page/callUs'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/company',
    name: 'company',
    component: company
  }, {
    path: '/newsList',
    name: 'newsList',
    component: newsList
  }, {
    path: '/product',
    name: 'product',
    component: product
  }, {
    path: '/cooperate',
    name: 'cooperate',
    component: cooperate
  }, {
    path: '/callUs',
    name: 'callUs',
    component: callUs
  }]
})
