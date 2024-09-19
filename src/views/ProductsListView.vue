<script setup>
import { ref, onMounted } from 'vue'
import ProductsDisplay from '../components/ProductsDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'
import BaseInput from "../components/Forms/BaseInput.vue"

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

const apiUrl = 'http://localhost:5000'; // Ensure this is correct

// Function to create a product record
const createRecord = () => {
  const url = `${apiUrl}/product/`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_code: selectedProduct.value.product_code,
      product_name: selectedProduct.value.product_name,
      manufacturer_id: Number(selectedProduct.value.manufacturer_id),
      product_stock: Number(selectedProduct.value.product_stock),
      product_price: parseFloat(selectedProduct.value.product_price),
    }),
  })
      .then((response) => {
        if (response.ok) {
          alert('Record created successfully');
          // Optionally, fetch and update the list of products
          return ComputerWorldServices.getProducts(); // Refresh list
        } else {
          alert('Failed to create product');
        }
      })
      .then((response) => {
        if (response) {
          products.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log("THE ERROR IS DISPLAYED HERE:", url, error)
        console.log('Error:', error);
        alert('An error occurred while creating Manufacturer');
      });
}

// Function to update a product record
const updateRecord = (id) => {
  const url = `${apiUrl}/product/${id}`;
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_id: selectedProduct.value.product_id,
      product_code: selectedProduct.value.product_code,
      product_name: selectedProduct.value.product_name,
      manufacturer_id: Number(selectedProduct.value.manufacturer_id),
      product_stock: Number(selectedProduct.value.product_stock),
      product_price: parseFloat(selectedProduct.value.product_price),
    }),
  })
      .then((response) => {
        if (response.ok) {
          alert('Record updated successfully');
          // Optionally, fetch and update the list of products
          return ComputerWorldServices.getProducts(); // Refresh list
        } else {
          alert('Failed to update product');
        }
      })
      .then((response) => {
        if (response) {
          products.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred while updating product');
      });
}

// Function to delete a product record
const deleteRecord = (id) => {
  const url = `${apiUrl}/product/${id}`;
  fetch(url, {
    method: 'DELETE',
  })
      .then((response) => {
        if (response.ok) {
          alert('Record deleted successfully');
          // Optionally, fetch and update the list of products
          return ComputerWorldServices.getProducts(); // Refresh list
        } else {
          alert('Failed to delete product');
        }
      })
      .then((response) => {
        if (response) {
          products.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred while deleting product');
      });
}

const clearSelection = () => {
  selectedProduct.value = {
    product_id: '',
    product_code: '',
    product_name: '',
    manufacturer_id: '',
    product_stock: '',
    product_price: '',
  };
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
