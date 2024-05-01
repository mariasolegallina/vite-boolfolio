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
    <div>
        <div class="container bg-dark text-light text-center py-2">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="project in projects" :key="project.id">
                    <div class="card h-100">

                        <!-- DA MODIFICARE: ora viene passato il type_id -->
                        <div class="card-header" v-if="project.type_id">Categoria: {{ project.type_id }}</div>
                        <div class="card-body d-flex flex-column">
                            <div class="mb-3">
                                <h5 class="card-title">{{ project.title }}</h5>
                                <p class="card-text">{{ project.description }}</p>
                            </div>
                            <div class="mt-auto">
                                <a href="#" class="btn btn-secondary w-100">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

  

  
<style scoped>

    
</style>
