<template>
    <div>
        <vue-container fluid>
            <v-row justify="center">
                <v-col cols="12" md="4" lg="3" class="text-center">
                    <h6 class="headline">Login</h6>
                    <v-text-field label="Token" v-model="token"></v-text-field>

                    <v-btn depresed
                           dark color="green"
                           block
                           @click="login">
                        Login
                    </v-btn>
                    <v-btn text
                           @click="loginGuest">Entrar como visitante
                    </v-btn>
                </v-col>
            </v-row>
        </vue-container>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                token: '',
            };
        },
        methods: {
            login() {
                alert(this.token);
            },
            loginGuest() {

            },
        },
    };
</script>

<style scoped>

</style>
