import 'bootstrap/scss/bootstrap.scss';
import './style.scss';

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(VueRouter);
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
import DataService from "./DataService";

const message = {
    "email": "tihi@gmail.com",
    "message": "Csak tesztelek",
    "name": "tihici"
};

