import type { Manufacturer } from '@/models/Manufacturer';

interface Product {
  product_id: number
  product_code: string
  product_name: string
  manufacturer_id: number
  product_stock: number
  product_price: number

  manufacturer: Manufacturer
}

export { Product }