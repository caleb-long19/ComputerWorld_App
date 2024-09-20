<script setup>
import { products, selectedProduct, fetchProducts, createRecord, updateRecord, deleteRecord, clearSelection, selectProduct} from "../services/controllers/ProductServices.js";
import ProductsDisplay from "../components/ProductsDisplay.vue";

// vee-validate and Yup imports for validation
import { useForm, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

// Validation schema for manufacturer name
const schema = Yup.object({
  product_code: Yup.string()
    .required('Product Code is required')
    .matches(/^[a-zA-Z-0-9]+$/, 'Product Code cannot contain special characters'),
  product_name: Yup.string()
    .required('Product Name is required')
    .matches(/^[a-zA-Z 0-9]+$/, 'Product Name Required: Must not contain special characters'),
  manufacturer_id: Yup.string()
    .required('Manufacturer ID is required')
    .matches(/^[0-9]*$/, 'Manufacturer ID Required:  Must not contain letters or special characters'),
  product_stock: Yup.string()
    .required('Please input the price of the order')
    .matches(/^[0-9]*$/, 'Product Stock Required:  Must not contain letters or special characters'),
  product_price: Yup.string()
    .required('Please input the price of the order')
    .matches(/^[0-9]*$/, 'Product Price Required:  Must not contain letters or special characters')

});

// Set up the form using useForm with validation schema
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: selectedProduct.value
});

// Function to handle form submission
const onSubmit = handleSubmit((values) => {
  // Sync form values with selectedProduct
  selectedProduct.value = values;

  if (selectedProduct.value.product_id) {
    // Update product if ID exists
    updateRecord(selectedProduct.value.product_id);
  } else {
    // Create new product
    createRecord();
  }
});

fetchProducts()
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- PRODUCTS -</h5>
    <hr class="dotted" />
  </div>

  <!-- Pass products and selection handler to ProductsDisplay -->
  <div class="container">
    <ProductsDisplay
        :products="products"
        @selectProduct="selectProduct"
    />
  </div>

  <!-- Product Manager form populated with selected product data -->
  <div class="container">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Product Manager</legend>

        <!-- Product ID field -->
        <div class="mb-3" v-if="selectedProduct.product_id">
            <label class="mb-1">Product ID</label>
            <Field
                type="text"
                class="form-control"
                style="width: 200px"
                name="product_id"
                v-model="selectedProduct.product_id"
                readonly
            />
        </div>

        <!-- Product Name field -->
        <div class="mb-3">
          <label class="mb-1">Product Code</label>
          <Field
              type="text"
              style="width: 390px"
              class="form-control"
              name="product_code"
              v-model="selectedProduct.product_code"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="product_code" class="errorMessage" />
        </div>

        <!-- Product Name field -->
        <div class="mb-3">
          <label class="mb-1">Product Name</label>
          <Field
              type="text"
              style="width: 390px"
              class="form-control"
              name="product_name"
              v-model="selectedProduct.product_name"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="product_name" class="errorMessage" />
        </div>

        <!-- Manufacturer ID field -->
        <div class="mb-3">
          <label class="mb-1" for="manufacturer_id">Manufacturer ID</label>
          <Field
              type="text"
              style="width: 200px"
              class="form-control"
              name="manufacturer_id"
              v-model="selectedProduct.manufacturer_id"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="manufacturer_id" class="errorMessage" />
        </div>

        <div class="mb-3">
          <label class="mb-1">Stock</label>
          <Field
              type="text"
              style="width: 390px"
              class="form-control"
              name="product_stock"
              v-model="selectedProduct.product_stock"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="product_stock" class="errorMessage" />
        </div>

        <div class="mb-3">
          <label class="mb-1">Price</label>
          <Field
              type="text"
              style="width: 390px"
              class="form-control"
              name="product_price"
              v-model="selectedProduct.product_price"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="product_price" class="errorMessage" />
        </div>
      </fieldset>

      <!-- Product Manager Buttons -->
      <div v-if="selectedProduct.product_id">
        <button type="submit" class="btn btn-primary mx-1">
          Update
        </button>
        |
        <button type="button" class="btn btn-danger mx-1" @click="deleteRecord(selectedProduct.product_id)">
          Delete
        </button>
        |
        <button type="button" class="btn btn-info mx-1" @click="clearSelection">
          Clear Selected Record
        </button>
      </div>
      <div v-else>
        <button type="submit" class="btn btn-primary">
          Create
        </button>
      </div>
    </form>
  </div>
</template>