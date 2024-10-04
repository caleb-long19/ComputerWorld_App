<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { Manufacturer } from '@/models/Manufacturer.js'
import { onMounted, ref } from 'vue'
import { getManufacturer } from '@/services/ManufacturerService'
import { useToast } from 'vue-toastification'

const toast = useToast()

const route = useRoute()
const manufacturerID = route.params.id

// Initialize manufacturers
const manufacturer = ref<Manufacturer>(null)

const fetchManufacturer = async () => {
  try{
    manufacturer.value = await getManufacturer(manufacturerID)
    console.log("Fetched manufacturer:", manufacturer.value);
    toast.success('Manufacturer has been successfully fetched!')
  } catch (error) {
    console.error("Failed to fetch manufacturer:", error)
    toast.error('Error: Could not fetch manufacturer')
  }
}

onMounted(async () => {
  await fetchManufacturer()
})

</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- View Manufacturer -</h5>
    <hr class="dotted" />
  </div>

  <!-- The data needs to be centered and maybe placed in a card. Formatting is required -->

  <div class="container">
    <h1>Manufacturer Data</h1>
    <div v-if="manufacturer">
    <h3>Manufacturer ID: {{ manufacturer.manufacturer_id }}</h3>
      <h3>Manufacturer Name: {{ manufacturer.manufacturer_name }}</h3>
    <button class="btn btn-info">
      <RouterLink :to="{ name: 'update-manufacturer'}" class="nav-link">Update Manufacturer</RouterLink>
    </button>
    </div>
    <div v-else>
      <p>Loading manufacturer data...</p>
    </div>
  </div>
</template>
