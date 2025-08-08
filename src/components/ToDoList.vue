<!-- src/components/TodoList.vue -->
<template>
  <div class="todo-container">
    <h1>📝 Ma To-Do List</h1>
    
    <input
      v-model="nouvelleTache"
      @keyup.enter="AjouterTache"
      placeholder="Ajouter une nouvelle tâche"
    />
    <button @click="AjouterTache">Ajouter</button>

    <ul>
      <li v-for="(tache,index) in taches" :key="index"
     
          @click="marquerCommeFaite(index)"
        :class="{ faite: tache.faite }"
     
      >
        {{ tache.texte }}
        <button @click.stop="supprimerTache(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      nouvelleTache: "",
      taches: []
    };
  },
  methods: {
    AjouterTache() {
     const texte = this.nouvelleTache.trim();
      if (texte !== "") {
        this.taches.push({ texte, faite: false });
        this.nouvelleTache = "";
        this.enregistrerTaches();
      }
    },
    marquerCommeFaite(index) {
      this.taches[index].faite = !this.taches[index].faite;
      this.enregistrerTaches();

    },
    supprimerTache(index) {
      this.taches.splice(index, 1);
      this.enregistrerTaches();
    },
    enregistrerTaches() {
      localStorage.setItem("mesTaches", JSON.stringify(this.taches));
    },
    chargerTaches() {
      const donnees = localStorage.getItem("mesTaches");
      
      if (donnees) {
        this.taches = JSON.parse(donnees);
     
      }
    }
  },
  mounted() {
    this.chargerTaches();
  }
};
</script>

<style scoped>
.todo-container {
  max-width: 400px;
  margin: auto;
  font-family: Arial, sans-serif;
}
input {
  width: 70%;
  padding: 8px;
}
button {
  margin-left: 8px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
}
.faite {
       text-decoration: line-through;
  color: gray;
}

</style>