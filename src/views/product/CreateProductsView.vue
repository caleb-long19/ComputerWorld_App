<script setup lang="ts">
import { Field } from 'vee-validate'
import { reactive } from 'vue'
import router from '@/router'
import { createProduct} from '@/services/ProductService.js'
import { Product } from '@/models/Product.js'

const pvModel = reactive({
  product_code: '',
  product_name: '',
  manufacturer_id: '',
  product_stock: '',
  product_price: '',
})

const handleSubmit = async () => {
  const createNewProduct: Product = {
    product_code: pvModel.product_code,
    product_name: pvModel.product_name,
    manufacturer_id: parseFloat(pvModel.manufacturer_id),
    product_stock: parseInt(pvModel.product_stock),
    product_price: parseFloat(pvModel.product_price),
  }
  const productResponse = await createProduct(createNewProduct) // Create product
  await router.push(`/product/${productResponse.product_name}`) // Re-routes the user to the product view page - displays newly created product
}
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Create Product -</h5>
    <hr class="dotted" />
  </div>

  <!-- Need to create a form that will take the data and store it in the database upon create
     Need to validate the data before sending it to the database -->

  <div class="container">
    <h2>Product Manager</h2>
    <form @submit.prevent="handleSubmit">
      <fieldset>
        <div>
          <label class="mb-1">Product Code:</label>
          <Field
            type="text"
            v-model="pvModel.product_code"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="product_code"
            placeholder="XB04JFF"
          />
        </div>
        <div>
          <label class="mb-1">Product Name:</label>
          <Field
            type="text"
            v-model="pvModel.product_name"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="product_name"
            placeholder="Xbox One"
          />
        </div>
        <div>
          <label class="mb-1">Manufacturer ID:</label>
          <Field
            type="text"
            v-model="pvModel.manufacturer_id"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="manufacturer_id"
            placeholder="2"
          />
        </div>
        <div>
          <label class="mb-1">Product Stock:</label>
          <Field
            type="text"
            v-model="pvModel.product_stock"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="product_stock"
            placeholder="300"
          />
        </div>
        <div>
          <label class="mb-1">Product Price:</label>
          <Field
            type="text"
            v-model="pvModel.product_price"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="product_price"
            placeholder="250"
          />
        </div>
      </fieldset>
      <div>
        <button type="submit" class="btn btn-primary mx-1">CREATE</button>
      </div>
    </form>
  </div>
</template>
