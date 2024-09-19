<script setup>
import {manufacturers, fetchManufacturers, createRecord, updateRecord, deleteRecord, selectedManufacturer, selectManufacturer, clearSelection} from "../services/controllers/ManufacturerServices.js"
import ManufacturersDisplay from "../components/ManufacturersDisplay.vue"
import BaseInput from "@/components/forms/BaseInput.vue";// Importing the required modules
import { Ripple, initMDB } from 'mdb-ui-kit';

fetchManufacturers()


// Importing the required modules


// Initialize MDB with Ripple effect
initMDB(Ripple);


</script>

<template>
  <div class="layout">
    <h1 class="custom-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="custom-font-regular">- MANUFACTURERS -</h5>
    <hr class="dotted" />
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
      <h1>MANUFACTURER MANAGER</h1>
        <div class="mb-3" v-if="selectedManufacturer.manufacturer_id">
          <label class="mb-1" for="manufacturerId">Manufacturer ID</label>
          <BaseInput
              type="text"
              style="width: 300px"
              class="form-control"
              id="manufacturerId"
              v-model="selectedManufacturer.manufacturer_id"
              placeholder="ID"
              readonly
          />
        </div>
      <div class="mb-3">
        <label class="mb-1" for="manufacturerName">Manufacturer Name</label>
        <BaseInput
            type="text"
            style="width: 525px"
            class="form-control"
            id="manufacturerName"
            v-model="selectedManufacturer.manufacturer_name"
            placeholder="Name"
        />
      </div>
      <!-- Manufacturer Manager buttons -->
      <div v-if="selectedManufacturer.manufacturer_id">
        <button type="button" class="btn btn-primary" @click="updateRecord(selectedManufacturer.manufacturer_id)">UPDATE</button> |
        <button type="button" class="btn btn-danger" @click="deleteRecord(selectedManufacturer.manufacturer_id)">DELETE</button> |
        <button type="button" class="btn btn-info"  @click="clearSelection">CLEAR DATA</button>
      </div>
      <div v-else>
        <button type="button" class="btn btn-primary mx-1" @click="createRecord">CREATE</button>
      </div>
    </form>
  </div>
</template>

<style>
.layout {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFDB58;
}

.custom-font-bold {
  font-family: lemonMilk_bold, sans-serif;
}
.custom-font-regular {
  font-family: lemonMilk, sans-serif;
}
hr.dotted {
  border-top: 5px dotted #999;
}
@font-face {
  font-family: lemonMilk;
  src: url("src/assets/fonts/LEMONMILK-Regular.otf");
}
@font-face {
  font-family: lemonMilk_bold;
  src: url("src/assets/fonts/LEMONMILK-bold.otf");
}
h1 {
  text-shadow: 2px 2px black;
}

@import 'mdb-ui-kit/css/mdb.min.css';
</style>
