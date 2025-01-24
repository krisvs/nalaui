import '@fortawesome/fontawesome-free/css/all.min.css';
import '../stylesheets/full.css';
import './theme.css';

import { createApp } from 'vue';

import * as blocks from '../lib/blocks/index.js';
import * as components from '../lib/components/index.js';
import { themePlugin } from '../lib/index.js';
import * as sections from '../lib/sections/index.js';
import Root from './Root.vue';

const app = createApp(Root);
app.use(themePlugin);

for (const [name, component] of Object.entries(components)) {
    app.component(name, component);
}

for (const [name, section] of Object.entries(sections)) {
    app.component(name, section);
}

for (const [name, block] of Object.entries(blocks)) {
    app.component(name, block);
}

app.mount('#app');
