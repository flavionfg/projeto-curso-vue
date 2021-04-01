<template>
    <v-app-bar
        app
        dark
        flat
        color="secondary"
    >
        <v-toolbar-title>Projeto - Curso VUE</v-toolbar-title>

        <v-spacer />
        <v-toolbar-items v-if="$store.state.logged">
            <v-btn text
                   @click="goToBookList"
            >
                Livros
            </v-btn>
            <v-btn v-if="$store.state.authToken"
                   text
                   @click="goToCollection"
            >
                Minha Colecão
            </v-btn>
            <v-btn text
                   @click="logout"
            >
                Sair
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppHeader',
        methods: {
            goToBookList() {
                this.$router.push('/book');
            },
            goToCollection() {
                this.$router.push('/library');
            },
            logout() {
                window.localStorage.authToken = '';
                this.$store.commit('setAuthToken', '');
                this.$store.commit('setUserId', '');
                this.$router.push('/');
            },
        },
    };
</script>

<style scoped>

</style>
