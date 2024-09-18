<script setup>
// Define props to accept an array of manufacturers
defineProps({
  products: {
    type: Array,
    required: true,
  },
})

// Define an event emitter to send selected manufacturer back to the parent
const emit = defineEmits(['selectProduct'])
</script>

<template>
  <div class="container">
    <!-- Single table with rows generated from the manufacturers array -->
    <table class="table table-hover thead-dark">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Product Code</th>
        <th scope="col">Product Title</th>
        <th scope="col">Manufacturer ID</th>
        <th scope="col">Stock</th>
        <th scope="col">Price</th>
      </tr>
      </thead>
      <tbody>
      <!-- Loop through the manufacturers and display each manufacturer in a row -->
      <tr
          v-for="(product, index) in products"
          :key="product.product_id"
          @click="emit('selectProduct', product)"
          style="cursor: pointer"
      >
        <th scope="row">{{ index + 1 }}</th>
        <td>
          <RouterLink :to="{ name: 'product_details', params: { id: product.product_id } }">
            {{ product.product_id }}
          </RouterLink>
        </td>
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
