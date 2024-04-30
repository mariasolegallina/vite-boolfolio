<script>
// Import di axios
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
  <div class="container-fluid py-5 d-flex flex-column justify-content-center align-items-center border">
    <div class="container py-2 text-center">
      <h1>I topi non avevano nipoti</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel dolorum officia sed suscipit itaque obcaecati blanditiis. Hic deleniti consectetur minima placeat. Illum ratione ab assumenda laborum impedit nesciunt aliquid?</p>
    </div>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
