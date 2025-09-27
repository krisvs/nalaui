import { createRouter, createWebHistory } from 'vue-router';

import Components from './pages/Components.vue';
import DesignSystem from './pages/DesignSystem.vue';
import GettingStarted from './pages/GettingStarted.vue';
// Page components
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/getting-started',
        name: 'GettingStarted',
        component: GettingStarted
    },
    {
        path: '/components',
        name: 'Components',
        component: Components
    },
    {
        path: '/design-system',
        name: 'DesignSystem',
        component: DesignSystem
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
