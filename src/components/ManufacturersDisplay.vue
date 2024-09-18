<script setup>
// Define props to accept an array of manufacturers
defineProps({
  manufacturers: {
    type: Array,
    required: true,
  },
})

// Define an event emitter to send selected manufacturer back to the parent
const emit = defineEmits(['selectManufacturer'])
</script>

<template>
  <div class="container">
    <!-- Single table with rows generated from the manufacturers array -->
    <table class="table table-hover thead-dark">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Manufacturer</th>
      </tr>
      </thead>
      <tbody>
      <!-- Loop through the manufacturers and display each manufacturer in a row -->
      <tr
          v-for="(manufacturer, index) in manufacturers"
          :key="manufacturer.manufacturer_id"
          @click="emit('selectManufacturer', manufacturer)"
          style="cursor: pointer"
      >
        <th scope="row">{{ index + 1 }}</th>
        <td>
          <RouterLink :to="{ name: 'manufacturer_details', params: { id: manufacturer.manufacturer_id } }">
            {{ manufacturer.manufacturer_id }}
          </RouterLink>
        </td>
        <td>{{ manufacturer.manufacturer_name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

