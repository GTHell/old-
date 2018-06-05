<template>
    <div id="app" class='container'>
        <nav-bar></nav-bar>
    </div>
</template>
<script>
    import NavBar from './NavBar'
    export default {
        name: 'app',
        components: {
            NavBar
        },
        data () {
            return {}
        }
    }
</script>