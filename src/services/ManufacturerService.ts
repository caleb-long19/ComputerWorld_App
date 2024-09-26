import axios from 'axios'
import type { Manufacturer } from '@/models/manufacturer'
import { useToast } from 'vue-toastification'

const toast = useToast()  // Initialize toast

export const createManufacturer = async (manufacturer: Manufacturer) => {
  try{
    const { data } = await axios.post('/api/manufacturer/', manufacturer)
    toast.success('Manufacturer has been created!');
    return data as Manufacturer
  } catch (error) {
    console.error('Error: Could not create manufacturer!', error)
    toast.error('Error: Could not create manufacturer!', error)
  }
}

export const getManufacturer = async (id: number): Promise<Manufacturer[]> => {
  try {
    const { data } = await axios.get(`/api/manufacturer/${id}`)
    toast.success('Manufacturer has been fetched!');
    return data
  } catch (error) {
    console.error('Error: Could not get manufacturer!', error)
    toast.error('Error: Could not get manufacturer!')
  }
}

export const getAllManufacturers = async (): Promise<Manufacturer[]> => {
  try {
    const { data } = await axios.get(`/api/manufacturer/`)
    toast.success('Manufacturers have been fetched!');
    return data
  } catch (error) {
    console.error('Error: Could not get manufacturers!', error)
    toast.error('Error: Could not get manufacturers!')
  }
}

export const updateManufacturer = async (id: number, manufacturer: Manufacturer) => {
  try{
    const { data } = await axios.put(`/api/manufacturer/${id}`, manufacturer)
    toast.success('Manufacturer has been updated!');
    return data as Manufacturer
  } catch (error) {
    console.error('Error: Could not update manufacturer!', error)
    toast.error('Error: Could not update manufacturer!')
  }
}

export const deleteManufacturer = async (manufacturerID) => {
  try{
    await axios.delete(`/api/manufacturer/${manufacturerID}`)
    toast.success('Manufacturer has been deleted!')
  } catch (error) {
    console.error('Error: Could not delete manufacturer!', error)
    toast.error('Error: Could not delete manufacturer!')
  }
}