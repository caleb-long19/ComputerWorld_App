<script setup>
import { ref, onMounted } from 'vue'
import ManufacturersDisplay from '../components/ManufacturersDisplay.vue'
import ComputerWorldServices from '../services/ComputerWorldServices.js'
import BaseInput from "../components/Forms/BaseInput.vue"

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

const apiUrl = 'http://localhost:5000'; // Ensure this is correct

// Function to create a manufacturer record
const createRecord = () => {
  const url = `${apiUrl}/manufacturer/`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      manufacturer_name: selectedManufacturer.value.manufacturer_name,
    }),
  })
      .then((response) => {
        console.log("THIS IS THE URL:", selectedManufacturer.value.manufacturer_name)
        if (response.ok) {
          alert('Record created successfully');
          // Optionally, fetch and update the list of manufacturers
          return ComputerWorldServices.getManufacturers(); // Refresh list
        } else {
          alert('Failed to create Manufacturer');
        }
      })
      .then((response) => {
        if (response) {
          manufacturers.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred while creating Manufacturer');
      });
}

// Function to update a manufacturer record
const updateRecord = (id) => {
  const url = `${apiUrl}/manufacturer/${id}`;
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      manufacturer_id: selectedManufacturer.value.manufacturer_id,
      manufacturer_name: selectedManufacturer.value.manufacturer_name,
    }),
  })
      .then((response) => {
        console.log("THIS IS THE URL:", url)
        if (response.ok) {
          alert('Record updated successfully');
          // Optionally, fetch and update the list of manufacturers
          return ComputerWorldServices.getManufacturers(); // Refresh list
        } else {
          alert('Failed to update Manufacturer');
        }
      })
      .then((response) => {
        if (response) {
          manufacturers.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred while updating Manufacturer');
      });
}

// Function to delete a manufacturer record
const deleteRecord = (id) => {
  const url = `${apiUrl}/manufacturer/${id}`;
  fetch(url, {
    method: 'DELETE',
  })
      .then((response) => {
        if (response.ok) {
          alert('Record deleted successfully');
          // Optionally, fetch and update the list of manufacturers
          return ComputerWorldServices.getManufacturers(); // Refresh list
        } else {
          alert('Failed to delete Manufacturer');
        }
      })
      .then((response) => {
        if (response) {
          manufacturers.value = response.data;
          clearSelection(); // Clear selection after creation
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred while deleting Manufacturer');
      });
}

// Clear the form data
const clearSelection = () => {
  selectedManufacturer.value = {
    manufacturer_id: '',
    manufacturer_name: ''
  };
}
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
