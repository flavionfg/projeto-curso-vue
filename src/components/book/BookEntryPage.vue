<template>
    <v-container fluid>
        <back-button />
        <v-row v-if="book && book.volumeInfo">
            <v-col v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
                   cols="12" md="3" class="text-center">
                <img :src="book.volumeInfo.imageLinks.smallThumbnail">
            </v-col>
            <v-col cols="12" md="9">
                <h4 class="display-1">{{ book.volumeInfo.title}}</h4>
                <h5 class="headline">{{ book.volumeInfo.subtitle || 'Sem Descrição' }} </h5>

                <p class="mt-2">{{ book.volumeInfo.description}}</p>
                <!-- <p v-html="book.volumeInfo.description"></p>-->

                <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length"
                     class="mt-4">
                    <v-subheader>Autores</v-subheader>
                    <v-divider class="mb-2"></v-divider>
                    <v-chip v-for="(author, i) in book.volumeInfo.authors " :key="i"

                    >
                        {{ author }}
                    </v-chip>
                </div>

                <div v-if="book.volumeInfo.categories && book.volumeInfo.categories.length"
                     class="mt-4">
                    <v-subheader>Categorias</v-subheader>
                    <v-divider class="mb-2"></v-divider>
                    <v-chip v-for="(category, i) in book.volumeInfo.categories " :key="i"

                    >
                        {{ category }}
                    </v-chip>
                    <div v-if="book.volumeInfo.previewLink" class="mt-4">
                        <v-subheader>Ações</v-subheader>
                        <v-divider class="mb-2"></v-divider>

                        <v-btn text color="primary" @click="goToPreview(book)">
                            Ver Preview
                        </v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import api from '../api/api';

    import bookService from './bookService';
    import BackButton from '../navigation/BackButton.vue';

    export default {
        name: 'BookEntryPage',
        components: { BackButton },
        mixins: [api, bookService],
        data() {
            return {
                book: {},
            };
        },
        created() {
            this.get(`/volumes/${this.$route.params.id}`).then((response) => {
                this.book = response.data;
            });
        },
    };
</script>

<style scoped>

</style>
