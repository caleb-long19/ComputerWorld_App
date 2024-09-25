<script setup lang="ts">

// Define props to accept an array of manufacturers
import { Manufacturer } from '@/models/Manufacturer'
import { deleteManufacturer } from '@/services/ManufacturerService'

defineProps({
  manufacturers: {
    type: Object as Manufacturer,
    required: true,
  },
})

// Define an event emitter to delete selected manufacturer
const emit = defineEmits(['deleteManufacturer'])
</script>


<template>
  <div class="container tableFixHead">
    <!-- Single table with rows generated from the manufacturers array -->
    <table class="table table-hover">
      <thead class="table-warning">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Manufacturer</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <!-- Loop through the manufacturers and display each manufacturer in a row -->
      <tr
        v-for="(manufacturer) in manufacturers"
        :key="manufacturer.manufacturer_id"
        style="cursor: pointer"
      >
        <td>
          {{ manufacturer.manufacturer_id }}
        </td>
        <td>
          {{ manufacturer.manufacturer_name }}
        </td>
        <td>
          <!-- TAKE USER TO ManufacturerView with ID value selected -->
          <a class="btn btn-success" :href="`/manufacturer/${manufacturer.manufacturer_id}`"  role="button">View</a>
        </td>
        <td>
          <button
            @click="
            async () => {
              await deleteManufacturer(manufacturer.manufacturer_id)
              emit('deleteManufacturer')
            }
            "
            class="btn btn-danger btn-xs">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>