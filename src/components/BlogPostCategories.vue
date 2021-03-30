<template>
    <div class="mt-5">
        <h3 class="mb-3">Kategoriak</h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
               <router-link :to="{name: 'Blog'}">
                   Osszes
                </router-link></li>

            <li class="list-group-item"
                v-for="(category, index) in categoryCollection"><router-link :to="{name: 'blogCategory',
                 params:{
                    categoryName: category
                }}">
                {{category}}</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BlogPostCategories",
        props: [
            "postCollectionIn"
        ],
        computed: {
            categoryCollection() {
                const categories = this.postCollectionIn.map(post => {
                    return post.category;
                });
                return categories.filter((category, index) => {
                    return categories.indexOf(category) === index;
                });
            }
        },
        methods:{
            OnCategoryClick(category){
                if(category){
                    this.$emit('categoryChange', category);
                }else{
                    this.$emit('categoryChange');
                }
            }
        }
    }
</script>

<style scoped>

</style>