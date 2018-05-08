<template>
    <p v-if='isLocal' class="env-label dev">Localhost</p>
    <p v-else class="env-label prod">Hostname: {{ hostname }}</p>
</template>

<script>
export default {
    data() {
        return {
            isLocal: false,
            hostname: '',
        }
    },
    mounted() {
        this.isLocal = /(127\.0\.0\.1)|(localhost)/.test(location.host);
        this.hostname = location.hostname;
    },
}
</script>

<style scoped>
.env-label {
    color: #fff;
    font-size: .9em;
    padding: .4rem .8rem;
    border-radius: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
}
.dev  { background: #00bfa5; }
.prod { background: #8c30a8; }
</style>