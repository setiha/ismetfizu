<template xmlns:V-bind="http://www.w3.org/1999/xhtml">
    <div>
        <Jumbotron buttonURL="#" buttonText="Tovabb a kerdoivekre">
            <template slot="title">Mennyit keresnek ha</template>
            <template slot="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur in nihil, praesentium
                quibusdam voluptatem.
            </template>
        </Jumbotron>
        <main>
            <section class="container">
                <div class="row py-5">
                    <div class="col-12 col-md-4 text-center mb-4 mb-md-0">
                        <img src="../img/graf1.png" alt="" width="150" class="mb-4 img-fluid">
                        <p>A diplomasok <span class="font-lg"><strong>268%</strong></span>-kal tobbet keresnek a
                            diplomaval nem
                            rendelkezoknel</p>
                    </div>
                    <div class=" col-12 col-md-4 text-center mb-4 mb-md-0">
                        <img src="../img/graf2.png" alt="" width="150" class="mb-4 img-fluid">
                        <p>Az IT szakmaban dolgozok <span class="font-lg"><strong>695%</strong></span>-kal keresnek
                            tobbet az
                            atlagnal</p>
                    </div>
                    <div class=" col-12 col-md-4 text-center mb-4 mb-md-0">
                        <img src="../img/graf3.png" alt="" width="150" class="mb-4 img-fluid">
                        <p>A Budapesten elok <span class="font-lg"><strong>310%</strong> </span>-kal keresnek tobbet
                            videken elo
                            tarsaikhoz kepest</p>
                    </div>
                </div>
            </section>
            <section class="py-5 bg-green">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-5">
                            <div class="card py-3 home-card">
                                <div class="card-body mx-auto">
                                    <h4 class="card-title mb-4">Hogyan hasznald a fizu.hu -t</h4>
                                    <ol>
                                        <li class="py-2">Regisztralj</li>
                                        <li class="py-2">Tolts ki a kerdoivet</li>
                                        <li class="py-2">Bongessz a statisztikak kozott</li>
                                    </ol>
                                    <div class="text-center"><a href="#" class="btn btn-outline-success px-3">Regisztralok!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 my-auto">
                            <h3 class="mb-3  mt-4 mt-md-0">Mire jo a fizu.hu</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta
                                dolor, eaque error ex iusto, mollitia nemo optio perspiciatis possimus quia quibusdam
                                rerum
                                tenetur
                                ut?</p>
                            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aperiam assumenda
                            culpa
                            cupiditate deleniti dignissimos dolor dolorem doloremque dolores dolorum ea enim eos
                            excepturi illo
                            incidunt iure labore minima mollitia neque, nisi nobis non nostrum provident qui, quia,
                            quibusdam
                            quo rem repellendus sequi voluptatum?
                        </div>
                    </div>
                </div>
            </section>
            <YoutubeVideoEmbed source="https://www.youtube.com/embed/sq3tS5H8ZCY"
                               title="Video beagyazasa a weboldalba"></YoutubeVideoEmbed>
            <section class="bg-green py-5">
                <div class="container">
                    <div id="carousel1" class="carousel slide p-5" data-bs-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-bs-target="#carousel1" data-bs-slide-to="0" class="active"></li>
                            <li data-bs-target="#carousel1" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carousel1" data-bs-slide-to="2"></li>
                        </ol>
                        <div class="col-11 carousel-inner">
                            <div class="carousel-item active">
                                <figure class="text-center">
                                    <blockquote class="blockquote">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                                            a
                                            ante.</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="carousel-item">
                                <figure class="text-center">
                                    <blockquote class="blockquote">
                                        <p>Tongyo</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="carousel-item">
                                <figure class="text-center">
                                    <blockquote class="blockquote">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                                            a
                                            ante.</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel1" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel1" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import Jumbotron from "../components/Jumbotron.vue";
    import YoutubeVideoEmbed from "../components/YoutubeVideoEmbed.vue";

    export default {
        name: "index.vue",
        components: {
            Jumbotron,
            YoutubeVideoEmbed
        }
    }
</script>

<style scoped>

</style>