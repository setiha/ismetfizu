<template>
    <div class="bejelentkezes">
        <div class="container w-75">
            <div class="row text-center">
                <div class="col-12 col-md-8 col-lg-6 mx-auto">
                    <div class="card mx-auto login-card">
                        <div class="card-header login-card-header text-uppercase">
                            Bejelentkezes
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="login()">
                                <div class="mb-2">
                                    <label for="exampleInputEmail1" class="form-label">Add meg az email cimed</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"
                                           aria-describedby="emailHelp" v-model="email">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Add meg a jelszavad</label>
                                    <input type="password" class="form-control mb-2" id="exampleInputPassword1"
                                           placeholder="Password" v-model="password">
                                    <small><a href="#">Elfelejtetted a jelszavadat?</a></small>
                                </div>
                                <div class="card-footer border-0">
                                    <div class="d-grid gap-2">
                                        <button class="btn text-uppercase btn-login" type="submit">Bejelentkezes
                                        </button>
                                        <div class="pt-3"><small><a href="#">Meg nem regisztraltal?</a></small></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store, {TYPES} from "../store";

    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
            login() {
                this.$store.dispatch(TYPES.actions.signIn,
                    {
                        email: this.email, password: this.password})
                    .then(r => {
                        this.$router.push({name: 'Profile'});

                    })
            }
        }
    }
</script>

<style scoped>

</style>