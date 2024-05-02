<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: [],
      baseApiUrl: 'http://127.0.0.1:8000/api/'
    }
  },
  mounted() {
    axios.get(this.baseApiUrl + 'projects') 
      .then(res => {
        console.log(res);
        this.projects = res.data.results;
      })
      .catch(error => {
        console.error('Errore durante la richiesta:', error);
      });
  }
}
</script>

<template>   
  <div class="container py-4">

  <h1 class="mb-4">I miei progetti</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="project in projects" :key="project.id">

        <!-- card -->
        <div class="card h-100">

          <div class="card-header" v-if="project.type_id">Categoria: {{ project.type?.name }}</div>

          <!-- immagine -->
          <router-link :to="{name: 'single-project', params:{id:project.id}}" class="p-title fs-4 text-decoration-none" >
            <div v-if="project.cover_image" class="image-container">
            <img :src="project.cover_image" class="card-img-top img-fluid" alt="Cover Image">
          </div>
          </router-link>

          <div class="card-body d-flex flex-column">
            <div class="mb-3">
              <router-link :to="{name: 'single-project', params:{id:project.id}}" class="p-title fs-4 text-decoration-none" >{{ project.title }}</router-link>
              <p class="card-text">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

  

  
<style lang = scss scoped>

.image-container {
  max-width: 100%;
  height: auto;
}

.p-title {

  color: #EFB831;

  &:hover {
  color: #f4d483;
}

}

</style>
