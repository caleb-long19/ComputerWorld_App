<script setup>
import { ref, onMounted } from 'vue'
import ProductsDisplay from '../components/ProductsDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const products = ref([])

const selectedProduct = ref({
  product_id: '',
  product_code: '',
  product_name: '',
  manufacturer_id: '',
  product_stock: '',
  product_price: '',
}) // Object to store selected product details


onMounted(() => {
  ComputerWorldServices.getProducts()
      .then((response) => {
        products.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
})

// Function to handle row click and update selected product
const selectProduct = (product) => {
  selectedProduct.value = { ...product } // Update with clicked product data
}
</script>

<template>
  <div class="layout">
    <h1>COMPUTER WORLD</h1>
    <h2>- PRODUCTS -</h2>
  </div>

  <!-- Pass products and selection handler to ProductsDisplay -->
  <div class="container">
    <ProductsDisplay
        :products="products"
        @selectProduct="selectProduct"
    />
  </div>

  <!-- Product Manager form populated with selected product data -->
  <div class="container">
    <form>
      <h2>Product Manager</h2>
      <div class="mb-3">
        <label class="mb-1" for="productId">Product ID</label>
        <input
            type="text"
            class="form-control"
            id="productId"
            v-model="selectedProduct.product_id"
            placeholder="ID"
            readonly
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="productCode">Product Code</label>
        <input
            type="text"
            class="form-control"
            id="productCode"
            v-model="selectedProduct.product_code"
            placeholder="Code"
        />
      </div>
        <div class="mb-3">
          <label class="mb-1" for="productName">Product Name</label>
          <input
              type="text"
              class="form-control"
              id="productName"
              v-model="selectedProduct.product_name"
              placeholder="Code"
          />
        </div>
        <div class="mb-3">
          <label class="mb-1" for="manufacturerID">Manufacturer ID</label>
          <input
              type="text"
              class="form-control"
              id="manufacturerID"
              v-model="selectedProduct.manufacturer_id"
              placeholder="Code"
          />
        </div>
        <div class="mb-3">
          <label class="mb-1" for="stock">Stock</label>
          <input
              type="text"
              class="form-control"
              id="stock"
              v-model="selectedProduct.product_stock"
              placeholder="Product Stock"
          />
        </div>
        <div class="mb-3">
          <label class="mb-1" for="price">Price</label>
          <input
              type="text"
              class="form-control"
              id="price"
              v-model="selectedProduct.product_price"
              placeholder="Product Price"
          />
        </div>
      <!-- Buttons are not currently functioning -->
      <button v-if="selectedProduct.product_id" type="submit" class="btn btn-primary mx-1">Update</button>
      <button v-if="selectedProduct.product_id" type="submit" class="btn btn-danger mx-1">Delete</button>
      <button v-if="selectedProduct.product_id" type="submit" class="btn btn-primary mx-1">Clear Selected Record</button>
      <button v-if="!selectedProduct.product_id" type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<style>
.layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-shadow: 2px 4px #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFDB58;
}
</style>
