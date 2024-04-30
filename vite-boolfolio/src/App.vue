<script>
// axios import
import axios from 'axios';
export default {
  data() {
    return {
      // test
      baseApiUrl: 'http://127.0.0.1.800/api/'
      
    }
  },
  mounted() {
 axios.get('this.baseApiUrl + "/posts').then(res => {
  console.log(res)
 })
    
  },
  methods: {

    
  },

}
</script>

<template>
  <div class="container-fluid py-5 d-flex flex-column justify-content-center align-items-center border">
    <div class="container py-2 text-center">
      <h1>I topi non avevano nipoti</h1>
    </div>
   
  </div>
  
</template>

<style scoped>

</style>
