import axios from 'axios'
import type { Order } from '@/models/Order'

export const createOrder = async (order: Order) => {
  const { data } = await axios.post('/api/order/', order)
  return data as Order
}

export const getOrder = async (id: number): Promise<Order[]> => {
  const { data } = await axios.get(`/api/order/${id}`)
  return data
}

export const getAllOrders = async (): Promise<Order[]> => {
  const { data } = await axios.get(`/api/order/`)
  return data
}

export const updateOrder = async (id: number, order: Order) => {
  const { data } = await axios.put(`/api/order/${id}`, order)
  return data as Order
}

export const deleteOrder = async (orderID) => {
  await axios.delete(`/api/order/${orderID}`)
}