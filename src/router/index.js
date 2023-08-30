import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FishDetail from '../views/FishDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fishdetail/:id',
    name: 'fishdetail',
    component: FishDetail 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
