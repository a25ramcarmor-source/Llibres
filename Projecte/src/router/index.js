import { createRouter, createWebHistory } from 'vue-router'
import paginaAguacates from '@/views/paginaAguacates.vue'
import libros from '@/views/libros.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aguacates',
      name: 'aguacate',
      component: paginaAguacates
    },
    {
      path: '/Libros',
      name: 'libro',
      component: libros
    }
  ],
})

export default router
