<template xmlns:V-bind="http://www.w3.org/1999/xhtml">

        <div class="container-fluid bg-light jumboKont mb-5">
            <div class="container jumbo pt-5">
                <h1><slot name="title"></slot></h1>
                <p class="lead">
                    <slot name="lead"></slot>
                </p>

                <a V-bind:href="buttonURL" class="btn btn-green btn-lg" role="button" aria-disabled="true">{{buttonText
                    }}</a>
            </div>
        </div>

</template>

<script>
    export default {
        name: "Jumbotron",
        props:['buttonText', 'buttonURL']
    }
</script>
