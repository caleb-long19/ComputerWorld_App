<script lang="ts" setup>
import { Order } from '@/models/Order'
import { onMounted, ref } from 'vue'
import OrderTable from '@/components/OrdersTable.vue'
import { getAllOrders } from '@/services/OrderService'

// Initialize manufacturers
const orders = ref<Order[]>([])

const fetchOrders = async () => {
  try{
    orders.value = await getAllOrders()
    console.log("Fetched products:", products.value);
  } catch (error) {
    console.error("Failed to fetch products:", error)
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

  <div>
    <OrderTable
      :orders="orders"
    />
  </div>

</template>
