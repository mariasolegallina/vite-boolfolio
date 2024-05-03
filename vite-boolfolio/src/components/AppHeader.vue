<script>
export default {
    name: 'AppHeader',
}
</script>


<template>

    <header>
        <nav>
            <div class="container bg-dark text-light text-center py-2">
            <h1 class="my-3 ">I miei progetti</h1>
            <router-link to="{name:'contact-me'}">Contattami</router-link>
        </div>
        </nav>
    </header>

</template>

<style lang="scss">
nav {
    .container {
        border-bottom: 1px solid white;
    }
}
</style>