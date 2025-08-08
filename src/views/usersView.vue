<!-- src/views/UsersView.vue -->
<template>
  <div>
    <h2>Utilisateurs</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getUsers } from '../services/apiService'

const users = ref([])

onMounted(async () => {
  try {
    const response = await getUsers()
    users.value = response.data
  } catch (error) {
    alert("Erreur lors du chargement des utilisateurs.")
    console.error(error)
  }
})
</script>
