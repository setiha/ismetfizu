<template>
    <pre>{{user}}</pre>
</template>

<script>
    export default {
        name: "profile",
        computed:{
                user(){
                    return this.$root.$data.user || {};
                }
        }
    }
</script>

<style scoped>

</style>