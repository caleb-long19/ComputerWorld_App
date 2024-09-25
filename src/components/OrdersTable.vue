<script setup lang="ts">

// Define props to accept an array of orders
import { Order } from '@/models/Order'
defineProps({
  orders: {
    type: Object as Order,
    required: true,
  },
})

// Define an event emitter to send selected order back to the parent
const emit = defineEmits(['selectOrder'])
</script>


<template>

  <div class="container table-responsive">
    <!-- Single table with rows generated from the orders array -->
    <table class="table table-hover">
      <thead class="table-warning">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Order Reference</th>
        <th scope="col">Order Amount</th>
        <th scope="col">Product ID</th>
        <th scope="col">Order Price</th>
      </tr>
      </thead>
      <tbody>
      <!-- Loop through the orders and display each order in a row -->
      <tr
        v-for="(order) in orders"
        :key="order.order_id"
        @click="emit('selectOrder', order)"
        style="cursor: pointer"
      >
        <td>{{ order.order_id }}</td>
        <td>{{ order.order_ref }}</td>
        <td>{{ order.order_amount }}</td>
        <td>{{ order.product_id }}</td>
        <td>{{ order.order_price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>