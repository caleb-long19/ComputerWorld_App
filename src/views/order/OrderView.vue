<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { Order } from '@/models/Order'
import { onMounted, ref } from 'vue'
import { getOrder } from '@/services/OrderService'

const route = useRoute()
const orderID = route.params.id

// Initialize manufacturers
const order = ref<Order>(null)

onMounted(async () => {
  order.value = await getOrder(orderID)
})

</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- View Order -</h5>
    <hr class="dotted" />
  </div>

  <div>
    <h1>Order Data</h1>
    <h3>Order: {{ orderID }}</h3>
  </div>

</template>
