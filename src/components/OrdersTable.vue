<script setup lang="ts">
import '@/assets/TableStyles.css'
import { Order } from '@/models/Order'
import { deleteOrder } from '@/services/OrderService'
import { toast } from 'react-toastify'

// Define props to accept an array of orders
defineProps({
  orders: {
    type: Object as Order,
    required: true,
  },
})

// Define an event emitter to delete selected order
const emit = defineEmits(['deleteOrder'])

const handleDelete = async (orderID: number) => {
  const confirmDeletion = window.confirm('Are you sure you want to delete this order?')
  if (confirmDeletion) {
    try {
      await deleteOrder(orderID)
      emit('deleteOrder')  // Emit the event to update the order list
    } catch (error) {
      console.error('Error deleting order:', error)
      toast.error('Error: Could not delete order!')
    }
  }
}

</script>

<template>
  <div class="container-fluid responsive-table-wrapper">
    <!-- Single table with rows generated from the manufacturers array -->
    <table class="table table-hover table-responsive">
      <thead class="table-warning">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Order Reference</th>
        <th scope="col">Order Amount</th>
        <th scope="col">Product ID</th>
        <th scope="col">Order Price</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <!-- Loop through the orders and display each order in a row -->
      <tr
        v-for="(order) in orders"
        :key="order.order_id"
        style="cursor: pointer"
      >
        <td data-label="ID">{{ order.order_id }}</td>
        <td data-label="Order Ref">{{ order.order_ref }}</td>
        <td data-label="Order Amount">{{ order.order_amount }}</td>
        <td data-label="Product ID">{{ order.product_id }}</td>
        <td data-label="Order Price">{{ order.order_price }}</td>
        <td data-label="Actions">
          <!-- View button -->
          <RouterLink :to="`/order/${order.order_id}`">
            <button class="btn btn-info btn-sm mb-1">View</button>
          </RouterLink>
          <!-- Delete button -->
          <button
            @click="() => handleDelete(order.order_id)"
            class="btn btn-danger btn-sm mb-1"
          >
            Delete
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>