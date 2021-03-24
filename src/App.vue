<template>
    <div>
        <Navigation></Navigation>
        <ul>
            <li @click="currentPage = 'index'">index</li>
            <li @click="currentPage = 'blog'">blog</li>
        </ul>
        <keep-alive>
            <component v-bind:is="currentPage"></component>
        </keep-alive>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation.vue";
    import Footer from "./components/Footer.vue";
    import index from "./pages/index.vue";
    import blog from "./pages/blog.vue";


    export default {
        components: {
            Navigation,
            Footer,
            index,
            blog
        },
        data: function () {
            return {
                currentPage: "index",
                message: 'Sikerult behuzni az App. vue-t'
            }
        }
    };
</script>