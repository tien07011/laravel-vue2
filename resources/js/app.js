require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from "axios";
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
import HomeComponent from "./components/HomeComponent.vue";

const routes = [
    {
        name: 'HomeComponent',
        path: '/',
        component: HomeComponent
    },
];
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
