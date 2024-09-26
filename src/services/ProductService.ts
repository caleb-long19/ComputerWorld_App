import axios from 'axios'
import type { Product } from '@/models/product'
import { useToast } from 'vue-toastification'

// Initialize toast
const toast = useToast()

export const createProduct = async (product: Product) => {
  try{
    const { data } = await axios.post('/api/product/', product)
    return data as Product
  } catch (error) {
    console.error('Error: Could not create product', error)
    toast.error('Error: Could not create product')
  }
}

export const getProduct = async (id: number): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`/api/product/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get product', error)
    toast.error('Error: Could not get product')
  }
}

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`/api/product/`)
    return data
  } catch (error) {
    console.error('Error: Could not get products', error)
    toast.error('Error: Could not get products')
  }
}

export const updateProduct = async (id: number, product: Product) => {
  try{
    const { data } = await axios.put(`/api/product/${id}`, product)
    return data as Product
  } catch (error) {
    console.error('Error: Could not update product', error)
    toast.error('Error: Could not update product')
  }
}

export const deleteProduct = async (productID) => {
  try{
    await axios.delete(`/api/product/${productID}`)
    toast.success('Product deleted successfully.')
  } catch (error) {
    console.error('Error: Could not delete product', error)
    toast.error('Error: Could not delete product')
  }
}