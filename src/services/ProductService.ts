import axios from 'axios'
import type { Product } from '@/models/product'

export const createProduct = async (product: Product) => {
  try{
    const { data } = await axios.post('/api/product/', product)
    return data as Product
  } catch (error) {
    console.error('Error: Could not create product', error)
  }
}

export const getProduct = async (id: number): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`/api/product/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get product', error)
  }
}

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`/api/product/`)
    return data
  } catch (error) {
    console.error('Error: Could not get products', error)
  }
}

export const updateProduct = async (id: number, product: Product) => {
  try{
    const { data } = await axios.put(`/api/product/${id}`, product)
    return data as Product
  } catch (error) {
    console.error('Error: Could not update product', error)
  }
}

export const deleteProduct = async (productID) => {
  try{
    const confirmDeletion = window.confirm('Delete selected product?')
    if (confirmDeletion) {
      await axios.delete(`/api/product/${productID}`)
    }
  } catch (error) {
    console.error('Error: Could not delete product', error)
  }
}