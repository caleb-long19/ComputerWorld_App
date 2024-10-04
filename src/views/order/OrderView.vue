<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { Order } from '@/models/Order'
import { onMounted, ref } from 'vue'
import { getOrder } from '@/services/OrderService'
import { useToast } from 'vue-toastification'

const toast = useToast()

const route = useRoute()
const orderID = route.params.id

// Initialize orders
const order = ref<Order>(null)

const fetchOrder = async () => {
  try{
    order.value = await getOrder(orderID)
    console.log("Fetched order:", order.value);
    toast.success('Order has been successfully fetched!')
  } catch (error) {
    console.log("Failed to fetch order:", error)
    toast.error('Error: Could not fetch order')
  }
}

onMounted(async () => {
  await fetchOrder()
})

</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- View Order -</h5>
    <hr class="dotted" />
  </div>

  <div class="container">
    <h1>Order Data</h1>
    <div v-if="order">
      <h5>Order ID: {{ order.order_id }}</h5>
      <h5>Order Reference: {{ order.order_ref }}</h5>
      <h5>Order Amount: {{ order.order_amount }}</h5>
      <h5>Product ID: {{ order.product_id }}</h5>
      <h5>Order Price: {{ order.order_price}}</h5>
      <button class="btn btn-info">
        <RouterLink :to="{ name: 'update-order'}" class="nav-link">Update Order</RouterLink>
      </button>
    </div>
    <div v-else>
      <p>Loading order data...</p>
    </div>
  </div>
</template>
