import 'reflect-metadata';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../stylesheets/full.css';
import './theme.css';

import { createApp } from 'vue';

import * as components from '../lib/components/index.js';
import { themePlugin } from '../lib/index.js';
import DocsLayout from './components/DocsLayout.vue';
import { router } from './router.js';

const app = createApp(DocsLayout);
app.use(router);
app.use(themePlugin);

for (const [name, component] of Object.entries(components)) {
    app.component(name, component);
}

app.mount('#app');
