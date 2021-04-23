<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-11 mx-auto pt-5 my-5 mx-lg-0">
                    <h2>{{post.title}}</h2>
                    <p>Horvath Zoltan, {{post.date}}, {{post.category}}</p>
                </div>
            </div>
            <div class="row text-justify">
                <div class="col-11 mx-auto mx-lg-0">
                    <span class="font-weight-bold text-uppercase"></span>
                </div>
            </div>
            <div class="row text-justify">
                <div class="col-11 mx-auto mx-lg-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur deleniti
                        dignissimos laudantium nesciunt nostrum perferendis quaerat rerum vel! Ab adipisci aliquam,
                        amet,
                        commodi dolore dolores eaque eligendi esse excepturi, harum hic illo ipsam iste magnam
                        necessitatibus
                        nisi nulla obcaecati perspiciatis quidem repellendus saepe sed suscipit tenetur ullam velit
                        veniam
                        veritatis voluptate? Delectus eius esse, fuga labore repellendus sint.</p>
                </div>
                <div class="col-11 col-lg-7 my-auto mx-auto  mx-lg-0">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Cumque ducimus ipsam minima, nemo quis reiciendis similique! Asperiores assumenda
                    dignissimos officia placeat unde! Aut autem cum, ducimus earum inventore non sint voluptas! Culpa,
                    deleniti esse iure minima nisi officiis perspiciatis reprehenderit tenetur. Consectetur eos fuga
                    magni minima nam, natus rerum voluptate.
                </div>
                <div class="col-11 col-lg-4 text-center  mx-lg-0"><img src="src/img/graficon_cikk.png" alt="graficon"
                                                                       class="img-fluid">
                </div>
                <div class="col-11 mx-auto my-5  mx-lg-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet asperiores beatae
                        cumque
                        dolores earum eius eos et excepturi, inventore iusto molestiae neque nesciunt perferendis, quam
                        quidem
                        reprehenderit saepe sint sit vel! Ad autem debitis, ducimus fuga fugit illum ipsam iste minima
                        minus
                        mollitia perferendis quidem rem repellat reprehenderit repudiandae sit sunt veritatis?
                        Aspernatur
                        corporis delectus ea enim, est facere ipsam labore nulla omnis possimus quis quod, totam, ut
                        voluptatum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ea exercitationem harum
                        temporibus
                        tenetur! Accusamus adipisci autem corporis eius, eligendi magnam? Accusantium doloremque
                        exercitationem
                        harum itaque minus molestias nemo odit sint totam voluptatum! Accusantium architecto, atque
                        autem
                        consectetur consequatur cum dolorem eveniet incidunt laborum, maxime minus nam, odit officiis
                        possimus
                        praesentium qui quo recusandae reiciendis temporibus ullam ut velit voluptatibus! At,
                        consectetur
                        deleniti dicta dignissimos ex fugit itaque laudantium libero minus molestiae, necessitatibus non
                        quae
                        ratione sit vitae voluptas voluptates.</p>
                </div>
                <div class="col-11 mx-auto">
                    <a href="#" class="btn btn-facebook" role="button" aria-disabled="true"><img src="src/img/like.svg"
                                                                                                 height="20"
                                                                                                 alt="like"
                                                                                                 class="me-2 mb-1">Tetszik</a>
                    <a href="#" class="btn btn-facebook" role="button" aria-disabled="true"><img
                            src="src/img/facebook.svg"
                            height="20" alt="share"
                            class="me-2 mb-1">Megosztom</a>
                </div>
            </div>
        </div>
        <!--<div class="container my-5 px-5">
            <div class="row border-top  p-3 d-flex">
                <div class="col-12 pt-3">
                    <img src="src/img/profil.png" alt="profilkep"
                         class="flex-shrink-0 me-3 mt-3 rounded-circle" style="width:60px;height:60px;">
                    <div>
                        <h4>Lorem ipsum
                            <small>Posted on February 19, 2016</small>
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="col-12 pt-3">
                    <img src="src/img/profil.png" alt="profilkep"
                         class="flex-shrink-0 me-3 mt-3 rounded-circle" style="width:60px;height:60px;">
                    <div>
                        <h4>Lorem ipsum
                            <small>Posted on February 19, 2016</small>
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua.</p>
                    </div>

                </div>
                &lt;!&ndash;<form class="mb-3 mt-2 col-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" class="form-label"><h3>Kommentelj</h3></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </form>&ndash;&gt;
            </div>
        </div>-->
    </div>

</template>

<script>
    import {TYPES} from "../store";
    import {mapGetters} from "vuex";

    export default {
        name: "post",
        computed: {
            ...mapGetters([TYPES.getters.getPost]),
            post: function () {
                return this.getPost(this.$route.params.postID);
            }
        }

    };
</script>

