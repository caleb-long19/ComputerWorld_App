<script setup>
import { ref, onMounted } from 'vue'
import ManufacturersDisplay from '../components/ManufacturersDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'

const manufacturers = ref(null)

onMounted(() => {
  ComputerWorldServices.getManufacturers()
    .then((response) => {
      manufacturers.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>COMPUTER WORLD</h1>
  <h2>- MANUFACTURERS -</h2>
  <div class="manufacturers">
    <div class="card-overflow">
      <div>
        <ManufacturersDisplay v-for="manufacturer in manufacturers" :key="manufacturer.id" :manufacturer="manufacturer" />
      </div>
    </div>
  </div>
  <div class="form-layout">
    <form class="card">
      <h4>MANUFACTURER MANAGER</h4>
      <input type="checkbox">
      <button type="submit" class="btn btn-primary">Update</button>
      <button type="submit" class="btn btn-danger">Delete</button>
    </form>
  </div>
</template>

<style scoped>
.manufacturers {
  float: left;
  position: relative;
  left: 34%;
}
.form-layout {
  float: left;
  position: relative;
  left: 34%;
}
.card {
  width: 350px;
  height: 440px;
  margin-bottom: 25px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  padding: 2px 16px;
  border-radius: 5px; /* 5px rounded corners */
}
.card-overflow {
  width: 250px;
  height: 450px;
  overflow:scroll;
  padding: 5px;

}
</style>
