<script lang="ts" setup>
import { Product } from '@/models/Product.ts'
import { onMounted, ref } from 'vue'
import ProductTable from '@/components/ProductsTable.vue'
import { getAllProducts } from '@/services/ProductService'

// Initialize manufacturers
const products = ref<Product[]>([])

const fetchProducts = async () => {
  try{
    products.value = await getAllProducts()
    console.log("Fetched products:", products.value);
  } catch (error) {
    console.error("Failed to fetch products:", error)
  }
}

onMounted(async () => {
  await fetchProducts()
})

</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Product -</h5>
    <hr class="dotted" />
  </div>

  <div>
    <ProductTable
      :products="products"
    />
  </div>

</template>
