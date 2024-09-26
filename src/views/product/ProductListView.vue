<script lang="ts" setup>
import { Product } from '@/models/Product.js'
import { onMounted, ref } from 'vue'
import ProductTable from '@/components/ProductsTable.vue'
import { getAllProducts } from '@/services/ProductService'
import { useToast } from 'vue-toastification'

const toast = useToast()

// Initialize products
const products = ref<Product[]>([])

const fetchProducts = async () => {
  try{
    products.value = await getAllProducts()
    console.log("Fetched products:", products.value);
  } catch (error) {
    console.error("Failed to fetch products:", error)
    toast.error('Error: Could not fetch products')
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
    <div class="container">
      <ProductTable
        :products="products"
        @deleteProduct="fetchProducts"
      />
      <button class="btn btn-info">
        <RouterLink :to="{ name: 'create-product'}" class="nav-link">Create Product</RouterLink>
      </button>
    </div>
  </div>
</template>
