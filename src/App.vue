<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-1 border-bottom">
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><RouterLink :to="{ name: 'home'}" class="nav-link px-2 link-secondary">HOME</RouterLink></li>
        <li><RouterLink :to="{ name: 'manufacturer_list'}" class="nav-link px-2 link-dark">MANUFACTURERS</RouterLink></li>
        <li><RouterLink :to="{ name: 'product_list'}" class="nav-link px-2 link-dark">PRODUCTS</RouterLink></li>
        <li><RouterLink :to="{ name: 'order_list'}" class="nav-link px-2 link-dark">ORDERS</RouterLink></li>
      </ul>

    </header>
  </div>
  <RouterView />
</template>
