import axios from 'axios'
import type { Order } from '@/models/Order'
import { useToast } from 'vue-toastification'

// Initialize toast
const toast = useToast()

export const createOrder = async (order: Order) => {
  try{
    const { data } = await axios.post('/api/order/', order)
    return data as Order
  } catch (error) {
    console.error('Error: Could not create order', error)
    toast.error('Error: Could not create order')
  }
}

export const getOrder = async (id: number): Promise<Order[]> => {
  try {
    const { data } = await axios.get(`/api/order/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get order', error)
    toast.error('Error: Could not get order')
  }
}

export const getAllOrders = async (): Promise<Order[]> => {
  try {
    const { data } = await axios.get(`/api/order/`)
    return data
  } catch (error) {
    console.error('Error: Could not get orders', error)
    toast.error('Error: Could not get orders')
  }
}

export const updateOrder = async (id: number, order: Order) => {
  try{
    const { data } = await axios.put(`/api/order/${id}`, order)
    return data as Order
  } catch (error) {
    console.error('Error: Could not update order', error)
    toast.error('Error: Could not update order')
  }
}

export const deleteOrder = async (orderID) => {
  try{
    await axios.delete(`/api/order/${orderID}`)
    toast.success('Order deleted successfully.')
  } catch (error) {
    console.error('Error: Could not delete order', error)
    toast.error('Error: Could not delete order')
  }
}