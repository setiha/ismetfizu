import VueRouter from 'vue-router';

//router
import index from "./pages/index.vue";
import blog from "./pages/blog.vue";

export default new VueRouter({
    routes: [

        {
            name: "Fooldal",
            path: '/',
            component: index
        },
        {
            name: "Blog",
            path: '/blog',
            component: blog
        }
    ]
})