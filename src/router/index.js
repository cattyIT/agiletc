import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'
import quit from '../components/quit.vue'

const originPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
return originPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/quit',
    name: 'quit',
    component: quit
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router