<script>
import axios from 'axios';

export default {
    name: 'SingleProject',

  data() {
    return {
      project: null,
      projectId: null,
      baseApiUrl: 'http://127.0.0.1:8000/api/'
    }
  },
  mounted() {
    
    // recuperiamo il parametro dell'id del project dall'url
    console.log('parametro id della rotta: ', this.$route.params.id);
        // lo assegnamo alla variabile projecttId per comodità
        this.projectId = this.$route.params.id;
    axios.get(this.baseApiUrl + 'projects/' + this.projectId) 
      .then(res => {
        console.log(res);
        if(res.data.success) {
                
                // se troviamo il project lo salviamo
                this.project = res.data.project
            } else {
                // altrimenti torniamo alla home
                this.$router.push({name: 'index'})
            }
      })
      ;
  }
}
</script>
<template>
  <div v-if="project" class="container text-white">
    <div class="mb-3  p-2 text-center">
      <h2>{{ project.title }}</h2>
    </div>
    <div class="conteiner border ">
        <div class="mb-3  p-2 text-center">
          <p><strong class="text-warning">Descrizione:</strong></p>
          <p>{{ project.description }}</p>
        </div>
        
        <div v-if="project.type" class="mb-3  p-2 text-center">
          <p><strong class="text-warning">Tipo: </strong>{{ project.type?.name }}</p>
        </div>
        
        <div v-if="project.cover_image" class="mb-3  p-2 text-center">
          <img :src="project.cover_image" alt="Cover Image">
        </div>
      
      
    </div>
    
   
  </div>
  <div  v-else class="text-center py-3 text-light " >
    <div  class="spinner-border">
      <span class="visually-hidden text-white">Loading...</span>

    </div>
  </div>
</template>


<style lang="scss"></style>