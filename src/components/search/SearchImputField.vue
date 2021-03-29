<template>
    <v-text-field v-model="textSearch"
                  label="Pesquise algo..."
                  @input="doSearch"
    />
</template>

<script>
    export default {
        name: 'SearchImputField',
        data() {
            return {
                textSearch: '',
                lastChance: 0,
                delay: 300,
            };
        },
        methods: {
            doSearch() {
                this.lastChance = new Date().getTime();
                setTimeout(() => {
                    if (new Date().getTime() >= this.lastChance + this.delay) {
                        this.$emit('search', this.textSearch);
                        console.log(this.textSearch);
                    }
                }, this.delay);
            },
        },
    };
</script>

<style scoped>

</style>
