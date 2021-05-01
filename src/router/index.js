import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/Info'

Vue.use(VueRouter)

const routes = [
  // info
  { path: '/', component: Info },
  // basic
  { path: '/button', component: () => import('@/views/basic/Button') },
  { path: '/layout', component: () => import('@/views/basic/Layout') },
  { path: '/color', component: () => import('@/views/basic/Color') },
  // data
  { path: '/table', component: () => import('@/views/data/Table') },
  // form
  { path: '/timePicker', component: () => import('@/views/form/TimePicker') },
  { path: '/datePicker', component: () => import('@/views/form/DatePicker') },
  { path: '/transfer', component: () => import('@/views/form/Transfer') },
  { path: '/upload', component: () => import('@/views/form/Upload') },
  { path: '/form', component: () => import('@/views/form/Form') },
  // navigation
  { path: '/navMenu', component: () => import('@/views/navigation/NavMenu') },
  // notice
  // other
  { path: '/calendar', component: () => import('@/views/others/Calendar') },
  // plug
  { path: '/editor', component: () => import('@/views/plug/Editor') },
  { path: '/mavonEditor', component: () => import('@/views/plug/MavonEditor') },
  { path: '/vxeTable', component: () => import('@/views/plug/VXETable') },

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


// 导航守卫




export default router
