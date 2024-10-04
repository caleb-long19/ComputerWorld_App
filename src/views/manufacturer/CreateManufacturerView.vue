<script setup lang="ts">
import router from '@/router'
import { Field, ErrorMessage, useForm } from 'vee-validate'
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
import { createManufacturer} from '@/services/ManufacturerService.js'

import { Manufacturer } from '@/models/Manufacturer.js'
import { manufacturerSchema } from '@/validation/manufacturerSchema'

const toast = useToast()

const mfvModel = reactive({
  manufacturer_name: '',
})

// Use vee-validate useForm - handles the form
const { handleSubmit, errors } = useForm({
  validationSchema: manufacturerSchema,
});

const onSubmit = async (values: { manufacturer_name: string }) => {
  const createNewManufacturer: Manufacturer = {
    manufacturer_name: values.manufacturer_name,
  };
  try {
    const manufacturerResponse = await createManufacturer(createNewManufacturer); // Create manufacturer
    await router.push(`/manufacturer/${manufacturerResponse.manufacturer_id}`); // Navigate to the manufacturer view page
    toast.success('Successfully created manufacturer!');
  } catch (error) {
    console.error('Error creating manufacturer:', error);
    toast.error('Error creating manufacturer. Please try again.');
  }
};

// Wrapping the submission function with handleSubmit
const submitForm = handleSubmit(onSubmit);
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Create Manufacturer -</h5>
    <hr class="dotted" />
  </div>

  <div class="container">
    <h2>Manufacturer Manager</h2>
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
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="manufacturer_name" class="errorMessage" />
        </div>
      </fieldset>
      <div>
        <button type="submit" class="btn btn-primary mx-1">CREATE</button>
      </div>
    </form>
  </div>
</template>
