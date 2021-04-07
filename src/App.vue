<template>
    <div>
        <Navigation></Navigation>

        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation.vue";
    import Footer from "./components/Footer.vue";
    import index from "./pages/index.vue";
    import blog from "./pages/blog.vue";
    import survey from "./pages/survey.vue";
    import statistics from "./pages/statistics.vue";
    import login from "./pages/login.vue";
    import registration from "./pages/registration.vue";
    export default {
        name: 'App',
        components: {
            Navigation,
            Footer,
            index,
            blog,
            survey,
            statistics,
            registration
        },

    };
</script>