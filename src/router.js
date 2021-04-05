import VueRouter from 'vue-router';

//router
import index from "./pages/index.vue";
import blog from "./pages/blog.vue";
import post from "./pages/post.vue";
import contact from "./pages/contact.vue";
import survey from "./pages/survey.vue";
import statistics from "./pages/statistics.vue";
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
            component: blog,
        },
        {
                name: "blogCategory",
                path: "/blog/category/:categoryName",
                component: blog

        },
        {
            name: "blogPost",
            path: "/blog/post/:postID",
            component: post

        },
        {
            name: "Kapcsolat",
            path: "/contact",
            component: contact

        },
        {
            name: "Kerdoiv",
            path: "/survey",
            component: survey

        },
        {
            name: "Fizu terkep",
            path: "/statistics",
            component: statistics

        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return {x:0, y:0}
    }
})