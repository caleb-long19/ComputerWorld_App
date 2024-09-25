import type { Product } from '@/models/product.ts'

interface Order {
  order_id: number
  order_ref: string
  order_amount: number
  product_id: number
  order_price: number

  product: Product
}

export { Order }