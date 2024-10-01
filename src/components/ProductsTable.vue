<script setup lang="ts">
import '@/assets/TableStyles.css'
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
  <div class="container-fluid responsive-table-wrapper">
    <!-- Single table with rows generated from the manufacturers array -->
    <table class="table table-hover table-responsive">
      <thead class="table-warning">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Product Code</th>
        <th scope="col">Product Name</th>
        <th scope="col">Manufacturer ID</th>
        <th scope="col">Stock</th>
        <th scope="col">Price</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <!-- Loop through the products and display each product in a row -->
      <tr
        v-for="(product) in products"
        :key="product.product_id"
        style="cursor: pointer"
      >
        <td data-label="ID">{{ product.product_id }}</td>
        <td data-label="Product Code">{{ product.product_code }}</td>
        <td data-label="Product Name">{{ product.product_name }}</td>
        <td data-label="Manufacturer ID">{{ product.manufacturer_id }}</td>
        <td data-label="Product Stock">{{ product.product_stock }}</td>
        <td data-label="Product Price">{{ product.product_price }}</td>
        <td data-label="Actions">
          <!-- View button -->
          <RouterLink :to="`/product/${product.product_id}`">
            <button class="btn btn-info btn-sm mb-1">View</button>
          </RouterLink>
          <!-- Delete button -->
          <button
            @click="() => handleDelete(product.product_id)"
            class="btn btn-danger btn-sm mb-1"
          >
            Delete
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>