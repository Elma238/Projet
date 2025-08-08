<template>
  <div class="categories-container">
    <div class="category-row" v-for="category in categories" :key="category.id">
      <div class="category-cell">Nom : {{ category.nom }}</div>
      <div class="category-cell">Abonnés : {{ category.nb_abonner }}</div>
      <div class="category-cell">Propriétaires : {{ category.nb_proprieter }}</div>
      <div class="category-cell">
      <div v-if="categories.length === 0">Aucune catégorie trouvée.</div>
     <img :src="category.icone" alt="Icône" class="category-icon" /> 
    </div>
    </div>
  </div>
</template>

<script>
 import axios from 'axios'

export default {
  data() {
    return {
      categories: [],
      loading: true,

    };
  },
  mounted() {
    axios
      .get("https://immotgvbrio-store.onrender.com/api/categories")
      .then(response => {
        this.categories = response.data
      })
      .catch(error => {
        console.error('Erreur lors du chargement des catégories :', error);
      })
  .finally(() => {
    this.loading = false;
  });
 }
};
</script>

<style scoped>
.categories-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.category-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}

.category-cell {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
  flex: 1 1 150px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.category-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
</style>
