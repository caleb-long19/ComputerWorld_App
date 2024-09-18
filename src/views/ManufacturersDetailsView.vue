<script setup>
import { ref, onMounted } from 'vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const props = defineProps({
  id: {
    required: true,
  },
})

const manufacturer = ref(null)

onMounted(() => {
  ComputerWorldServices.getManufacturer(props.id)
    .then((response) => {
      manufacturer.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="container">
  <div v-if="manufacturer">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Manufacturer: {{ manufacturer.manufacturer_name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">ID: {{ manufacturer.manufacturer_id }}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/manufacturer/" class="card-link">Go Back</a>
      </div>
  </div>
  </div>
  </div>
</template>