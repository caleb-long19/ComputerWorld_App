import axios from 'axios'
import type { Manufacturer } from '@/models/manufacturer'

export const createManufacturer = async (manufacturer: Manufacturer) => {
  const { data } = await axios.post('/api/manufacturer/', manufacturer)
  return data as Manufacturer
}

export const getManufacturer = async (id: number): Promise<Manufacturer[]> => {
  const { data } = await axios.get(`/api/manufacturer/${id}`)
  return data
}

export const getAllManufacturers = async (): Promise<Manufacturer[]> => {
  const {data} = await axios.get(`/api/manufacturer/`)
  return data
}

export const updateManufacturer = async (id: number, manufacturer: Manufacturer) => {
  const { data } = await axios.put(`/api/manufacturer/${id}`, manufacturer)
  return data as Manufacturer
}

export const deleteManufacturer = async (manufacturerID) => {
  await axios.delete(`/api/manufacturer/${manufacturerID}`)
}