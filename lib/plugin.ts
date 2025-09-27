import { App } from 'vue';

import * as components from './components/index.js';

export function ManjuiPlugin(app: App): void {
    // Register all components globally
    Object.entries(components).forEach(([name, component]) => {
        app.component(name, component as any);
    });
}

export default {
    install: ManjuiPlugin
};
