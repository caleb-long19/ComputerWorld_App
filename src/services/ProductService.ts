import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { Product } from '@/models/Product'

const toast = useToast()

export const createProduct = async (product: Product) => {
  try{
    const { data } = await axios.post('/products', product)
    return data as Product
  } catch (error) {
    console.error('Error: Could not create product', error)
    toast.error('Error: Could not create product')
  }
}

export const getProduct = async (id: number): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`/products/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get product', error)
    toast.error('Error: Could not get product')
  }
}

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`/products`)
    return data
  } catch (error) {
    console.error('Error: Could not get products', error)
    toast.error('Error: Could not get products')
  }
}

export const updateProduct = async (id: number, product: Product) => {
  try{
    const { data } = await axios.put(`/products/${id}`, product)
    return data as Product
  } catch (error) {
    console.error('Error: Could not update product', error)
    toast.error('Error: Could not update product')
  }
}

export const deleteProduct = async (productID) => {
  try{
    const confirmDeletion = window.confirm('Delete selected product?')
    if (confirmDeletion) {
      await axios.delete(`/products/${productID}`)
      toast.success('Product has been deleted!')
    }
  } catch (error) {
    console.error('Error: Could not delete product', error)
    toast.error('Error: Could not delete product')
  }
}