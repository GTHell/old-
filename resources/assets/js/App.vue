<template>
    <app-header></app-header>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        name: 'app-master',
        components: {
            'app-header': Header
        }
    }
</script>