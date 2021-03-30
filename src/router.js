import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/Login/LoginPage.vue';
import BookListPage from './components/book/BookListPage.vue';
import BookEntryPage from './components/book/BookEntryPage.vue';
import LibraryPageList from './components/library/LibraryPageList.vue';

Vue.use(Router);

const routes = [
    { path: '/', name: 'login', component: LoginPage },
    { path: '/book', name: 'book', component: BookListPage },
    { path: '/book/:id', name: 'bookEntry', component: BookEntryPage },
    { path: '/library', name: 'library', component: LibraryPageList },
];

export default new Router({
    routes,
});
