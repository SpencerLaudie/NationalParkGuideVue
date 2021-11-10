import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Parks from '../views/Parks.vue'
import Park from '../views/Park.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/parks',
    name: 'Parks',
    component: Parks
  },
  {
    path: '/park',
    name: 'Park',
    component: Park
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
