<script setup lang="ts">
import { Manufacturer } from '@/models/Manufacturer'
import { deleteManufacturer } from '@/services/ManufacturerService'
import { deleteOrder } from '@/services/OrderService'
import { toast } from 'react-toastify'

// Define props to accept an object array of manufacturers
defineProps({
  manufacturers: {
    type: Object as Manufacturer,
    required: true,
  },
})

// Define an event emitter to delete selected manufacturer
const emit = defineEmits(['deleteManufacturer'])

const handleDelete = async (manufacturerID: number) => {
  const confirmDeletion = window.confirm('Are you sure you want to delete this manufacturer?')
  if (confirmDeletion) {
    try {
      await deleteManufacturer(manufacturerID)
      emit('deleteManufacturer')  // Emit the event to update the Manufacturer list
    } catch (error) {
      console.error('Error deleting manufacturer:', error)
      toast.error('Error: Could not delete manufacturer!')
    }
  }
}

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
          <!-- Take user TO ManufacturerView with ID value selected -->
          <button class="btn btn-success">
            <RouterLink :to="`/manufacturer/${manufacturer.manufacturer_id}`" class="nav-link">View</RouterLink>
          </button>
        </td>
        <td>
          <button
            @click="() => handleDelete(manufacturer.manufacturer_id)"
            class="btn btn-danger btn-xs">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>