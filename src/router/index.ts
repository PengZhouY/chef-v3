import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './rotes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
