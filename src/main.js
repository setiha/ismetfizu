import 'bootstrap/scss/bootstrap.scss';
import './style.scss';

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import DataService from "./DataService";

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
        signInAction(credentialPayload){
            return DataService.SignIn(credentialPayload)
        },
        signUpAction(credentialPayload){
            return DataService.SignUp(credentialPayload)
        },

      setUserMutation(userPayload){
          console.log("userMutation: ", userPayload);
          this.user = Object.assign({}, userPayload);
      }
    },
    render: h => h(App)
});

