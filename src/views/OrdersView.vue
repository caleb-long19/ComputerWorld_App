<script setup>
import {orders, selectedOrder, fetchOrders, createRecord, updateRecord, deleteRecord, clearSelection, selectOrder} from "../services/controllers/OrderServices.js";
import OrdersDisplay from "../components/OrdersDisplay.vue";
import BaseInput from "@/components/forms/BaseInput.vue";

fetchOrders()
</script>

<template>
  <div class="layout">
    <h1 class="custom-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="custom-font-regular">- ORDERS -</h5>
    <hr class="dotted" />
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
            style="width: 200px"
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
            style="width: 390px"
            class="form-control"
            id="orderRef"
            v-model="selectedOrder.order_ref"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="orderAmount">Order Amount</label>
        <BaseInput
            type="text"
            style="width: 390px"
            class="form-control"
            id="orderAmount"
            v-model="selectedOrder.order_amount"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="productID">Product ID</label>
        <BaseInput
            type="text"
            style="width: 390px"
            class="form-control"
            id="productID"
            v-model="selectedOrder.product_id"
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="price">Price</label>
        <BaseInput
            type="text"
            style="width: 390px"
            class="form-control"
            id="price"
            v-model="selectedOrder.order_price"
        />
      </div>
      <div v-if="selectedOrder.order_id">
        <button type="button" class="btn btn-primary mx-1" @click="updateRecord(selectedOrder.order_id)">Update</button> |
        <button type="button" class="btn btn-danger mx-1" @click="deleteRecord(selectedOrder.order_id)">Delete</button> |
        <button type="submit" class="btn btn-info mx-1" @click="clearSelection">Clear Selected Record</button>
      </div>
      <div v-else>
        <button type="submit" class="btn btn-primary mx-1" @click="createRecord">Create</button>
      </div>
    </form>
  </div>
</template>

<style>
.layout {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFDB58;
}

.custom-font-bold {
  font-family: lemonMilk_bold, sans-serif;
}
.custom-font-regular {
  font-family: lemonMilk, sans-serif;
}
hr.dotted {
  border-top: 5px dotted #999;
}
@font-face {
  font-family: lemonMilk;
  src: url("src/assets/fonts/LEMONMILK-Regular.otf");
}
@font-face {
  font-family: lemonMilk_bold;
  src: url("src/assets/fonts/LEMONMILK-bold.otf");
}
h1 {
  text-shadow: 2px 2px black;
}
</style>