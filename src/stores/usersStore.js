// src/stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || null,
  }),

  actions: {
    setUser(data) {
      this.token = data.token
        localStorage.setItem('token', data.token)
      this.user = data.user
        localStorage.setItem('user', data.user)
    },

    clearUser() {
      this.token = null
      localStorage.removeItem('token')
      this.user = null
      localStorage.removeItem('user')
    },
  },

  persist: true, // ❗️Pour garder les données même après un rafraîchissement (optionnel avec pinia-plugin-persistedstate)
})
