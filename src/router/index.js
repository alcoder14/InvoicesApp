import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InvoiceView from '../views/InvoiceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: InvoiceView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
