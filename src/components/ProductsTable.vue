<script setup lang="ts">
import { Product } from '@/models/Product'
import { deleteProduct } from '@/services/ProductService'
import { toast } from 'react-toastify'

// Define props to accept an object of products
defineProps({
  products: {
    type: Object as Product,
    required: true,
  },
})

// Define an event emitter to delete selected product
const emit = defineEmits(['deleteProduct'])

const handleDelete = async (productID: number) => {
  const confirmDeletion = window.confirm('Are you sure you want to delete this product?')
  if (confirmDeletion) {
    try {
      await deleteProduct(productID)
      emit('deleteProduct')  // Emit the event to update the product list
    } catch (error) {
      console.error('Error deleting product:', error)
      toast.error('Error: Could not delete product!')
    }
  }
}

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
          <button class="btn btn-success">
            <RouterLink :to="`/product/${product.product_id}`" class="nav-link">View</RouterLink>
          </button>
        </td>
        <td>
          <button
            @click="() => handleDelete(product.product_id)"
            class="btn btn-danger btn-xs">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>