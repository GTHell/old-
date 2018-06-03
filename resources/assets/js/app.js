
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import locale from 'element-ui/lib/locale/lang/en'


Vue.use(ElementUI, { locale });

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
