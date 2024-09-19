<script setup>
import {
  products,
  selectedProduct,
  fetchProducts,
  createRecord,
  updateRecord,
  deleteRecord,
  clearSelection,
  selectProduct,
} from "../services/controllers/ProductServices.js";
import ProductsDisplay from "../components/ProductsDisplay.vue";
import BaseInput from "../components/Forms/BaseInput.vue";

fetchProducts()
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
        <div class="mb-3" v-if="selectedProduct.product_id">
            <label class="mb-1" for="productId">Product ID</label>
            <BaseInput
                type="text"
                class="form-control"
                id="productId"
                v-model="selectedProduct.product_id"
                readonly
            />
        </div>
        <div class="mb-3">
          <label class="mb-1" for="productCode">Product Code</label>
          <BaseInput
              type="text"
              class="form-control"
              id="productCode"
              v-model="selectedProduct.product_code"
          />
        </div>
        <div class="mb-3">
          <label class="mb-1" for="productName">Product Name</label>
          <BaseInput
              type="text"
              class="form-control"
              id="productName"
              v-model="selectedProduct.product_name"
          />
        </div>
        <div class="mb-3">
          <label class="mb-1" for="manufacturerID">Manufacturer ID</label>
          <BaseInput
              type="text"
              class="form-control"
              id="manufacturerID"
              v-model="selectedProduct.manufacturer_id"
          />
        </div>
        <div class="mb-3">
          <label class="mb-1" for="stock">Stock</label>
          <BaseInput
              type="text"
              class="form-control"
              id="stock"
              v-model="selectedProduct.product_stock"
          />
        </div>
        <div class="mb-3">
          <label class="mb-1" for="price">Price</label>
          <BaseInput
              type="text"
              class="form-control"
              id="price"
              v-model="selectedProduct.product_price"
          />
        </div>
      <div v-if="selectedProduct.product_id">
        <button type="button" class="btn btn-primary mx-1" @click="updateRecord(selectedProduct.product_id)">Update</button>
        <button type="button" class="btn btn-danger mx-1" @click="deleteRecord(selectedProduct.product_id)">Delete</button>
        <button type="submit" class="btn btn-primary mx-1" @click="clearSelection">Clear Selected Record</button>
      </div>
      <div v-else>
        <button type="submit" class="btn btn-primary" @click="createRecord">Create</button>
      </div>
    </form>
  </div>
</template>

<style>
.layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFDB58;
}
</style>
