<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { Product } from '@/models/Product'
import { onMounted, ref } from 'vue'
import { getProduct } from '@/services/ProductService'

const route = useRoute()
const productID = route.params.id

// Initialize manufacturers
const product = ref<Product>(null)

onMounted(async () => {
  product.value = await getProduct(productID)
})

</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- View Product -</h5>
    <hr class="dotted" />
  </div>

  <div>
    <h1>Product Data</h1>
    <h3>Product: {{ productID }}</h3>
  </div>

</template>
