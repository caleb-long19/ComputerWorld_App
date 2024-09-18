<script setup>
import { ref, onMounted } from 'vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const props = defineProps({
  id: {
    required: true,
  },
})

const product = ref(null)

onMounted(() => {
  ComputerWorldServices.getProduct(props.id)
    .then((response) => {
      product.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="product">
    <h1>{{ product.product_id }}</h1>
    <p>{{ product.product_name }}</p>
  </div>
</template>