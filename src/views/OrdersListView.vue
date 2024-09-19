<script setup>
import { ref, onMounted } from 'vue'
import OrdersDisplay from '../components/OrdersDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'
import BaseInput from "../components/Forms/BaseInput.vue";

const orders = ref([])

const selectedOrder = ref({
  order_id: '',
  order_ref: '',
  order_amount: '',
  product_id: '',
  order_price: '',
}) // Object to store selected order details


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

const apiUrl = 'http://localhost:5000'; // Ensure this is correct

// Function to create a order record
const createRecord = () => {
  const url = `${apiUrl}/order/`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      order_ref: selectedOrder.value.order_ref,
      order_amount: Number(selectedOrder.value.order_amount),
      product_id: Number(selectedOrder.value.product_id),
      order_price: parseFloat(selectedOrder.value.order_price),
    }),
  })
      .then((response) => {
        if (response.ok) {
          alert('Record created successfully');
          // Optionally, fetch and update the list of orders
          return ComputerWorldServices.getOrders(); // Refresh list
        } else {
          alert('Failed to create order');
        }
      })
      .then((response) => {
        if (response) {
          orders.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log("THE ERROR IS DISPLAYED HERE:", url, error)
        console.log('Error:', error);
        alert('An error occurred while creating Manufacturer');
      });
}

// Function to update a order record
const updateRecord = (id) => {
  const url = `${apiUrl}/order/${id}`;
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      order_id: selectedOrder.value.order_id,
      order_ref: selectedOrder.value.order_ref,
      order_amount: Number(selectedOrder.value.order_amount),
      product_id: Number(selectedOrder.value.product_id),
      order_price: parseFloat(selectedOrder.value.order_price),
    }),
  })
      .then((response) => {
        if (response.ok) {
          alert('Record updated successfully');
          // Optionally, fetch and update the list of orders
          return ComputerWorldServices.getOrders(); // Refresh list
        } else {
          alert('Failed to update order');
        }
      })
      .then((response) => {
        if (response) {
          orders.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred while updating product');
      });
}

// Function to delete a order record
const deleteRecord = (id) => {
  const url = `${apiUrl}/order/${id}`;
  fetch(url, {
    method: 'DELETE',
  })
      .then((response) => {
        if (response.ok) {
          alert('Record deleted successfully');
          // Optionally, fetch and update the list of orders
          return ComputerWorldServices.getOrders(); // Refresh list
        } else {
          alert('Failed to delete order');
        }
      })
      .then((response) => {
        if (response) {
          orders.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred while deleting order');
      });
}

const clearSelection = () => {
  selectedOrder.value = {
    order_id: '',
    order_ref: '',
    order_amount: '',
    product_id: '',
    order_price: '',
  };
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
        <BaseInput
            type="text"
            class="form-control"
            id="orderID"
            v-model="selectedOrder.order_id"
            readonly
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="orderRef">Order Reference</label>
        <BaseInput
            type="text"
            class="form-control"
            id="orderRef"
            v-model="selectedOrder.order_ref"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="orderAmount">Order Amount</label>
        <BaseInput
            type="text"
            class="form-control"
            id="orderAmount"
            v-model="selectedOrder.order_amount"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="productID">Product ID</label>
        <BaseInput
            type="text"
            class="form-control"
            id="productID"
            v-model="selectedOrder.product_id"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="price">Price</label>
        <BaseInput
            type="text"
            class="form-control"
            id="price"
            v-model="selectedOrder.order_price"
        />
      </div>
      <div v-if="selectedOrder.order_id">
        <button type="button" class="btn btn-primary mx-1" @click="updateRecord(selectedOrder.order_id)">Update</button>
        <button type="button" class="btn btn-danger mx-1" @click="deleteRecord(selectedOrder.order_id)">Delete</button>
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
