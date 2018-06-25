<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64"
             text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" @click="toRoute('/')">SITH</el-menu-item>
        <el-submenu index="2">
            <template slot="title">Showcase</template>
            <el-menu-item index="2-1" @click="toRoute('/showcase/shopping-cart')">Shopping Cart</el-menu-item>
        </el-submenu>
        <!--<el-menu-item index="3" @click="toRoute('/experiences')" router='true'>experiences</el-menu-item>-->
        <!--<el-menu-item index="4" @click="toRoute('/contact')" router='true'>Contact</el-menu-item>-->
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            toRoute(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<style scoped>
    router-link {
        display: inline-block;
    }
</style>   