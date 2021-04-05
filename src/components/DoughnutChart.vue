
<script>
    import {Doughnut, mixins} from 'vue-chartjs';

    export default {
        extends: Doughnut, mixins,
        mixins: [mixins.reactiveProp],
        props: ['chartData'],
        mounted() {
            this.renderChart(this.chartData);
        }
    }
</script>


<style scoped>

</style>