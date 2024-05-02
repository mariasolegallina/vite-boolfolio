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
  <div v-if="project" class="container py-4">

    <!-- Image -->
    <div v-if="project.cover_image" class="position-relative overflow-hidden">
      <div class="bg-image"
      :style="{ 'background-image': 'url(' + project.cover_image + ')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center', 'height': '300px'}"
      alt="Cover Image">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6); position: absolute;"></div>
      </div>
    </div>
    
    <div class="row py-4">

      <!-- Left side -->
      <div class="col-8 ">
        <!-- Title -->
        <h2>{{ project.title }}</h2>

        <!-- Description -->
        <p>{{ project.description }}</p>
      </div>

      <!-- Right side | Project details -->
      <div v-if="project.type" class="col-4 p-3 border-start">
        <p><strong class="text-warning">Categoria: </strong>{{ project.type?.name }}</p>
        <p><strong class="text-warning">Linguaggi: </strong></p>
      </div>
    </div>
   
  </div>

  <div  v-else class="text-center py-3 text-light ">
    <!-- !!MANDARE A PAGINA ERRORE 404!! -->
    <div  class="spinner-border">
      <span class="visually-hidden text-white">Loading...</span>
    </div>
  </div>

</template>


<style lang="scss"></style>