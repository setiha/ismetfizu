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
    data(){
        return {
            user:{
                kind: '',
                idToken: '',
                email: '',
                refreshToken: '',
                expiresIn: '',
                localId: ''
            }
        }
    },
    methods: {
      setUserMutation(userPayload){
          console.log("userMutation: ", userPayload);
          this.user = Object.assign({}, userPayload);
      }
    },
    render: h => h(App)
});

