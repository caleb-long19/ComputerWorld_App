<script setup>
import { ref, onMounted } from 'vue'
import OrdersDisplay from '../components/OrdersDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const orders = ref([])

const selectedOrder = ref({
  order_id: '',
  order_ref: '',
  order_amount: '',
  product_id: '',
  order_price: '',
}) // Object to store selected manufacturer details


onMounted(() => {
  ComputerWorldServices.getOrders()
      .then((response) => {
        orders.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
})

// Function to handle row click and update selected order
const selectOrder = (order) => {
  selectedOrder.value = { ...order } // Update with clicked order data
}
</script>

<template>
  <div class="layout">
    <h1>COMPUTER WORLD</h1>
    <h2>- PRODUCTS -</h2>
  </div>

  <!-- Pass Orders and selection handler to OrdersDisplay -->
  <div class="container">
    <OrdersDisplay
        :orders="orders"
        @selectOrder="selectOrder"
    />
  </div>

  <!-- Order Manager form populated with selected Order data -->
  <div class="container">
    <form>
      <h2>Order Manager</h2>
      <div class="mb-3">
        <label class="mb-1" for="orderID">Order ID</label>
        <input
            type="text"
            class="form-control"
            id="orderID"
            v-model="selectedOrder.order_id"
            placeholder="ID"
            readonly
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="orderRef">Order Reference</label>
        <input
            type="text"
            class="form-control"
            id="orderRef"
            v-model="selectedOrder.order_ref"
            placeholder="Reference Number"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="orderAmount">Order Amount</label>
        <input
            type="text"
            class="form-control"
            id="orderAmount"
            v-model="selectedOrder.order_amount"
            placeholder="Amount"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="productID">Product ID</label>
        <input
            type="text"
            class="form-control"
            id="productID"
            v-model="selectedOrder.product_id"
            placeholder="Code"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="price">Price</label>
        <input
            type="text"
            class="form-control"
            id="price"
            v-model="selectedOrder.order_price"
            placeholder="Order Price"
        />
      </div>
      <!-- Buttons are not currently functioning -->
      <button v-if="selectedOrder.order_id" type="submit" class="btn btn-primary mx-1">Update</button>
      <button v-if="selectedOrder.order_id" type="submit" class="btn btn-danger mx-1">Delete</button>
      <button v-if="selectedOrder.order_id" type="submit" class="btn btn-primary mx-1">Clear Selected Record</button>
      <button v-if="!selectedOrder.order_id" type="submit" class="btn btn-primary">Create</button>
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
