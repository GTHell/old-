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

<style>
html {
  font-size: 16px;
}
@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1000px) {
  html {
    font-size: 22px;
  }
}
</style>