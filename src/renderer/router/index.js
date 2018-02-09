import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
// import Defualt from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'landing-page',
      component: Home,
      children: [
        {path: '/', component: () => import('@/views/query')},
        {path: '/user', component: () => import('@/views/user')},
        {path: '/task', component: () => import('@/views/task')},
        {path: '/order', component: () => import('@/views/order')}
      ]
    }
  ]
})
