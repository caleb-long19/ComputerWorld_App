import axios from 'axios'
import type { Product } from '@/models/product'
import { useToast } from 'vue-toastification'

// Initialize toast
const toast = useToast()

export const createProduct = async (product: Product) => {
  try{
    const { data } = await axios.post('/api/product/', product)
    toast.success('Product has been created!');
    return data as Product
  } catch (error) {
    console.error('Error: Could not create product!', error)
    toast.error('Error: Could not create product!')
  }
}

export const getProduct = async (id: number): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`/api/product/${id}`)
    toast.success('Product has been fetched!');
    return data
  } catch (error) {
    console.error('Error: Could not get product!', error)
    toast.error('Error: Could not get product!')
  }
}

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`/api/product/`)
    toast.success('Products have been fetched!');
    return data
  } catch (error) {
    console.error('Error: Could not get products!', error)
    toast.error('Error: Could not get products!')
  }
}

export const updateProduct = async (id: number, product: Product) => {
  try{
    const { data } = await axios.put(`/api/product/${id}`, product)
    toast.success('Product has been updated!');
    return data as Product
  } catch (error) {
    console.error('Error: Could not update product!', error)
    toast.error('Error: Could not update product!')
  }
}

export const deleteProduct = async (productID) => {
  try{
    await axios.delete(`/api/product/${productID}`)
    toast.success('Product has been deleted!')
  } catch (error) {
    console.error('Error: Could not delete product!', error)
    toast.error('Error: Could not delete product!')
  }
}