<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { Product } from '@/models/Product'
import { onMounted, ref } from 'vue'
import { getProduct } from '@/services/ProductService'
import { useToast } from 'vue-toastification'

const toast = useToast()

const route = useRoute()
const productID = route.params.id

// Initialize products
const product = ref<Product>(null)

const fetchProduct = async () => {
  try{
    product.value = await getProduct(productID)
    console.log("Fetched product:", product.value);
    toast.success('Product has been successfully fetched!')
  } catch (error) {
    console.error("Failed to fetch product:", error)
    toast.error('Error: Could not fetch product')
  }
}

onMounted(async () => {
  await fetchProduct()
})

</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- View Product -</h5>
    <hr class="dotted" />
  </div>

  <div class="container">
    <h1>Product Data</h1>
    <div v-if="product">
      <h5>Product ID: {{ product.product_id }}</h5>
      <h5>Product Code: {{ product.product_code }}</h5>
      <h5>Product Name: {{ product.product_name }}</h5>
      <h5>Manufacturer ID: {{ product.manufacturer_id }}</h5>
      <h5>Product Stock: {{ product.product_stock }}</h5>
      <h5>Product Price: {{ product.product_price }}</h5>
      <button class="btn btn-info">
        <RouterLink :to="{ name: 'update-product'}" class="nav-link">Update Product</RouterLink>
      </button>
    </div>
    <div v-else>
      <p>Loading order data...</p>
    </div>
  </div>
</template>
