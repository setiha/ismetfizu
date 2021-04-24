<template>
    <div>
        <form>
            <div class="row py-5 mx-4">

                <!-- gender -->
                <div class="col-12 col-md-7 py-md-3">
                    <p>Neme</p>
                </div>
                <div class="col-12 col-md-5 py-md-3 mb-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input"
                               type="radio"
                               id="genderMale"
                               name="gender"
                               value="male"
                               required v-model="fields.gender">
                        <label class="form-check-label"
                               for="genderMale">Férfi</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input"
                               type="radio"
                               id="genderFemale"
                               name="gender"
                               value="female"
                               required v-model="fields.gender">
                        <label class="form-check-label"
                               for="genderFemale">Nő</label>
                    </div>
                </div>

                <!-- county -->
                <div class="col-12 col-md-7 py-md-3">
                    <p>Melyik megyében végzi a munkáját?</p>
                </div>
                <div class="col-12 col-md-5 py-md-3 mb-3">
                    <input type="text"
                           class="form-control"
                           required v-model="fields.county">
                </div>

                <!-- sector -->
                <div class="col-12 col-md-7 py-md-3">
                    <p>Melyik ágazatban dolgozik?</p>
                </div>
                <div class="col-12 col-md-5 py-md-3 mb-3">
                    <select class="form-control" v-model="fields.sector">
                        <option :value="null">Válassz</option>
                        <option>Informatika</option>
                        <option>Mezőgazdaság</option>
                        <option>Vendéglátás</option>
                    </select>
                </div>

                <!-- job -->
                <div class="col-12 col-md-7 py-md-3">
                    <p>Milyen munkakörben dolgozik?</p>
                </div>
                <div class="col-12 col-md-5 py-md-3 mb-3">
                    <input type="text"
                           class="form-control"
                           required v-model="fields.job">
                </div>

                <!-- income -->
                <div class="col-12 col-md-7 py-md-3">
                    <p>Mennyi a havi bruttó keresete?</p>
                </div>
                <div class="col-12 col-md-5 py-md-3 mb-3">
                    <input type="number"
                           class="form-control"
                           required v-model="fields.income">
                </div>

                <!-- submit -->
                <div class="col-12 text-center my-5">
                    <button class="btn btn-outline-success"
                            type="submit" @click="Submit">Elküldöm
                    </button>
                </div>

                <!-- alertek -->

                <div class="col-12 alert alert-success"
                     role="alert" v-if="alerts.success">
                    Sikeresen beküldted az üzenetet! Itt megnézheted a statisztikánkat:
                    <router-link to='/statistics'>Link</router-link>
                </div>

                <div class="col-12 alert alert-danger" v-if="alerts.danger"
                     role="alert">
                    Valami elromlott üzenetküldés közben. <br> Kérlek írd meg nekünk a hiba körülményeit
                    ide:
                    <a href="mailto:support@fizu.hu">support@fizu.hu</a>
                </div>
            </div>
        </form>

    </div>
</template>

<script>

    import {TYPES} from "../store";
    import {mapActions} from "vuex";

    export default {
        name: 'ShortSurvey',
        data() {
            return {
                fields: {
                    gender: null,
                    county: null,
                    income: null,
                    job: null,
                    sector: null
                },
                alerts: {
                    success: false,
                    danger: false
                }
            }
        },
        methods: {
            ...mapActions([TYPES.actions.postSurveyResponse]),
            Submit(event) {
                let valueCollection = Object.values(this.fields);
                let missingValues = valueCollection.filter(value => {
                    return !value;
                });
                if (missingValues.length === 0) {
                    event.preventDefault();
                   this.postSurveyResponse(this.fields).then(success => {
                        if (success) {
                            this.fields.gender='';
                            this.fields.sector='';
                            this.fields.job='';
                            this.fields.county='';
                            this.fields.income='';
                            this.ShowSuccessAlert();

                        } else {
                            this.ShowDangerAlert();
                        }
                    });
                }

            },
            ShowSuccessAlert() {
                this.alerts.success = true;
            },
            ShowDangerAlert() {
                this.alerts.danger = true;
            },
            HideAllAlert() {
                this.alerts.success = false;
                this.alerts.danger = false;

            }
        }
    };
</script>