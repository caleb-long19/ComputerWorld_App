<script setup>
import { ref, onMounted } from 'vue'
import OrderDisplay from '../components/OrdersDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const orders = ref(null)

onMounted(() => {
  ComputerWorldServices.getOrders()
    .then((response) => {
      orders.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>COMPUTER WORLD - ORDERS</h1>
  <div class="orders">
    <OrderDisplay v-for="order in orders" :key="order.orderID" :order="order" />
  </div>
</template>

<style scoped>
.orders {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
