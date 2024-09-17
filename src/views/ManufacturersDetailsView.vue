<script setup>
import { ref, onMounted } from 'vue'
import ManufacturerService from '@/services/ManufacturerServices.js'

const props = defineProps({
  id: {
    required: true,
  },
})

const manufacturer = ref(null)

onMounted(() => {
  ManufacturerService.getManufacturer(props.id)
    .then((response) => {
      manufacturer.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="manufacturer">
    <h1>{{ manufacturer.manufacturer_id }}</h1>
    <p>{{ manufacturer.manufacturer_name }}</p>
  </div>
</template>