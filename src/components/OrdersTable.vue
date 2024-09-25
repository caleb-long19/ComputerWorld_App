<script setup lang="ts">

// Define props to accept an array of orders
import { Order } from '@/models/Order'
import { deleteOrder } from '@/services/OrderService'

defineProps({
  orders: {
    type: Object as Order,
    required: true,
  },
})

// Define an event emitter to delete selected order
const emit = defineEmits(['deleteOrder'])
</script>


<template>

  <div class="container tableFixHead" >
    <!-- Single table with rows generated from the orders array -->
    <table class="table table-hover">
      <thead class="table-warning">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Order Reference</th>
        <th scope="col">Order Amount</th>
        <th scope="col">Product ID</th>
        <th scope="col">Order Price</th>
        <th scope="col"></th>
        <th scope="col"></th>
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
        <td>
          <!-- Take user to OrderView with ID value selected -->
          <a class="btn btn-success" :href="`/order/${order.order_id}`"  role="button">View</a>
        </td>
        <td>
          <button
            @click="
            async () => {
              await deleteOrder(order.order_id)
              emit('deleteOrder')
            }
            "
            class="btn btn-danger btn-xs">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>