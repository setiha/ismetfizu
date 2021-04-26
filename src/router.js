import VueRouter from 'vue-router';

//router
import index from "./pages/index.vue";
import blog from "./pages/blog.vue";
import post from "./pages/post.vue";
import contact from "./pages/contact.vue";
import survey from "./pages/survey.vue";
import statistics from "./pages/statistics.vue";
import login from "./pages/login.vue";
import registration from "./pages/registration.vue";
import profile from "./pages/profile.vue";
import store, {TYPES} from "./store";

function ifLoggedIn(to, from, next){
    if(!store.getters[TYPES.getters.isLoggedIn]){
        next({name: "Login"});
    }
        next();
}
export default new VueRouter({
    mode: 'history',
    routes: [

        {
            name: "Fooldal",
            path: '/',
            component: index
        },
        {
            name: "Blog",
            path: '/blog',
            component: blog,
            beforeEnter: ifLoggedIn
        },
        {
                name: "blogCategory",
                path: "/blog/category/:categoryName",
                component: blog,


        },
        {
            name: "blogPost",
            path: "/blog/post/:postID",
            component: post,
            beforeEnter: ifLoggedIn

        },
        {
            name: "Kapcsolat",
            path: "/contact",
            component: contact

        },
        {
            name: "Kerdoiv",
            path: "/survey",
            component: survey,
            beforeEnter: ifLoggedIn


        },
        {
            name: "Fizu terkep",
            path: "/statistics",
            component: statistics,
            beforeEnter: ifLoggedIn

        },
        {
            name: "Login",
            path: "/login",
            component: login

        },
        {
            name: "Sign up",
            path: "/registration",
            component: registration
        },
        {
            name: "Profile",
            path: "/profile",
            component: profile

        },
    ],
    scrollBehavior (to, from, savedPosition) {
        return {x:0, y:0}
    }
})