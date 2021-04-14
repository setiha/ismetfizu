<template>
    <div class="regisztracio">
        <div class="container">

            <div class="row margin">
                <div class="col-6 mx-auto">

                    <div class="card login-card mb-3">
                        <div class="card-header h3">Regisztrácó</div>
                        <div class="card-body">
                            <div class="col-12 alert alert-danger"
                                 role="alert" v-if="alerts.length">
                                <ul>
                                    <li v-for="a in alerts">{{a}}</li>
                                </ul>
                            </div>
                            <form @submit.prevent="registration()">
                                <!-- <div class="form-group">
                                     <label for="exampleInputEmail1">Felhasználónév</label>
                                     <input type="text" class="form-control" placeholder="Felhasználónév">
                                 </div>-->
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                        anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword2">Jelszó</label>
                                    <input type="password" class="form-control" id="exampleInputPassword2"
                                           placeholder="Password" v-model="password">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Jelszó még egyszer</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                           placeholder="Password" v-model="password2">
                                </div>


                                <div class="my-3 text-center">
                                    <button type="submit" class="btn loginBtn loginBtn--facebook py-2"><i
                                            class="fa fa-facebook pr-2"></i>Facebook bejelentkezés
                                    </button>
                                    <button type="submit" class="btn loginBtn loginBtn--google py-2"><i
                                            class="fa fa-google pr-2"></i>Google bejelentkezés
                                    </button>
                                </div>
                                <div class="card-footer bg-transparent"></div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block" href="index.html"
                                        role="button">Regisztráció
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import store from "../store";
    export default {
        name: "registration",
        data() {
            return {
                email: '',
                password: '',
                password2: '',
                alerts: []
            }

        },
        methods: {
            registration() {
                if (this.password !== this.password2) {
                    this.alerts.push('A ket jelszo nem egyezik kerlek javitsd')
                }
                this.$store.dispatch('signUpAction',{email: this.email, password: this.password})
                    .then(r => {
                        this.$router.push({name: 'Profile'});

                    })
                    .catch(err => {
                        this.alerts.push(err);
                    })
            }
        }
    }
</script>

<style scoped>

</style>