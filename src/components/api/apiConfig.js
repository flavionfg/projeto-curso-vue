import apiInstance from './apiIstance';

export default {
    name: 'apiConfig',
    methods: {
        createInterceptors() {
            apiInstance.interceptors.request.use((config) => {
                // const configuration = config;
                // configuration.headers.Authorization = this.$store.state.authToken;
                const configuration = config;

                if (configuration.url.indexOf('?') !== -1) configuration.url += '&';
                else configuration.url += '?';

                configuration.url += `key=${this.$store.state.authToken}`;

                return configuration;
            });
        },
    },
};
