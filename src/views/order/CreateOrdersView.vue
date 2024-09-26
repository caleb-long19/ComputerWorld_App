<script setup lang="ts">
import router from '@/router'
import { Field, ErrorMessage, useForm } from 'vee-validate'
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
import { createOrder } from '@/services/OrderService'

import { Order } from '@/models/Order'
import { orderSchema } from '@/validation/orderSchema'

const toast = useToast()

const ovModel = reactive({
  order_ref: '',
  order_amount: '',
  product_id: '',
})

// Use vee-validate useForm - handles the form
const { handleSubmit, errors } = useForm({
  validationSchema: orderSchema,
});

const onSubmit = async (values: { order_ref: string, order_amount: string, product_id: string}) => {
  const createNewOrder: Order = {
    order_ref: values.order_ref,
    order_amount: parseInt(values.order_amount),
    product_id: parseInt(values.product_id),
  };
  try {
    const orderResponse = await createOrder(createNewOrder); // Create order
    toast.success('Order created successfully!');
    await router.push(`/order/${orderResponse.order_id}`) // Navigate to the order view page
  } catch (error) {
    console.error('Error creating order:', error);
    toast.error('Error creating order. Please try again.');
  }
};

// Wrapping the submission function with handleSubmit
const submitForm = handleSubmit(onSubmit);
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Create Order -</h5>
    <hr class="dotted" />
  </div>

  <!-- TODO: Need to validate the data before sending it to the database -->
  <!-- TODO: Need to perform error handling e.g. check form values -->

  <div class="container">
    <h2>Order Manager</h2>
    <form @submit.prevent="submitForm">
      <fieldset>
        <!-- Order Ref field -->
        <div>
          <label class="mb-1">Order Reference:</label>
          <Field
            type="text"
            v-model="ovModel.order_ref"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="order_ref"
            placeholder="JNFO30D"
          />
        </div>
        <div class="mb-3">
          <ErrorMessage name="order_ref" class="errorMessage" />
        </div>

        <!-- Order Amount field -->
        <div>
          <label class="mb-1">Order Amount:</label>
          <Field
            type="text"
            v-model="ovModel.order_amount"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="order_amount"
            placeholder="20"
          />
        </div>
        <div class="mb-3">
          <ErrorMessage name="order_amount" class="errorMessage" />
        </div>

        <!-- Product ID field -->
        <div>
          <label class="mb-1">Product ID:</label>
          <Field
            type="text"
            v-model="ovModel.product_id"
            style="width: 50%"
            class="form-control rounded py-2 px-3 mb-2"
            name="product_id"
            placeholder="5"
          />
        </div>
        <div class="mb-3">
          <ErrorMessage name="product_id" class="errorMessage" />
        </div>
      </fieldset>
      <div>
        <button type="submit" class="btn btn-primary mx-1">CREATE</button>
      </div>
    </form>
  </div>

</template>
