import HomeView from '@/views/HomeView.vue'
import { manufacturerRoutes } from '@/router/routes/ManufacturerRoutes.ts'
import { productRoutes } from '@/router/routes/ProductRoutes.ts'
import { orderRoutes } from '@/router/routes/OrderRoutes.ts'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...manufacturerRoutes,
    ...productRoutes,
    ...orderRoutes,
    /* V Implement Error Handler Pages Below V */
  ]
})

export default router
