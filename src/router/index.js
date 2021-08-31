import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '@/auth/navRoute'

Vue.use(VueRouter)

const routes = [
  {
    path: '/petg',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  auth(to, from, next)
})

export default router
