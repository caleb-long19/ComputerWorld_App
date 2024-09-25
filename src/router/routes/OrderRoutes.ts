import OrderView from '@/views/order/OrderView.vue'
import OrderListView from '@/views/order/OrderListView.vue'
import CreateOrdersView from '@/views/order/CreateOrdersView.vue'
import UpdateOrderView from '@/views/order/UpdateOrderView.vue'

export const orderRoutes = [
  {
    path: '/order',
    name: 'order-list',
    component: OrderListView
  },
  {
    path: '/order/:id',
    name: 'order',
    component: OrderView
  },
  {
    path: '/order/create',
    name: 'create-order',
    component: CreateOrdersView
  },
  {
    path: '/order/:id/update',
    name: 'update-order',
    component: UpdateOrderView
  }
]