<template>
    <v-app>
        <login-page />
    </v-app>
</template>

<script>
    import LoginPage from './components/Login/LoginPage.vue';

    export default {
        // AIzaSyAxq8DWcJn0X677bwo__3kDVRFE7UGCX2g
        name: 'App',
        components: { LoginPage },
    };
</script>
