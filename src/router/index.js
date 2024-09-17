import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManufacturersView from "../views/ManufacturersView.vue";
import ProductsView from "../views/ProductsView.vue";
import OrdersView from "../views/OrdersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: HomeView
    },
    {
      path: '/manufacturers',
      name: 'manufacturer',
      props: true,
      component: ManufacturersView
    },
    {
      path: '/products',
      name: 'product',
      props: true,
      component: ProductsView
    },
    {
      path: '/orders',
      name: 'order',
      props: true,
      component: OrdersView
    },
  ]
})

export default router
