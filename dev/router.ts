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
    routes,
    scrollBehavior(to, from, savedPosition) {
        // If the browser back/forward button was used, restore the saved position
        if (savedPosition) {
            return savedPosition;
        }
        // If there's a hash in the URL (e.g., #forms, #layout)
        else if (to.hash) {
            return new Promise((resolve) => {
                // Small delay to ensure DOM is ready
                setTimeout(() => {
                    const element = document.querySelector(to.hash);
                    if (element) {
                        resolve({
                            el: to.hash,
                            behavior: 'smooth',
                            top: 80 // offset for fixed header
                        });
                    } else {
                        resolve({ top: 0 });
                    }
                }, 100);
            });
        }
        // Default behavior: scroll to top
        else {
            return { top: 0 };
        }
    }
});
