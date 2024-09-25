import axios from 'axios'
import type { Order } from '@/models/Order'

export const createOrder = async (order: Order) => {
  try{
    const { data } = await axios.post('/api/order/', order)
    return data as Order
  } catch (error) {
    console.error('Error: Could not create order', error)
  }
}

export const getOrder = async (id: number): Promise<Order[]> => {
  try {
    const { data } = await axios.get(`/api/order/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get order', error)
  }
}

export const getAllOrders = async (): Promise<Order[]> => {
  try {
    const { data } = await axios.get(`/api/order/`)
    return data
  } catch (error) {
    console.error('Error: Could not get orders', error)
  }
}

export const updateOrder = async (id: number, order: Order) => {
  try{
    const { data } = await axios.put(`/api/order/${id}`, order)
    return data as Order
  } catch (error) {
    console.error('Error: Could not update order', error)
  }
}

export const deleteOrder = async (orderID) => {
  try{
    const confirmDeletion = window.confirm('Delete selected order?')
    if (confirmDeletion) {
      await axios.delete(`/api/order/${orderID}`)
    }
  } catch (error) {
    console.error('Error: Could not delete order', error)
  }
}