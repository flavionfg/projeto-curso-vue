<template>
    <div>
        <v-row>
            <v-col cols="12">
                <search-imput-field @search="doSearch"/>
            </v-col>
        </v-row >

        <v-row justify=center v-if="!bookList.length">
            <v-col cols="12" md="4" class="text-center"
            >
                <p class="overline">Digite algo para iniciar a pesquisa.
                    ou pesquise alguma outra coisa.</p>
            </v-col>
        </v-row>

        <loading :condition="searchOnGoing">
            <v-row>
                <v-col v-for="(book, i) in bookList" :key="i"
                       cols="12"
                       md="3"
                       lg="2"
                >
                    <book-item :book="book" />
                </v-col>
            </v-row>
        </loading>
    </div>
</template>

<script>
    import api from '../api/api';

    import Loading from '../loading/Loading.vue';
    import BookItem from './BookItem.vue';
    import SearchImputField from '../search/SearchImputField.vue';

    export default {
        name: 'BookList',
        components: { SearchImputField, Loading, BookItem },
        mixins: [api],
        data() {
            return {
                bookList: [],
                searchOnGoing: false,
            };
        },
        methods: {
            doSearch(textSearch) {
                if (textSearch) {
                    this.searchOnGoing = true;

                    this.get(`/volumes?q=${this.textSearch}`).then((response) => {
                        this.bookList = response.data.items;
                        this.searchOnGoing = false;
                    });
                } else {
                    this.bookList = [];
                }
            },
        },
    };
</script>

<style scoped>

</style>
