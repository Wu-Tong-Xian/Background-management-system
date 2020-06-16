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
      
      {
        path: '/published',
        name: 'published',
        component: () => import(/* webpackChunkName: "about" */ '../views/published/published.vue'),
        meta:{
          title:'已发布',
        },
      },
      {
        path: '/census',
        name: 'census',
        component: () => import(/* webpackChunkName: "about" */ '../views/census/census.vue'),
        meta:{
          title:'统计',
        },
      },
      {
        path: '/publications',
        name: 'publications',
        component: () => import(/* webpackChunkName: "about" */ '../views/publications/publications.vue'),
        meta:{
          title:'发表文章',
        },
      },
      {
        path: '/tabs',
        name: 'tabs',
        component: () => import(/* webpackChunkName: "about" */ '../views/tabs/tabs.vue'),
        meta:{
          title:'标签页',
        },
      },
      {
        path: '/export',
        name: 'export',
        component: () => import(/* webpackChunkName: "about" */ '../views/export/export.vue'),
        meta:{
          title:'导出excel',
        },
      },
      {
        path: '/imageUpload',
        name: 'imageUpload',
        component: () => import(/* webpackChunkName: "about" */ '../views/imageUpload/imageUpload.vue'),
        meta:{
          title:'图片上传',
        },
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "about" */ '../views/detail/detail.vue'),
        meta:{
          title:'详情页',
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
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/register'),
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
