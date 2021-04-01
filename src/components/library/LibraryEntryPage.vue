<template>
    <v-container fluid>
        <back-button />
        <v-row>
            <v-col cols="12">
                <h4 class="display-1">{{ shelf.title }}</h4>
                <span class="overline ml-2">{{ shelf.volumeCount }} Livros</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../api/api';

    import BackButton from '../navigation/BackButton.vue';

    export default {
        name: 'LibraryEntryPage',
        components: { BackButton },
        mixins: [api],
        data() {
            return {
                shelf: [],
            };
        },
        created() {
            this.get(`/users/111811248547923307733/bookshelves/${this.$route.params.id}`).then((response) => {
                this.shelf = response.data;
            });
        },
    };
</script>

<style scoped>
</style>
