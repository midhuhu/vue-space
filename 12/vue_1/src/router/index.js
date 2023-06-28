import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Three from '../views/Three.vue'
import Four from '../views/Four.vue'
import Five from '../views/Five.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/three',
    name: 'Three',
    component: Three
  },
  {
    path: '/four',
    name: 'Four',
    component: Four
  },
  {
    path: '/five',
    name: 'Five',
    component: Five
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
