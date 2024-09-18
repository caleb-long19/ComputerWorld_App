<script setup>
import { ref, onMounted } from 'vue'
import ProductsDisplay from '../components/ProductsDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const products = ref(null)

onMounted(() => {
  ComputerWorldServices.getProducts()
    .then((response) => {
      products.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>COMPUTER WORLD - PRODUCTS</h1>
  <div class="products">
    <ProductsDisplay v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
