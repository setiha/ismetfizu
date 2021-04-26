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

function Authenticated(to, from, next){
    if(store.getters[TYPES.getters.isLoggedIn]){
      next();
    }else{
        next({name: "Login"});
    }

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
            beforeEnter: Authenticated
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
            beforeEnter: Authenticated

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
            beforeEnter: Authenticated


        },
        {
            name: "Fizu terkep",
            path: "/statistics",
            component: statistics,
            beforeEnter: Authenticated

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