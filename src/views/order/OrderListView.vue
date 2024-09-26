<script lang="ts" setup>
import { Order } from '@/models/Order'
import { onMounted, ref } from 'vue'
import OrderTable from '@/components/OrdersTable.vue'
import { getAllOrders } from '@/services/OrderService'
import { useToast } from 'vue-toastification'

const toast = useToast()

// Initialize orders
const orders = ref<Order[]>([])

const fetchOrders = async () => {
  try{
    orders.value = await getAllOrders()
    console.log("Fetched orders:", orders.value);
  } catch (error) {
    console.log("Failed to fetch orders:", error)
    toast.error('Error: Could not fetch orders')
  }
}

onMounted(async () => {
  await fetchOrders()
})
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Order -</h5>
    <hr class="dotted" />
  </div>

  <div class="container">
    <OrderTable
      :orders="orders"
      @deleteOrder="fetchOrders"
    />
    <button class="btn btn-info">
      <RouterLink :to="{ name: 'create-order'}" class="nav-link">Create Order</RouterLink>
    </button>
  </div>
</template>
