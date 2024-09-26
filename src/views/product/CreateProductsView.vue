<script setup lang="ts">
import router from '@/router'
import { Field, ErrorMessage, useForm } from 'vee-validate'
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
import { createProduct} from '@/services/ProductService.js'

import { Product } from '@/models/Product.js'
import { productSchema } from '@/validation/productSchema'

const toast = useToast()

const pvModel = reactive({
  product_code: '',
  product_name: '',
  manufacturer_id: '',
  product_stock: '',
  product_price: '',
})

// Use vee-validate useForm - handles the form
const { handleSubmit, errors } = useForm({
  validationSchema: productSchema,
});

const onSubmit = async (values: { product_code: string, product_name: string, manufacturer_id: string, product_stock: string, product_price: string}) => {
  const createNewProduct: Product = {
    product_code: values.product_code,
    product_name: values.product_name,
    manufacturer_id: parseInt(values.manufacturer_id),
    product_stock: parseInt(values.product_stock),
    product_price: parseFloat(values.product_price),
  };
  try {
    const productResponse = await createProduct(createNewProduct) // Create product
    await router.push(`/product/${productResponse.product_id}`) // Navigate to the product view page
  } catch (error) {
    console.error('Error creating product:', error);
    toast.error('Error creating product. Please try again.');
  }
};

// Wrapping the submission function with handleSubmit
const submitForm = handleSubmit(onSubmit);
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
    <form @submit.prevent="submitForm">
      <fieldset>
        <!-- Product Name field -->
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
        <div class="mb-3">
          <ErrorMessage name="product_code" class="errorMessage" />
        </div>

        <!-- Product Name field -->
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
        <div class="mb-3">
          <ErrorMessage name="product_name" class="errorMessage" />
        </div>

        <!-- Manufacturer ID field -->
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
        <div class="mb-3">
          <ErrorMessage name="manufacturer_id" class="errorMessage" />
        </div>

        <!-- Product Stock field -->
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
        <div class="mb-3">
          <ErrorMessage name="product_stock" class="errorMessage" />
        </div>

        <!-- Product Price field -->
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
        <div class="mb-3">
          <ErrorMessage name="product_price" class="errorMessage" />
        </div>
      </fieldset>
      <div>
        <button type="submit" class="btn btn-primary mx-1">CREATE</button>
      </div>
    </form>
  </div>
</template>
