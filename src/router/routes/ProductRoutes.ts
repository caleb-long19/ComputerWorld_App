import ProductView from '@/views/product/ProductView.vue'
import ProductListView from '@/views/product/ProductListView.vue'
import CreateProductsView from '@/views/product/CreateProductsView.vue'
import UpdateProductView from '@/views/product/UpdateProductView.vue'

export const productRoutes = [
  {
    path: '/product',
    name: 'product-list',
    component: ProductListView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/product/create',
    name: 'create-product',
    component: CreateProductsView
  },
  {
    path: '/product/:id/update',
    name: 'update-product',
    component: UpdateProductView
  }
]