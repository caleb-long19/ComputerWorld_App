import axios from 'axios'

const apiClientManufacturer = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getManufacturers() {
    return apiClientManufacturer.get('/manufacturer/')
  },
  getManufacturer(id) {
    return apiClientManufacturer.get('/manufacturer/' + id)
  },
}