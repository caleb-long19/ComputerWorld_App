<script setup lang="ts">
import { Field } from 'vee-validate'
import { onMounted, reactive, ref } from 'vue'
import router from '@/router'
import { getOrder, updateOrder } from '@/services/OrderService'
import { Order } from '@/models/Order'
import { useRoute } from 'vue-router'

// Retrieve manufacturer ID
const route = useRoute()
const orderID = route.params.id

const ovModel = reactive({
  order_ref: '',
  order_amount: '',
  product_id: '',
})

const handleSubmit = async () => {
  const updateNewOrder: Order = {
    order_ref: ovModel.order_ref,
    order_amount: parseInt(ovModel.order_amount),
    product_id: parseInt(ovModel.product_id),
  }
  const orderResponse = await updateOrder(orderID, updateNewOrder) // Update order
  await router.push(`/order/${orderResponse.order_id}`) // Re-routes the user to the order view page - displays updated order
}

const order = ref<Order>()

onMounted(async () => {
  order.value = await getOrder(orderID)
  ovModel.order_ref = order.value.order_ref
  ovModel.order_amount = order.value.order_amount
  ovModel.product_id = order.value.product_id
})
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Update Order -</h5>
    <hr class="dotted" />
  </div>

  <div class="container">
    <h2>Order Update Manager</h2>
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
        <button type="submit" class="btn btn-primary mx-1">UPDATE</button>
      </div>
    </form>
  </div>
</template>