<template>
    <div>
        <div class="container-fluid bg-light jumboKont mb-5">
            <div class="container jumbo pt-5">
                <h1>Mennyit keresnek, ha...</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, totam!</p>
                <a href="#" class="btn btn-green btn-lg" role="button" aria-disabled="true">Tovabb a kerdoivekre!</a>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-9">
                    <div class="row px-lg-5 justify-content-center">
                        <BlogPostCard v-for="postDb in filteredPostCollection" :key="postDb.id"
                                      v-bind:post="postDb"></BlogPostCard>

                    </div>
                </div>
                <div class=" col-10 col-md-3 mx-auto">
                    <form class="form-inline mt-5">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-sm btn-outline-success my-2" type="submit">Search</button>
                    </form>
                    <BlogPostCategories v-bind:postCollectionIn="postCollection"
                                        v-on:categoryChange="OnCategoryChange"></BlogPostCategories>
                    <div class="my-5">
                        <h3 class="mb-3">Tags</h3>
                        <a href="#" class="badge bg-primary rounded-pill p-2 m-1">Informatika</a>
                        <a href="#" class="badge bg-secondary rounded-pill p-2 m-1">OKtatas</a>
                        <a href="#" class="badge bg-success rounded-pill p-2 m-1">Muveszet</a>
                        <a href="#" class="badge bg-danger rounded-pill p-2 m-1">Sport</a>
                        <a href="#" class="badge bg-warning text-dark rounded-pill p-2 m-1">Uzlet</a>
                        <a href="#" class="badge bg-info text-dark rounded-pill p-2 m-1">Egeszseg</a>
                        <a href="#" class="badge bg-light text-dark rounded-pill p-2 m-1">Hit</a>
                        <a href="#" class="badge bg-dark rounded-pill p-2 m-1">Politika</a>
                    </div>
                </div>
            </div>
            <!--<div class="row">
                <nav aria-label="Page navigation example" class=" mt-5">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">Elozo</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Kovetkezo</a></li>
                    </ul>
                </nav>
            </div>-->
        </div>
    </div>
</template>

<script>
    import DataService from "../DataService";
    import BlogPostCard from "../components/BlogPostCard.vue";
    import BlogPostCategories from "../components/BlogPostCategories.vue";

    export default {
        name: "blog.vue",
        components: {
            BlogPostCard,
            BlogPostCategories
        },
        data() {
            return {
                postCollection: [],
                filters: {}
            };
        },
        created() {
            DataService.GetPosts().then(posts => {
                this.postCollection = posts;
            });
        },
        computed: {
            filteredPostCollection() {
               if(!this.$route.params.categoryName){
                 return  this.postCollection
               }
               return this.postCollection.filter(post => {
                  return post.category === this.$route.params.categoryName;
               });

            }
        },
        methods: {
            OnCategoryChange(newCategory) {
                if (newCategory) {
                    this.$set(this.filters, "category", newCategory);
                } else {
                    this.$delete(this.filters, "category");
                }
            }
        }
    };
</script>
