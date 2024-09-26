<script setup lang="ts">
import router from '@/router'
import { Field, ErrorMessage, useForm } from 'vee-validate'
import { onMounted, reactive, ref } from 'vue'
import { getManufacturer, updateManufacturer } from '@/services/ManufacturerService.js'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'

import { Manufacturer } from '@/models/Manufacturer.js'
import { manufacturerSchema } from '@/validation/manufacturerSchema'

const toast = useToast()

// Retrieve manufacturer ID
const route = useRoute()
const manufacturerID = route.params.id

const mfvModel = reactive({
  manufacturer_name: '',
})

// Use vee-validate useForm - handles the form
const { handleSubmit, errors } = useForm({
  validationSchema: manufacturerSchema,
});

const onSubmit = async (values: { manufacturer_name: string }) => {
  const updateNewManufacturer: Manufacturer = {
    manufacturer_name: values.manufacturer_name,
  };
  try {
    const manufacturerResponse = await updateManufacturer(manufacturerID, updateNewManufacturer) // Update manufacturer
    await router.push(`/manufacturer/${manufacturerResponse.manufacturer_id}`) // Re-routes the user to the manufacturer view page - displays updated manufacturer
  } catch (error) {
    console.error('Error updating manufacturer:', error);
    toast.error('Error updating manufacturer. Please try again.');
  }
};

const manufacturer = ref<Manufacturer>()

onMounted(async () => {
  manufacturer.value = await getManufacturer(manufacturerID)
  mfvModel.manufacturer_name = manufacturer.value.manufacturer_name
})

// Wrapping the submission function with handleSubmit
const submitForm = handleSubmit(onSubmit);
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Update Manufacturer -</h5>
    <hr class="dotted" />
  </div>

  <!-- Need to create a form that will take the data and store it in the database upon create
     Need to validate the data before sending it to the database -->

  <div class="container">
    <h2>Manufacturer Update Manager</h2>
    <form @submit.prevent="submitForm">
      <fieldset>
        <div>
          <label class="mb-1">Manufacturer Name:</label>
          <Field
            type="text"
            v-model="mfvModel.manufacturer_name"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="manufacturer_name"
            placeholder="Microsoft"
          />
        </div>
        <div class="mb-3">
          <ErrorMessage name="manufacturer_name" class="errorMessage" />
        </div>
      </fieldset>
      <div>
        <button type="submit" class="btn btn-primary mx-1">UPDATE</button>
      </div>
    </form>
  </div>
</template>