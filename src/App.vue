<template>
    <div>
        <Navigation v-bind:itemCollection="navItems" @pageChange="onPageChange"></Navigation>

        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation.vue";
    import Footer from "./components/Footer.vue";
    import index from "./pages/index.vue";
    import blog from "./pages/blog.vue";


    export default {
        name: 'App',
        components: {
            Navigation,
            Footer,
            index,
            blog
        },
        data: function () {
            return {
                currentPage: "blog",
                navItems: [],
            };
        },
        created() {
            this.navItems.push({
                name: 'Fooldal',
                id: 'index',
                path: '/'
            });
            this.navItems.push({
                name: 'Blog',
                id: 'blog',
                path: '/blog'
            })
        },
        methods: {
            onPageChange(newPage) {
                console.log(newPage);
                this.currentPage = newPage
            }
        }
    };
</script>