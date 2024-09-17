<script setup>
import { ref, onMounted } from 'vue'
import ManufacturersDisplay from '@/components/ManufacturersDisplay.vue'
import ManufacturerServices from '@/services/ManufacturerServices.js'

const manufacturers = ref(null)

onMounted(() => {
  ManufacturerServices.getManufacturers()
    .then((response) => {
      manufacturers.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>COMPUTER WORLD - MANUFACTURERS</h1>
  <div class="manufacturers">
    <ManufacturersDisplay v-for="manufacturer in manufacturers" :key="manufacturer.id" :manufacturer="manufacturer" />
  </div>
</template>

<style scoped>
.manufacturers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
