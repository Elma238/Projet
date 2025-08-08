// src/services/axios.js
//import axios from 'axios'

//const api = axios.create({
  //baseURL: 'https://immotgvbrio-store.onrender.com/api',
  //timeout: 10000,
//})

//api.interceptors.request.use((config) => {
  //const token = localStorage.getItem('token')
  //if (token) {
    //config.headers.Authorization = `Bearer ${token}`
  //}
  //return config
//}, (error) => Promise.reject(error))

//export default api





// src/services/axios.js
import axios from 'axios'
import router from '../routers' // si redirection requise

const api = axios.create({
  baseURL: 'https://immotgvbrio-store.onrender.com/api',
  timeout: 10000,
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token') // ou depuis un store
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Token expiré ou invalide
      localStorage.removeItem('token')
      router.push('/login')
    }
    return Promise.reject(error)
  }
)
export default api

