<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0 sticky-top">
        <router-link class="navbar-brand fizu" to="/">fizu.hu</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active px-3" v-for="item in  itemCollection">
                    <router-link class="nav-link" :to="{name: item.name}">{{item.name}}
                    </router-link>
                </li>
                <li class="nav-item active px-3" v-if="this.isLoggedIn">
                    <a  class="nav-link" href="#" @click.prevent="logout">Logout
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import {TYPES} from "../store";

    export default {
        methods:{
            ...mapMutations([TYPES.mutations.deleteUser]),
            logout(){
                this.deleteUser();
                this.$router.push("/");

            }
        },
        computed: {
            ...mapGetters({isLoggedIn: TYPES.getters.isLoggedIn}),
            itemCollection() {
                if (this.isLoggedIn) {
                    return [
                        ...this.baseNav,
                        {
                            name: 'Profile',
                            id: 'profile',
                            path: '/profile'
                        }
                    ]
                } else {
                    return [
                        ...this.baseNav,
                        {
                            name: 'Login',
                            id: 'login',
                            path: '/login'
                        },
                        {
                            name: 'Sign up',
                            id: 'registration',
                            path: '/registration'
                        }
                    ];
                }

            }
        },
        data() {
            return {
                baseNav: [
                    {
                        name: "Főoldal",
                        id: "index",
                        path: "/"
                    },
                    {
                        name: "Blog",
                        id: "blog",
                        path: "/blog"
                    },
                    {
                        name: "Kérdőív",
                        id: "survey",
                        path: "/survey"
                    },
                    {
                        name: "Fizutérkép",
                        id: "statistics",
                        path: "/statistics"
                    },
                    {
                        name: "Kapcsolat",
                        id: "kapcsolat",
                        path: "/contact"
                    }
                ]
            }
        }
    };
</script>

