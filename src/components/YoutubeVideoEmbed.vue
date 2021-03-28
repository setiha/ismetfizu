<template>
    <section>
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-md-8 mx-auto">
                    <h3 class="mb-3">{{title}}</h3>
                    <div class="ratio ratio-16x9">
                        <iframe width="727" height="409" v-bind:src="source"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "YoutubeVideoEmbed",
        props:['title', 'source']
    }
</script>

<style scoped>

</style>