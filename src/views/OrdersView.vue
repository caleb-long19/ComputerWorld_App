<script setup>
import {orders, selectedOrder, fetchOrders, createRecord, updateRecord, deleteRecord, clearSelection, selectOrder} from "../services/controllers/OrderServices.js";
import OrdersDisplay from "../components/OrdersDisplay.vue";

// vee-validate and Yup imports for validation
import { useForm, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

// Validation schema for manufacturer name
const schema = Yup.object({
  order_ref: Yup.string()
    .required('Order Reference is required')
    .matches(/^[a-zA-Z-0-9]+$/, 'Order Reference cannot contain special characters'),
  order_amount: Yup.string()
    .required('Order Amount is required')
    .matches(/^[0-9]*$/, 'Order Amount Required: Must not contain letters or special characters'),
  product_id: Yup.string()
    .required('Product ID is required')
    .matches(/^[0-9]*$/, 'Product ID Required:  Must not contain letters or special characters'),
  order_price: Yup.string()
    .required('Please input the price of the order')
    .matches(/^[0-9]*$/, 'Order Price Required:  Must not contain letters or special characters'),
});

// Set up the form using useForm with validation schema
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: selectedOrder.value
});

// Function to handle form submission
const onSubmit = handleSubmit((values) => {
  // Sync form values with selectedOrder
  selectedOrder.value = values;

  if (selectedOrder.value.order_id) {
    // Update order if ID exists
    updateRecord(selectedOrder.value.order_id);
  } else {
    // Create new order
    createRecord();
  }
});

fetchOrders()
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- ORDERS -</h5>
    <hr class="dotted" />
  </div>

  <!-- Pass Orders and selection handler to OrdersDisplay -->
  <div class="container">
    <OrdersDisplay
      :orders="orders"
      @selectOrder="selectOrder"
    />
  </div>

  <!-- Order Manager form populated with selected Order data -->
  <div class="container">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Order Manager</legend>

        <!-- Order ID field -->
        <div class="mb-3" v-if="selectedOrder.order_id">
          <label class="mb-1">Order ID</label>
          <Field
            type="text"
            style="width: 200px"
            class="form-control"
            name="order_id"
            v-model="selectedOrder.order_id"
            readonly
          />
        </div>

        <!-- Order Ref field -->
        <div class="mb-3">
          <label class="mb-1" for="orderRef">Order Reference</label>
          <Field
            type="text"
            name="order_ref"
            style="width: 390px"
            class="form-control"
            v-model="selectedOrder.order_ref"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="order_ref" class="errorMessage" />
        </div>

        <!-- Order Amount field -->
        <div class="mb-3">
          <label class="mb-1" for="orderAmount">Order Amount</label>
          <Field
            type="text"
            name="order_amount"
            style="width: 390px"
            class="form-control"
            v-model="selectedOrder.order_amount"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="order_amount" class="errorMessage" />
        </div>

        <!-- Product ID field -->
        <div class="mb-3">
          <label class="mb-1" for="productID">Product ID</label>
          <Field
            type="text"
            name="product_id"
            style="width: 390px"
            class="form-control"
            v-model="selectedOrder.product_id"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="product_id" class="errorMessage" />
        </div>

        <!--  Order price field -->
        <div class="mb-3">
          <label class="mb-1" for="price">Price</label>
          <Field
            type="text"
            name="order_price"
            style="width: 390px"
            class="form-control"
            v-model="selectedOrder.order_price"
          />
        </div>
        <!-- Validation error message -->
        <div class="mb-3">
          <ErrorMessage name="order_price" class="errorMessage" />
        </div>
      </fieldset>

      <!-- Order Manager Buttons -->
      <div v-if="selectedOrder.order_id">
        <button type="submit" class="btn btn-primary mx-1">
          Update
        </button>
        |
        <button type="button" class="btn btn-danger mx-1" @click="deleteRecord(selectedOrder.order_id)">
          Delete
        </button>
        |
        <button type="button" class="btn btn-info mx-1" @click="clearSelection">
          Clear Selected Record
        </button>
      </div>
      <div v-else>
        <button type="submit" class="btn btn-primary mx-1">Create</button>
      </div>
    </form>
  </div>
</template>