<template>
    <div>
        <vue-container fluid>
            <v-row justify="center">
                <v-col cols="12" md="4" lg="3" class="text-center">
                    <h6 class="display-1 text-uppercase">Login</h6>
                    <v-text-field label="Token" v-model="token"></v-text-field>

                    <v-btn depresed
                           dark color="green"
                           block
                           class="mb-2"
                           @click="login">
                        Login
                    </v-btn>
                    <v-btn text
                           color="blue"
                           @click="loginGuest">Entrar como visitante
                    </v-btn>
                </v-col>
            </v-row>

            <feedback />
        </vue-container>
    </div>
</template>

<script>
    // AIzaSyAxq8DWcJn0X677bwo__3kDVRFE7UGCX2g

    export default {
        name: 'LoginPage',
        data() {
            return {
                token: '',
                message: '',
                showMessage: false,
            };
        },
        methods: {
            login() {
                if (this.token) {
                    this.$store.commit('setAuthToken', this.token);
                    this.$router.push('/book');
                } else {
                    this.$store.commit('showErrorMessage', 'Você deve informar um token');
                }
            },
            loginGuest() {
                this.$router.push('/book');
            },
        },
    };
</script>

<style scoped>

</style>
