<!-- src/views/LoginView.vue -->
<template>
  <div>
    <h2>Connexion</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/apiService'
import { useUserStore } from '../stores/usersStore'

const toast = useToast()
const email = ref('')
const password = ref('')
const router = useRouter()
const usersStore = useUserStore()

const handleLogin = async () => {
  try {
    const response = await login({ email: email.value, password: password.value })
           
        usersStore.setUser({
      token: response.data.access,
      user: JSON.stringify(response.data.user),
    })    

         // 🔓 Connexion réussie
    toast.success('Connexion réussie ! Bienvenue 👋')

    
    router.push('/users')
  } catch (error) {
    // 🚨 Affiche une erreur avec toast au lieu de alert()
    toast.error(error.response?.data?.message || 'Identifiants incorrects')
 
  }
}
</script>
