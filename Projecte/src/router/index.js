import { createRouter, createWebHistory } from 'vue-router'
import paginaAguacates from '@/views/paginaAguacates.vue'
import libros from '@/views/libros.vue'
import llibresFavorits from '@/views/llibresFavorits.vue'
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
    },
    {
      path: '/favorits',
      name: 'favorits',
      component: llibresFavorits
    }
  ],
})

export default router
