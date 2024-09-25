<script setup lang="ts">
import { Product } from '@/models/Product'
import { deleteProduct } from '@/services/ProductService'

// Define props to accept an object of products
defineProps({
  products: {
    type: Object as Product,
    required: true,
  },
})

// Define an event emitter to delete selected product
const emit = defineEmits(['deleteProduct'])
</script>


<template>

  <div class="container tableFixHead">
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
        <th scope="col"></th>
        <th scope="col"></th>
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
        <td>
          <!-- Take user to OrderView with ID value selected -->
          <a class="btn btn-success" :href="`/product/${product.product_id}`"  role="button">View</a>
        </td>
        <td>
          <button
            @click="
            async () => {
              await deleteProduct(product.product_id)
              emit('deleteProduct')
            }
            "
            class="btn btn-danger btn-xs">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>