<script>
// Import di axios
// import axios from 'axios';

import ProjectIndex from './pages/projects/index.vue';

export default {
  data() {
    return {
      // projects: [],
      // baseApiUrl: 'http://127.0.0.1:8000/api/'
    }
  },
  mounted() {
    // axios.get(this.baseApiUrl + 'projects') 
    //   .then(res => {
    //     console.log(res);
    //     this.projects = res.data.results;
    //   })
    //   .catch(error => {
    //     console.error('Errore durante la richiesta:', error);
    //   });
  },

  components: {
    ProjectIndex
  },
}
</script>

<template>
  <ProjectIndex />
</template>

<style scoped>

</style>
