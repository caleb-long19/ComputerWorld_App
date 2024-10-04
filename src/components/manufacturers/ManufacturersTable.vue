<script setup lang="ts">
import '@/assets/TableStyles.css'
import { Manufacturer } from '@/models/Manufacturer'
import { deleteManufacturer } from '@/services/ManufacturerService'
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
      toast.success('Manufacturer deleted')
    } catch (error) {
      console.error('Error deleting manufacturer:', error)
      toast.error('Error: Could not delete manufacturer!')
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
        <th>ID</th>
        <th>Manufacturer</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <!-- Loop through the manufacturers and display each manufacturer in a row -->
      <tr
        v-for="(manufacturer) in manufacturers"
        :key="manufacturer.manufacturer_id"
        style="cursor: pointer"
      >
        <td data-label="ID">{{ manufacturer.manufacturer_id }}</td>
        <td data-label="Manufacturer">{{ manufacturer.manufacturer_name }}</td>
        <td data-label="Actions">
          <!-- View button -->
          <RouterLink :to="`/manufacturer/${manufacturer.manufacturer_id}`">
            <button class="btn btn-info btn-sm mb-1">View</button>
          </RouterLink>
          <!-- Delete button -->
          <button
            @click="() => handleDelete(manufacturer.manufacturer_id)"
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
