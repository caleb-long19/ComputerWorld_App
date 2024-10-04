<script lang="ts" setup>
import { Manufacturer } from '@/models/Manufacturer.js'
import { onMounted, ref } from 'vue'
import ManufacturersTable from '@/components/manufacturers/ManufacturersTable.vue'
import { getAllManufacturers } from '@/services/ManufacturerService'
import { useToast } from 'vue-toastification'

const toast = useToast()

// Initialize manufacturers
const manufacturers = ref<Manufacturer[]>([])

const fetchManufacturers = async () => {
  try{
    manufacturers.value = await getAllManufacturers()
    console.log("Fetched manufacturers:", manufacturers.value);
    toast.success('Manufacturers have been successfully fetched!')
  } catch (error) {
    console.error("Failed to fetch manufacturers:", error)
    toast.error('Error: Could not fetch manufacturers')
  }
}

onMounted(async () => {
  await fetchManufacturers()
})
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Manufacturer -</h5>
    <hr class="dotted" />
    <div class="container">
      <ManufacturersTable
        :manufacturers="manufacturers"
        @deleteManufacturer="fetchManufacturers"
      />
      <button class="btn btn-success">
        <RouterLink :to="{ name: 'create-manufacturer'}" class="nav-link">Create Manufacturer</RouterLink>
      </button>
    </div>
  </div>
</template>
