<script setup lang="ts">
import { Field } from 'vee-validate'
import { reactive } from 'vue'
import router from '@/router'
import { createManufacturer} from '@/services/ManufacturerService.js'
import { Manufacturer } from '@/models/Manufacturer.js'

const mfvModel = reactive({
  manufacturer_name: '',
})

const handleSubmit = async () => {
  const createNewManufacturer: Manufacturer = {
    manufacturer_name: mfvModel.manufacturer_name,
  }
  const manufacturerResponse = await createManufacturer(createNewManufacturer) // Create manufacturer
  await router.push(`/manufacturer/${manufacturerResponse.manufacturer_id}`) // Re-routes the user to the manufacturer view page - displays newly created manufacturer
}
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Create Manufacturer -</h5>
    <hr class="dotted" />
  </div>

  <!-- Need to create a form that will take the data and store it in the database upon create
     Need to validate the data before sending it to the database -->

  <div class="container">
    <h2>Manufacturer Manager</h2>
    <form @submit.prevent="handleSubmit">
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
      </fieldset>
      <div>
        <button type="submit" class="btn btn-primary mx-1">CREATE</button>
      </div>
    </form>
  </div>

</template>
