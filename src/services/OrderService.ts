import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { Order } from '@/models/Order'

const toast = useToast()

export const createOrder = async (order: Order) => {
  try{
    const { data } = await axios.post('/orders', order)
    return data as Order
  } catch (error) {
    console.error('Error: Could not create order', error)
    toast.error('Error: Could not create order')
  }
}

export const getOrder = async (id: number): Promise<Order[]> => {
  try {
    const { data } = await axios.get(`/orders/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get order', error)
    toast.error('Error: Could not get order')
  }
}

export const getAllOrders = async (): Promise<Order[]> => {
  try {
    const { data } = await axios.get(`/orders`)
    return data
  } catch (error) {
    console.error('Error: Could not get orders', error)
    toast.error('Error: Could not get orders')
  }
}

export const updateOrder = async (id: number, order: Order) => {
  try{
    const { data } = await axios.put(`/orders/${id}`, order)
    return data as Order
  } catch (error) {
    console.error('Error: Could not update order', error)
    toast.error('Error: Could not update order')
  }
}

export const deleteOrder = async (orderID) => {
  try{
    const confirmDeletion = window.confirm('Delete selected order?')
    if (confirmDeletion) {
      await axios.delete(`/orders/${orderID}`)
      toast.success('Order has been deleted!')
    }
  } catch (error) {
    console.error('Error: Could not delete order', error)
    toast.error('Error: Could not delete order')
  }
}