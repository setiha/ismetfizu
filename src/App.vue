<template>
    <div>
        <Navigation v-bind:itemCollection="navItems" @pageChange = "onPageChange"></Navigation>
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
        name: 'App',
        components: {
            Navigation,
            Footer,
            index,
            blog
        },
        data: function () {
            return {
                currentPage: "index",
                navItems:[],
            };
        },
        created(){
            this.navItems.push({
                name: 'Fooldal',
                id: 'index'
            });
            this.navItems.push({
                name: 'Blog',
                id: 'blog'
            })
        },
        methods:{
            onPageChange(newPage){
                console.log(newPage);
                this.currentPage = newPage
            }
        }
    };
</script>