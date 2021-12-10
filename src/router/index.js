import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tour',
    name: 'TourList',
    component: () => import('../views/TourList.vue')
  },
  {
    path: '/tour/:id',
    name: 'TourDetail',
    component: () => import('../views/TourItems.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
