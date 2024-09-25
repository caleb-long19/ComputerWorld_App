<script setup lang="ts">

// Define props to accept an array of products
import { Product } from '@/models/Product'
defineProps({
  products: {
    type: Object as Product,
    required: true,
  },
})

// Define an event emitter to send selected product back to the parent
const emit = defineEmits(['selectProduct'])
</script>


<template>

  <div class="container table-responsive">
    <!-- Single table with rows generated from the products object -->
    <table class="table table-hover">
      <thead class="table-warning">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Product Code</th>
        <th scope="col">Product Name</th>
        <th scope="col">Manufacturer ID</th>
        <th scope="col">Stock</th>
        <th scope="col">Price</th>
      </tr>
      </thead>
      <tbody>
      <!-- Loop through the products and display each product in a row -->
      <tr
        v-for="(product) in products"
        :key="product.product_id"
        @click="emit('selectProduct', product)"
        style="cursor: pointer"
      >
        <td>{{ product.product_id }}</td>
        <td>{{ product.product_code }}</td>
        <td>{{ product.product_name }}</td>
        <td>{{ product.manufacturer_id }}</td>
        <td>{{ product.product_stock }}</td>
        <td>{{ product.product_price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>