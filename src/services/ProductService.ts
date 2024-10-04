import axios from 'axios'
import type { Product } from '@/models/product'

export const createProduct = async (product: Product) => {
  const { data } = await axios.post('/api/product/', product)
  return data as Product
}

export const getProduct = async (id: number): Promise<Product[]> => {
  const { data } = await axios.get(`/api/product/${id}`)
  return data
}

export const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get(`/api/product/`)
  return data
}

export const updateProduct = async (id: number, product: Product) => {
  const { data } = await axios.put(`/api/product/${id}`, product)
  return data as Product
}

export const deleteProduct = async (productID) => {
  await axios.delete(`/api/product/${productID}`)
}