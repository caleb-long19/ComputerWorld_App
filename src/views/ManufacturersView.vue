<script setup>
import { manufacturers, fetchManufacturers, createRecord, updateRecord, deleteRecord, selectedManufacturer, selectManufacturer, clearSelection } from "../services/controllers/ManufacturerServices.js";
import ManufacturersDisplay from "../components/ManufacturersDisplay.vue";

// vee-validate and Yup imports for validation
import { useForm, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

// Validation schema for manufacturer name
const schema = Yup.object({
  manufacturer_name: Yup.string()
    .required('Manufacturer Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Manufacturer Name cannot contain numbers or special characters'),
});

// Set up the form using useForm with validation schema
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: selectedManufacturer.value
});

// Function to handle form submission
const onSubmit = handleSubmit((values) => {
  // Sync form values with selectedManufacturer
  selectedManufacturer.value = values;

  if (selectedManufacturer.value.manufacturer_id) {
    // Update manufacturer if ID exists
    updateRecord(selectedManufacturer.value.manufacturer_id);
  } else {
    // Create new manufacturer
    createRecord();
  }
});

fetchManufacturers();  // Fetch manufacturers when component mounts
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- MANUFACTURERS -</h5>
    <hr class="dotted" />
  </div>

  <!-- Pass manufacturers and selection handler to ManufacturersDisplay -->
  <div class="container">
    <ManufacturersDisplay
      :manufacturers="manufacturers"
      @selectManufacturer="selectManufacturer"
    />
  </div>

  <!-- Manufacturer Manager form -->
  <div class="container">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Manufacturer Manager</legend>

        <!-- Manufacturer ID field -->
        <div class="mb-3" v-if="selectedManufacturer.manufacturer_id">
          <label class="mb-1">Manufacturer ID</label>
          <Field
            type="text"
            style="width: 300px"
            class="form-control"
            name="manufacturer_id"
            v-model="selectedManufacturer.manufacturer_id"
            readonly
          />
        </div>

        <!-- Manufacturer Name field -->
        <div class="mb-3">
          <label class="mb-1">Manufacturer Name:</label>
          <!-- Field component for validation, bind to form state -->
          <Field
            type="text"
            v-model="selectedManufacturer.manufacturer_name"
            name="manufacturer_name"
            style="width: 525px"
            class="form-control"
          />
        </div>

        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="manufacturer_name" class="errorMessage" />
        </div>
      </fieldset>

      <!-- Manufacturer Manager buttons -->
      <div v-if="selectedManufacturer.manufacturer_id">
        <button type="submit" class="btn btn-primary">UPDATE</button> |
        <button type="button" class="btn btn-danger" @click="deleteRecord(selectedManufacturer.manufacturer_id)">DELETE</button> |
        <button type="button" class="btn btn-info" @click="clearSelection">CLEAR DATA</button>
      </div>
      <div v-else>
        <button type="submit" class="btn btn-primary mx-1">CREATE</button>
      </div>
    </form>
  </div>
</template>
