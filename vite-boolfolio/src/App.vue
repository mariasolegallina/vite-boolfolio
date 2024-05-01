<script>
// Import di axios
// import axios from 'axios';

import AppHeader from './components/AppHeader.vue';



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
    AppHeader,
    
    
  },
}
</script>

<template>
  <AppHeader />
  <div class="container py-5 bg-dark"> 
    <router-view></router-view>

  </div>
</template>

<style scoped>

</style>
