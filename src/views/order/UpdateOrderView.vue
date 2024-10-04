<script setup lang="ts">
import router from '@/router'
import { Field, ErrorMessage, useForm } from 'vee-validate'
import { onMounted, reactive, ref } from 'vue'
import { getOrder, updateOrder } from '@/services/OrderService'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'

import { Order } from '@/models/Order'
import { orderSchema } from '@/validation/orderSchema'

const toast = useToast()

// Retrieve manufacturer ID
const route = useRoute()
const orderID = route.params.id

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
  const updateNewOrder: Order = {
    order_ref: values.order_ref,
    order_amount: parseInt(values.order_amount),
    product_id: parseInt(values.product_id),
  };
  try {
    const orderResponse = await updateOrder(orderID, updateNewOrder); // Update order
    await router.push(`/order/${orderResponse.order_id}`) // Navigate to the order view page
    toast.success('Successfully updated order!');
  } catch (error) {
    console.error('Error updating order:', error);
    toast.error('Error updating order. Please try again.');
  }
};

const order = ref<Order>()

onMounted(async () => {
  order.value = await getOrder(orderID)
  ovModel.order_ref = order.value.order_ref
  ovModel.order_amount = order.value.order_amount
  ovModel.product_id = order.value.product_id
})

// Wrapping the submission function with handleSubmit
const submitForm = handleSubmit(onSubmit);
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Update Order -</h5>
    <hr class="dotted" />
  </div>

  <div class="container">
    <h2>Order Update Manager</h2>
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
        <button type="submit" class="btn btn-primary mx-1">UPDATE</button>
      </div>
    </form>
  </div>
</template>