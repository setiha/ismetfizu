<template>
    <div class="col-12 col-md-5 my-3">
        <div class="card blog-card">
            <img v-bind:src="post.imageSrc" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-uppercase">{{post.title}}</h5>
                <p class="card-text">{{post.lead}}</p>
                <div class="d-flex flex-row justify-content-between">
                <p class="card-text">
                    <small class="text-muted">{{post.date}}</small>
                </p>
                <router-link :to="{name:'blogPost', params:{postID:post.id}}">Tovabb olvasom...</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'post'
        ],
        name: "BlogPostCard"
    }
</script>

<style scoped>

</style>