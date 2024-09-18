<script setup>
import { ref, onMounted } from 'vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const props = defineProps({
  id: {
    required: true,
  },
})

const order = ref(null)

onMounted(() => {
  ComputerWorldServices.getOrder(props.id)
    .then((response) => {
      order.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="order">
    <h1>{{ order.order_id }}</h1>
    <p>{{ order.order_ref }}</p>
  </div>
</template>
