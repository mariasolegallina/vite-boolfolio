<template>   
    <div>
        <div class="container">
            <h1>I miei progetti</h1>
        </div>

        <div class="container">
            <div class="grid">
                <div class="card" style="width: 18rem;" v-for="project in projects" :key="project.id">
                    <h5 class="card-title">{{ project.title }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            projects: [],
        }
    },
}  
</script>
  
<style scoped>

</style>
