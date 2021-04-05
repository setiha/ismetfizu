<template>
    <div class="container my-5">
        <div class="mb-5">
            <h3>Kitoltesek szama munkakoronkent</h3>
            <DoughnutChart :height="300" :chartData="jobFillData"></DoughnutChart>
        </div>
        <div class="mb-5">
            <h3>Atlagfizetesek munkakoronkent</h3>
            <BarChart :height="300" :chartData="jobIncomeData" :options="barChartOptions"></BarChart>
        </div>
    </div>
</template>

<script>
    import BarChart from "../components/BarChart.vue";
    import DoughnutChart from "../components/DoughnutChart.vue";
    import DataService from "../DataService";

    export default {
        name: "statistics.vue",
        components: {
            BarChart,
            DoughnutChart
        },
        data() {
            return {
                rawData: [],
                defaultColor: [
                    'red',
                    'blue',
                    'green',
                    'aqua',
                    'purple',
                    'yellow',
                    'pink'

                ]
            };
        },
        computed: {
            jobFillData() {
                let counts = this.jobs.map(job => {
                    const count = this.rawData.filter(response => {
                        return response.job === job;
                    }).length;
                    return count;
                });
                return {
                    labels: this.jobs,
                    datasets: [{

                        backgroundColor: this.defaultColor.slice(0, this.jobs.length),
                        data: counts,
                    }]
                };
            },
            jobIncomeData() {
                let data = this.jobs.map(
                    (job, index) => {
                        let responsesInJob = this.rawData.filter(
                            response => {
                                return response.job === job;
                            }
                        );
                        let totalIncomes = responsesInJob.map(response => {
                            return +response.income;
                        }).reduce((acc, income) => {
                            return +acc + +income;
                        },0);
                        let avgIncome = totalIncomes / responsesInJob.length;
                        return {
                            label: job,
                            backgroundColor: this.defaultColor[index],
                            data:[avgIncome]
                        };

                    }
                );
                return {

                    datasets: data
                }

            },
            jobs() {
                let jobs = this.rawData.map(
                    response => {
                        return response.job
                    });
                return jobs.filter((job, index) => {
                    return jobs.indexOf(job) === index;
                });
                return jobs;
            },
            barChartOptions() {
                return {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                        ,
                    }
                }
            }
        },
        created() {
            DataService.GetSurveyResponses().then(
                result => {
                    this.rawData = Object.values(result);
                }
            )
        }
    }
</script>

