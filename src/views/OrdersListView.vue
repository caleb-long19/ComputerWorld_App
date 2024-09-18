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
  <h1>COMPUTER WORLD</h1>
  <h2>ORDERS</h2>
  <div class="orders">
    <div class="card-overflow">
        <OrderDisplay v-for="order in orders" :key="order.orderID" :order="order" />
    </div>
  </div>
  <div class="form-layout">
    <form class="card">
      <h4>ORDER MANAGER</h4>
<!--      <input type="checkbox">-->
<!--      <button type="submit" class="btn btn-primary">Update</button>-->
<!--      <button type="submit" class="btn btn-danger">Delete</button>-->
    </form>
  </div>
</template>

<style scoped>
.orders {
  float: left;
  position: relative;
  left: 34%;
}
.form-layout {
  float: left;
  position: relative;
  left: 34%;
}
.card {
  width: 350px;
  height: 440px;
  margin-bottom: 25px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  padding: 2px 16px;
  border-radius: 5px; /* 5px rounded corners */
}
.card-overflow {
  width: 250px;
  height: 450px;
  overflow:scroll;
  padding: 5px;

}
</style>
