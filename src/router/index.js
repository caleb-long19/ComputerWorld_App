import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManufacturersListView from "../views/ManufacturersListView.vue";
import ProductsListView from "../views/ProductsListView.vue";
import OrdersListView from "../views/OrdersListView.vue";
import ManufacturersDetailsView from '../views/ManufacturersDetailsView.vue'
import ProductsDetailsView from '../views/ProductsDetailsView.vue'
import OrdersDetailsView from '../views/OrdersDetailsView.vue'

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
      path: '/manufacturer/:id',
      name: 'manufacturer_details',
      props: true,
      component: ManufacturersDetailsView,
    },
    {
      path: '/product',
      name: 'product_list',
      props: true,
      component: ProductsListView
    },
    {
      path: '/product/:id',
      name: 'product_details',
      props: true,
      component: ProductsDetailsView
    },
    {
      path: '/order',
      name: 'order_list',
      props: true,
      component: OrdersListView
    },
    {
      path: '/order/:id',
      name: 'order_details',
      props: true,
      component: OrdersDetailsView
    },
  ]
})

export default router
