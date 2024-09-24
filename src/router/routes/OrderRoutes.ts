import OrderView from '@/views/OrderView.vue'
import OrderListView from '@/views/OrderListView.vue'
import AddOrdersView from '@/views/AddOrdersView.vue'
import EditOrderView from '@/views/EditOrderView.vue'

export const orderRoutes = [
  {
    path: '/orders',
    name: 'order-list',
    component: OrderListView
  },
  {
    path: '/orders/:id',
    name: 'order',
    component: OrderView
  },
  {
    path: '/orders/add',
    name: 'add-order',
    component: AddOrdersView
  },
  {
    path: '/orders/:id/edit',
    name: 'edit-order',
    component: EditOrderView
  }
]