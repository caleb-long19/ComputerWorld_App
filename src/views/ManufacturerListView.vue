<script lang="ts" setup>
import { Manufacturer } from '@/models/Manufacturer.ts'
import { onMounted, ref } from 'vue'
import ManufacturersTable from '@/components/ManufacturersTable.vue'
import { getAllManufacturers } from '@/services/ManufacturerService'

// Initialize manufacturers
const manufacturers = ref<Manufacturer[]>([])

const fetchManufacturers = async () => {
  try{
    manufacturers.value = await getAllManufacturers()
    console.log("Fetched manufacturers:", manufacturers.value);
  } catch (error) {
    console.error("Failed to fetch manufacturers:", error)
  }
}

// NEED TO IMPLEMENT THE SELECTED DATA AGAIN

onMounted(async () => {
  await fetchManufacturers()
})

</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Manufacturer -</h5>
    <hr class="dotted" />
  </div>

  <div>
    <ManufacturersTable
      :manufacturers="manufacturers"
      @selectManufacturer="selectManufacturer"
    />
  </div>

  <div>
    <button >Create Manufacturer</button>
  </div>

</template>
