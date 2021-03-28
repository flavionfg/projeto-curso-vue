<template>
    <v-card class="mx-auto" book-card>
        <div
            v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
            class="text-center pt-3"
        >
            <img :src="book.volumeInfo.imageLinks.smallThumbnail">
        </div>
        <v-card-title><span>{{ book.volumeInfo.title.substring(0,20) }}</span></v-card-title>
        <span v-if="book.volumeInfo.title.length > maxTitleLengh">...</span>
        <v-card-title>
            {{ book.volumeInfo.subtitle || "Sem descição" }}
        </v-card-title>

        <v-card-actions>
            <v-btn text
                   small
                   color="primary"
                   @click="goToDetails"
            >
                Ver Detalhes
            </v-btn>
            <v-btn v-if="book.volumeInfo.previewLink"
                   text
                   small
                   color="primary"
                   @click="goToPreview(book)"
            >
                Ver Preview
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import bookService from './bookService';

    export default {
        name: 'BookItem',
        mixins: [bookService],
        props: {
            book: { type: Object, required: true },
        },
        data() {
            return {
                maxTitleLengh: 20,
            };
        },
        methods: {
            goToDetails() {
                this.$router.push(`/book/${this.book.id}`);
            },
        },
    };
</script>

<style scoped>
    .book-card{
        height: 100%;
    }

</style>
