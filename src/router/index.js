import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManufacturersView from "../views/ManufacturersListView.vue";
import ProductsView from "../views/ProductsView.vue";
import OrdersView from "../views/OrdersView.vue";
import ManufacturersDetailsView from '../views/ManufacturersDetailsView.vue'

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
      component: ManufacturersView
    },
    {
      path: '/manufacturer/:id',
      name: 'manufacturer_details',
      props: true,
      component: ManufacturersDetailsView,
    },
    {
      path: '/product',
      name: 'product_list',
      props: true,
      component: ProductsView
    },
    {
      path: '/order',
      name: 'order_list',
      props: true,
      component: OrdersView
    },
  ]
})

export default router
