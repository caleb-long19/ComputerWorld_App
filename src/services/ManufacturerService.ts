import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { Manufacturer } from '@/models/Manufacturer'

const toast = useToast()

export const createManufacturer = async (manufacturer: Manufacturer) => {
  try{
    const { data } = await axios.post('/manufacturer/', manufacturer)
    return data as Manufacturer
  } catch (error) {
    console.error('Error: Could not create manufacturer', error)
    toast.error('Error: Could not create manufacturer')
  }
}

export const getManufacturer = async (id: number): Promise<Manufacturer[]> => {
  try {
    const { data } = await axios.get(`/api/manufacturer/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get manufacturer', error)
    toast.error('Error: Could not get manufacturer')
    return []
  }
}

export const getAllManufacturers = async (): Promise<Manufacturer[]> => {
  try {
    const { data } = await axios.get(`/api/manufacturer/`)
    return data
  } catch (error) {
    console.error('Error: Could not get manufacturers', error)
    toast.error('Error: Could not get manufacturers')
    return []
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
    const confirmDeletion = window.confirm('Delete selected manufacturer?')
    if (confirmDeletion) {
      await axios.delete(`/api/manufacturer/${manufacturerID}`)
      toast.success('Manufacturer has been deleted!')
    }
  } catch (error) {
    console.error('Error: Could not delete manufacturer', error)
    toast.error('Error: Could not delete manufacturer')
  }
}