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
      <h1>ciao</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur repellat blanditiis, excepturi quod autem labore non vel, iure omnis odit, a nulla vitae error. Praesentium molestiae in fugiat autem!</p>

    </div>
   
  </div>
  
</template>

<style scoped>

</style>
