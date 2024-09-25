<script setup lang="ts">
import { Field } from 'vee-validate'
import { reactive } from 'vue'
import router from '@/router'
import { createOrder } from '@/services/OrderService'
import { Order } from '@/models/Order'

const ovModel = reactive({
  order_ref: '',
  order_amount: '',
  product_id: '',
})

const handleSubmit = async () => {
  const createNewOrder: Order = {
    order_ref: ovModel.order_ref,
    order_amount: parseInt(ovModel.order_amount),
    product_id: parseInt(ovModel.product_id),
  }
  const orderResponse = await createOrder(createNewOrder) // Create product
  await router.push(`/order/${orderResponse.order_ref}`) // Re-routes the user to the product view page - displays newly created product
}
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Create Order -</h5>
    <hr class="dotted" />
  </div>

  <!-- Need to validate the data before sending it to the database -->
  <!-- Need to perform error handling e.g. check form values -->

  <div class="container">
    <h2>Order Manager</h2>
    <form @submit.prevent="handleSubmit">
      <fieldset>
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
      </fieldset>
      <div>
        <button type="submit" class="btn btn-primary mx-1">CREATE</button>
      </div>
    </form>
  </div>

</template>
