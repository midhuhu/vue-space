import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/echarts',
      name: 'echarts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EchartsView.vue')
    },
    {
      path: '/map_gd',
      name: 'Map_gd',
      component: () => import('../views/MapView_guangdong.vue')
    },
    {
      path: '/map_nx',
      name: 'Map_nx',
      component: () => import('../views/MapView_ningxia.vue')
    },
    {
      path: '/map_china',
      name: 'Map_china',
      component: () => import('../views/MapView_china.vue')
    },
    {
      path: '/pie_3d',
      name: 'Pie_3d',
      component: () => import('../views/MapView_pie_3d.vue')
    },
    {
      path: '/pie_3d_line',
      name: 'Pie_3d_line',
      component: () => import('../views/MapView_pie_3d_line.vue')
    }
  ]
})

export default router
