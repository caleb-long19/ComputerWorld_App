<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">HOME</RouterLink> |
          <RouterLink to="/manufacturers">MANUFACTURERS</RouterLink> |
          <RouterLink to="/products">PRODUCTS</RouterLink> |
          <RouterLink to="/orders">ORDERS</RouterLink>
        </nav>
      </div>
    </header>
  <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #FFDB58;
}
h2 {
  font-size: 20px;
}
</style>
