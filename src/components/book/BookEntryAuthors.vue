<template>
    <div>
        <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length"
             class="mt-4">
            <v-subheader>Autores</v-subheader>
            <v-divider class="mb-2"></v-divider>
            <v-chip v-for="(author, i) in book.volumeInfo.authors " :key="i"

            >
                {{ author }}
            </v-chip>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryAuthors',
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style scoped>

</style>
