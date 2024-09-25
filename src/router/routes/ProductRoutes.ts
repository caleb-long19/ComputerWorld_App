import ProductView from '@/views/ProductView.vue'
import ProductListView from '@/views/ProductListView.vue'
import AddProductsView from '@/views/AddProductsView.vue'
import EditProductView from '@/views/EditProductView.vue'

export const productRoutes = [
  {
    path: '/products',
    name: 'product-list',
    component: ProductListView
  },
  {
    path: '/products/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/products/add',
    name: 'product-add',
    component: AddProductsView
  },
  {
    path: '/products/edit',
    name: 'product-edit',
    component: EditProductView
  }
]