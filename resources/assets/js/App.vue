<template>
    <div class="main">
        <app-header></app-header>
        <!--<el-container>-->
            <!--<el-main>-->
                <router-view></router-view>
            <!--</el-main>-->
        <!--</el-container>-->
    </div>
</template>

<script>
    import Header from './components/Layouts/Header.vue';

    export default {
        name: 'app-master',
        components: {
            'app-header': Header
        }
    }
</script>

<style scoped>
</style>