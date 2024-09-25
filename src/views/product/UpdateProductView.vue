<script setup lang="ts">
import { Field } from 'vee-validate'
import { onMounted, reactive, ref } from 'vue'
import router from '@/router'
import { getProduct, updateProduct } from '@/services/ProductService'
import { Product } from '@/models/Product'
import { useRoute } from 'vue-router'

// Retrieve manufacturer ID
const route = useRoute()
const productID = route.params.id

const pvModel = reactive({
  product_code: '',
  product_name: '',
  manufacturer_id: '',
  product_stock: '',
  product_price: '',
})

const handleSubmit = async () => {
  const updateNewProduct: Product = {
    product_code: pvModel.product_code,
    product_name: pvModel.product_name,
    manufacturer_id: parseInt(pvModel.manufacturer_id),
    product_stock: parseInt(pvModel.product_stock),
    product_price: parseFloat(pvModel.product_price),
  }
  const productResponse = await updateProduct(productID, updateNewProduct) // Create manufacturer
  await router.push(`/product/${productResponse.product_id}`) // Re-routes the user to the manufacturer view page - displays updated manufacturer
}

const product = ref<Product>()

onMounted(async () => {
  product.value = await getProduct(productID)
  pvModel.product_code = product.value.product_code
  pvModel.product_name = product.value.product_name
  pvModel.manufacturer_id = product.value.manufacturer_id
  pvModel.product_stock = product.value.product_stock
  pvModel.product_price = product.value.product_price
})
</script>

<template>
  <div class="layout-title">
    <h1 class="lemon-font-bold display-4">COMPUTER WORLD</h1>
    <h5 class="lemon-font-regular">- Update Product -</h5>
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
        <button type="submit" class="btn btn-primary mx-1">UPDATE</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>