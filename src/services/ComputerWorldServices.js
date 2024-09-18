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
  getManufacturer(id) {
    return apiClient.get('/manufacturer/' + id)
  },
  getProducts(){
    return apiClient.get('/product/')
  },
  getProduct(id) {
    return apiClient.get('/product/' + id)
  },
  getOrders(){
    return apiClient.get('/order/')
  },
  getOrder(id) {
    return apiClient.get('/order/' + id)
  }
}