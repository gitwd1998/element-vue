import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/button', component: () => import('@/views/basic/Button') },
  { path: '/table', component: () => import('@/views/data/Table') },
  { path: '/timePicker', component: () => import('@/views/form/TimePicker') },
  { path: '/datePicker', component: () => import('@/views/form/DatePicker') },
  { path: '/transfer', component: () => import('@/views/form/Transfer') },
  { path: '/editor', component: () => import('@/views/plug/Editor') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
