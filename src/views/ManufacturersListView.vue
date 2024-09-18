<script setup>
import { ref, onMounted } from 'vue'
import ManufacturersDisplay from '../components/ManufacturersDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const manufacturers = ref([])

const selectedManufacturer = ref({
  manufacturer_id: '',
  manufacturer_name: ''
}) // Object to store selected manufacturer details


onMounted(() => {
  ComputerWorldServices.getManufacturers()
    .then((response) => {
      manufacturers.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

// Function to handle row click and update selected manufacturer
const selectManufacturer = (manufacturer) => {
  selectedManufacturer.value = { ...manufacturer } // Update with clicked manufacturer data
}
</script>

<template>
  <div class="layout">
    <h1>COMPUTER WORLD</h1>
    <h2>- MANUFACTURERS -</h2>
  </div>

  <!-- Pass manufacturers and selection handler to ManufacturersDisplay -->
  <div class="container">
    <ManufacturersDisplay
        :manufacturers="manufacturers"
        @selectManufacturer="selectManufacturer"
    />
  </div>

  <!-- Manufacturer Manager form populated with selected manufacturer data -->
  <div class="container">
    <form>
      <h2>MANUFACTURER MANAGER</h2>
      <div class="mb-3">
        <label class="mb-1" for="manufacturerId">Manufacturer ID</label>
        <input
            type="text"
            class="form-control"
            id="manufacturerId"
            v-model="selectedManufacturer.manufacturer_id"
            placeholder="ID"
            readonly
        />
      </div>
      <div class="mb-3">
        <label class="mb-1" for="manufacturerName">Manufacturer Name</label>
        <input
            type="text"
            class="form-control"
            id="manufacturerName"
            v-model="selectedManufacturer.manufacturer_name"
            placeholder="Name"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style>
.layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-shadow: 2px 4px #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFDB58;
}
</style>
