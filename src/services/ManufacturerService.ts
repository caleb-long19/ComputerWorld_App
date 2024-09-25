import axios from 'axios'
import type { Manufacturer } from '@/models/manufacturer'

export const createManufacturer = async (manufacturer: Manufacturer) => {
  try{
    const { data } = await axios.post('/api/manufacturer/', manufacturer)
    return data as Manufacturer
  } catch (error) {
    console.error('Error: Could not create manufacturer', error)
  }
}

export const getManufacturer = async (id: number): Promise<Manufacturer[]> => {
  try {
    const { data } = await axios.get(`/api/manufacturer/${id}`)
    return data
  } catch (error) {
    console.error('Error: Could not get manufacturer', error)
  }
}

export const getAllManufacturers = async (): Promise<Manufacturer[]> => {
  try {
    const { data } = await axios.get(`/api/manufacturer/`)
    return data
  } catch (error) {
    console.error('Error: Could not get manufacturers', error)
  }
}

export const updateManufacturer = async (id: number, manufacturer: Manufacturer) => {
  try{
    const { data } = await axios.put(`/api/manufacturer/${id}`, manufacturer)
    return data as Manufacturer
  } catch (error) {
    console.error('Error: Could not update manufacturer', error)
  }
}

export const deleteManufacturer = async (manufacturerID) => {
  try{
    const confirmDeletion = window.confirm('Delete selected manufacturer?')
    if (confirmDeletion) {
      await axios.delete(`/api/manufacturer/${manufacturerID}`)
    }
  } catch (error) {
    console.error('Error: Could not delete manufacturer', error)
  }
}