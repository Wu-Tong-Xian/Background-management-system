import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import layout from '../views/layout/layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children:[
      {
        path:'/',
        name:'/home',
        component:home,
        meta:{
          title:'首页',
        },
      },

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login'),
    meta:{
      title:'登录页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login'),
    meta:{
      title:'登录页',
    },
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../../err/err')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
