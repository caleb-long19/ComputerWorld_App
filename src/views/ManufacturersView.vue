<script setup>
import {manufacturers, fetchManufacturers, createRecord, updateRecord, deleteRecord, selectedManufacturer, selectManufacturer, clearSelection} from "../services/controllers/ManufacturerServices.js"
import ManufacturersDisplay from "../components/ManufacturersDisplay.vue"
import BaseInput from "../components/Forms/BaseInput.vue";

fetchManufacturers()
</script>

<template>
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
            class="form-control"
            id="manufacturerName"
            v-model="selectedManufacturer.manufacturer_name"
            placeholder="Name"
        />
      </div>
      <!-- Manufacturer Manager buttons -->
      <div v-if="selectedManufacturer.manufacturer_id">
        <button type="button" class="btn btn-primary mx-1" @click="updateRecord(selectedManufacturer.manufacturer_id)">Update</button>
        <button type="button" class="btn btn-danger mx-1" @click="deleteRecord(selectedManufacturer.manufacturer_id)">Delete</button>
        <button type="button" class="btn btn-primary mx-1"  @click="clearSelection">Clear Selected Record</button>
      </div>
      <div v-else>
        <button type="button" class="btn btn-primary mx-1" @click="createRecord">Create</button>
      </div>
    </form>
  </div>
</template>

<style>
.layout {
  font-family: Calibri, Helvetica, Arial, "Bebas Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFDB58;
}
</style>
