// src/services/apiService.js
import api from './axios'

export const login = (credentials) => api.post('/login', credentials)

export const getUsers = () => api.get('/users')
