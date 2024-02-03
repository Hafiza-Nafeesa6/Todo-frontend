import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path: '',
      name: 'TodoList',
      component: () => import('@/components/TodoList.vue')
    },
      {
      path: '/login',
      name: 'LogIn',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('@/views/SignUp.vue')
    },
  ]
})

export default router
