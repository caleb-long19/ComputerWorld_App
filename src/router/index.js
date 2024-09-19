import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManufacturersListView from "../views/ManufacturersView.vue";
import ProductsListView from "../views/ProductsView.vue";
import OrdersListView from "../views/OrdersView.vue";

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
      path: '/manufacturer',
      name: 'manufacturer_list',
      props: true,
      component: ManufacturersListView
    },
    {
      path: '/product',
      name: 'product_list',
      props: true,
      component: ProductsListView
    },
    {
      path: '/order',
      name: 'order_list',
      props: true,
      component: OrdersListView
    },
  ]
})

export default router
