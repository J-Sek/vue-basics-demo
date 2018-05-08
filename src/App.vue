<template>
    <div id="app" v-cloak>
        <environment-label></environment-label>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
import EnvironmentLabel from './components/environment-label'
export default {
    name: 'app',
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
</style>