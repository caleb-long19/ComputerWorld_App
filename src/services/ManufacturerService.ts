import axios from 'axios'
import type { Manufacturer } from '@/models/manufacturer'
import { useToast } from 'vue-toastification'

const toast = useToast()  // Initialize toast

export const createManufacturer = async (manufacturer: Manufacturer) => {
  try{
    const { data } = await axios.post('/api/manufacturer/', manufacturer)
    return data as Manufacturer
  } catch (error) {
    console.error('Error: Could not create manufacturer', error)
    toast.error('Error: Could not create manufacturer', error)
  }
}

export const getManufacturer = async (id: number): Promise<Manufacturer[]> => {
  try {
    const { data } = await axios.get(`/api/manufacturer/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get manufacturer', error)
    toast.error('Error: Could not get manufacturer')
  }
}

export const getAllManufacturers = async (): Promise<Manufacturer[]> => {
  try {
    const { data } = await axios.get(`/api/manufacturer/`)
    return data
  } catch (error) {
    console.error('Error: Could not get manufacturers', error)
    toast.error('Error: Could not get manufacturers')
  }
}

export const updateManufacturer = async (id: number, manufacturer: Manufacturer) => {
  try{
    const { data } = await axios.put(`/api/manufacturer/${id}`, manufacturer)
    return data as Manufacturer
  } catch (error) {
    console.error('Error: Could not update manufacturer', error)
    toast.error('Error: Could not update manufacturer')
  }
}

export const deleteManufacturer = async (manufacturerID) => {
  try{
    await axios.delete(`/api/manufacturer/${manufacturerID}`)
    toast.success('Manufacturer deleted successfully.')
  } catch (error) {
    console.error('Error: Could not delete manufacturer', error)
    toast.error('Error: Could not delete manufacturer')
  }
}