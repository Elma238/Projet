<!-- src/views/UsersView.vue -->
<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Liste des utilisateurs</h2>
    
    <div v-if="users.length === 0" class="text-gray-500">Aucun utilisateur trouvé.</div>
    
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <li
        v-for="user in users"
        :key="user.id"
        class="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-shadow"
      >
        <h3 class="text-lg font-semibold text-gray-900">{{ user.name }}</h3>
        <p class="text-sm text-gray-600">{{ user.email }}</p>
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
