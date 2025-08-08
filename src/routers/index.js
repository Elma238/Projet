import { createRouter, createWebHistory } from 'vue-router'
import loginView from '../views/loginView.vue'
import usersView from '../views/usersView.vue'

const routes = [
   { path: '/', component: loginView },
  { path: '/users', component: usersView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
