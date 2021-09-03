import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/Info'
import store from '../store'
// const Info = r => require.ensure([], () => r(require('@/views/Info.vue')), 'Info')// 同上
import { Message } from "element-ui";
Vue.use(VueRouter)

const routes = [

  // login
  { path: '/login', name: 'login', component: () => import('@/views/Login') },
  // main
  {
    path: '/', name: 'main', component: () => import('@/views/Main'), redirect: "/info", children: [
      // info
      { path: '/info', name: 'info', component: Info },
      // basic
      { path: '/button', name: 'button', component: () => import('@/views/basic/Button') },
      { path: '/layout', name: 'layout', component: () => import('@/views/basic/Layout') },
      { path: '/color', name: 'color', component: () => import('@/views/basic/Color') },
      // data
      { path: '/table', name: 'table', component: () => import('@/views/data/Table') },
      // form
      { path: '/timePicker', name: 'timePicker', component: () => import('@/views/form/TimePicker') },
      { path: '/datePicker', name: 'datePicker', component: () => import('@/views/form/DatePicker') },
      { path: '/transfer', name: 'transfer', component: () => import('@/views/form/Transfer') },
      { path: '/upload', name: 'upload', component: () => import('@/views/form/Upload') },
      { path: '/form', name: 'form', component: () => import('@/views/form/Form') },
      // navigation
      { path: '/navMenu', name: 'navMenu', component: () => import('@/views/navigation/NavMenu') },
      // notice
      // other
      { path: '/calendar', name: 'calendar', component: () => import('@/views/others/Calendar') },
      // plug
      { path: '/wangEditor', name: 'wangEditor', component: () => import('@/views/plug/WangEditor') },
      { path: '/mavonEditor', name: 'mavonEditor', component: () => import('@/views/plug/MavonEditor') },
      { path: '/vxeTable', name: 'vxeTable', component: () => import('@/views/plug/VXETable') },
      { path: '/pdf', name: 'pdf', component: () => import('@/views/plug/PDF') },
    ]
  },
  // error
  { path: '/error', name: 'error', component: () => import('@/views/Error') },
  { path: '*', name: 'error', component: () => import('@/views/Error') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 路由白名单
const whiteList = ['/', '/info', '/login', '/error']

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 判断是是否带有token
  let token = store.getters.getToken
  let { path } = to
  if (whiteList.includes(path)) {
    next()
  } else {
    if (token) {
      next()
    } else {
      Message.error("无权访问该页面, 请登录后访问")
      next({ path: "/login", name: "login", query: { type: 1 } })
    }
  }
})




export default router
