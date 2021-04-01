<template>
    <div>
        <vue-container fluid>
            <v-row justify="center">
                <v-col cols="12" md="4" lg="3" class="text-center">
                    <h6 class="display-1 text-uppercase">Login</h6>
                    <v-text-field label="ID do Usuario" v-model="userId">

                    </v-text-field>

                    <v-text-field label="Token" v-model="token">

                    </v-text-field>

                    <v-btn depresed
                           dark
                           color="primary"
                           block
                           class="mb-2"
                           @click="login">
                        Login
                    </v-btn>
                    <v-btn text
                           color="secondary"
                           @click="loginGuest">Entrar como visitante
                    </v-btn>
                </v-col>
            </v-row>

            <feedback />
        </vue-container>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                userId: '111811248547923307733',
                token: 'AIzaSyAxq8DWcJn0X677bwo__3kDVRFE7UGCX2g',
            };
        },
        methods: {
            login() {
                if (this.userId && this.token) {
                    window.localStorage.authToken = this.token;
                    this.$store.commit('setAuthToken', this.token);
                    this.$store.commit('setUserId', this.userId);
                    this.$router.push('/book');
                } else {
                    this.$store.commit('showErrorMessage', 'Você deve informar um token e um Id de usuario');
                }
            },
            loginGuest() {
                this.$store.commit('setLogged', true);
                this.$router.push('/book');
            },
        },
    };
</script>

<style scoped>

</style>
