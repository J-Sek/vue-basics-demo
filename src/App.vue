<template>
    <main v-cloak>
        <environment-label></environment-label>
        <h1>{{ title }}</h1>
    </main>
</template>

<script>
import EnvironmentLabel from './components/environment-label'
export default {
    data() {
        return {
            title: 'Hello Vue.js + Webpack'
        }
    },
    components: {
        EnvironmentLabel
    }
}
</script>

<style>
    [v-cloak] { display: none }
    body {
        font-family: Ubuntu, 'Segoe UI', Arial, Helvetica, sans-serif;
    }
</style>