<template>
    <div class="container my-5">
        <h2>Kapcsolat</h2>
        <div class="row mb-3">
            <div class="mb-3 col-12 col-md-6">
                <label for="inputName" class="form-label">Nev</label>
                <input type="email" class="form-control" id="inputName" v-model="name">
            </div>
            <div class="mb-3 col-12 col-md-6">
                <label for="inputEmail" class="form-label">Email cim</label>
                <input type="email" class="form-control" id="inputEmail" v-model="email">
            </div>
            <div class="mb-3 col-12">
                <label for="inputMessage" class="form-label">Uzenet</label>
                <textarea class="form-control" id="inputMessage" rows="3" v-model="message"></textarea>
            </div>
            <div class="col-12">
                <button class="btn btn-primary mt-4" type="submit" @click.prevent="Submit()">Kuldes</button>
            </div>
        </div>
        <div class="alert alert-success" role="alert"
             v-if="alerts.success">
            Sikeresen elkuldtuk az uzenetet
        </div>
        <div class="alert alert-danger" role="alert"
             v-if="alerts.danger">
            Az uzenetet nem sikerult elkuldeni.
            Kerlek a hiba korulmenyeirol irj nekunk az alabbi cimre: <a href="mailto:support@fizu.hu">support@fizu
            .hu</a>


        </div>
        <div class="alert alert-warning" role="alert"
             v-if="alerts.warning">
            Uresen hagytal mezoket, ezeket tolts ki a kuldeshez.
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import {TYPES} from "../store";

    export default {
        name: "contact",
        data() {
            return {
                alerts: {
                    success: false,
                    danger: false,
                    warning: false
                },
                name: null,
                email: null,
                message: null
            }
        },
        methods: {
            ...mapActions([TYPES.actions.postContactMessage]),
            ShowSuccessAlert() {
                this.alerts.success = true;
            },
            ShowDangerAlert() {
                this.alerts.danger = true;
            },
            ShowWarningAlert() {
                this.alerts.warning = true;
            },
            HideAllAlert() {
                this.alerts.success = false;
                this.alerts.danger = false;
                this.alerts.warning = false;
            },
            Submit() {
                this.HideAllAlert();
                if (!this.name || !this.email || !this.message) {
                    this.ShowWarningAlert();
                    return;
                }
                const now = new Date();
                this.postContactMessage({
                    email: this.email,
                    name: this.name,
                    message: this.message,
                    date: now.toLocaleString()
                }).then(success => {
                    if (success) {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                        this.ShowSuccessAlert();
                    } else {
                        this.ShowDangerAlert();
                    }
                });
            }
        }
    };
</script>

<style scoped>

</style>