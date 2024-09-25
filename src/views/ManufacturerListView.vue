<script lang="ts" setup>
import { Manufacturer } from '@/models/Manufacturer.ts'
import { onMounted, ref } from 'vue'
import ManufacturersCard from '@/components/ManufacturersTable.vue'
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
    <ManufacturersCard
      :manufacturers="manufacturers"
      @selectManufacturer="selectManufacturer"
    />
  </div>

</template>
