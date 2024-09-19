import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getManufacturers() {
    return apiClient.get('/manufacturer/')
  },
  getProducts(){
    return apiClient.get('/product/')
  },
  getOrders(){
    return apiClient.get('/order/')
  },
}