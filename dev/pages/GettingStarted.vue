<template>
    <div class="GettingStarted">
        <div class="PageHeader">
            <h1 class="PageHeader-title">Getting Started</h1>
            <p class="PageHeader-description">
                Get up and running with NalaUI in your Vue 3 project in just a few minutes.
            </p>
        </div>

        <div class="Content">
            <section class="Section">
                <h2>Installation</h2>
                <p>
                    NalaUI is shipped for ESM environments and build systems like <a href="https://vite.dev" target="_blank">Vite</a>.
                    The package consists of tree-shakable ESM components bundle and a set of CSS files.
                </p>

                <h3>NPM Package</h3>
                <CodeBlock
                    language="bash"
                    code="npm install manjui" />

                <h3>Local Development / Monorepo Usage</h3>
                <p>For monorepo setups or local development, you can use a file reference in your <code>package.json</code>:</p>
                <CodeBlock
                    language="json"
                    :code="monorepoExample" />
                <p>Then run:</p>
                <CodeBlock
                    language="bash"
                    code="npm install" />
            </section>

            <section class="Section">
                <h2>Import Components</h2>

                <h3>Individual Components</h3>
                <p>Import individual components to minimize the bundle size:</p>
                <CodeBlock
                    language="javascript"
                    :code="importIndividual" />

                <h3>All Components</h3>
                <p>Or import all components for a simpler setup:</p>
                <CodeBlock
                    language="javascript"
                    :code="importAll" />
            </section>

            <section class="Section">
                <h2>Import CSS</h2>

                <h3>Required Stylesheets</h3>
                <p>NalaUI components require minimal global CSS to work:</p>
                <ul>
                    <li>
                        <strong>variables.css</strong> - Global CSS variables that support the Design System
                    </li>
                    <li>
                        <strong>baseline.css</strong> - Sensible baseline for component styles with global <code>box-sizing: border-box</code>
                    </li>
                    <li>
                        <strong>components.css</strong> - Scoped styles for bundled components (required)
                    </li>
                </ul>

                <CodeBlock
                    language="javascript"
                    :code="importRequiredCss" />

                <h3>Optional Stylesheets</h3>
                <p>
                    NalaUI also includes optional global styles referred to as "modules".
                    These are more opinionated and include utility classes, heading styles, article content styles etc.
                </p>

                <CodeBlock
                    language="javascript"
                    :code="importOptionalCss" />

                <h3>All Stylesheets</h3>
                <p>
                    You can also import the full global stylesheet for simpler setup.
                    Make sure to include <code>components.css</code> as well.
                </p>
                <CodeBlock
                    language="javascript"
                    :code="importFullCss" />
            </section>

            <section class="Section">
                <h2>Complete Example</h2>
                <p>Here's a complete example of setting up NalaUI in a Vue 3 application:</p>

                <h3>main.js</h3>
                <CodeBlock
                    language="javascript"
                    :code="completeExample" />

                <h3>App.vue</h3>
                <CodeBlock
                    language="vue"
                    :code="appExample" />
            </section>

            <section class="Section">
                <h2>Next Steps</h2>
                <div class="NextSteps">
                    <router-link to="/components" class="NextStep-card">
                        <div class="NextStep-icon">
                            <Icon name="fas fa-puzzle-piece" />
                        </div>
                        <h3>Explore Components</h3>
                        <p>Browse all available components with interactive examples</p>
                    </router-link>

                    <router-link to="/design-system" class="NextStep-card">
                        <div class="NextStep-icon">
                            <Icon name="fas fa-palette" />
                        </div>
                        <h3>Design System</h3>
                        <p>Learn about the design system and customization options</p>
                    </router-link>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const monorepoExample = `{
  "dependencies": {
    "manjui": "file:../../libs/manjui"
  }
}`;

const importIndividual = `import { Btn } from 'manjui';

app.component('Btn', Btn);`;

const importAll = `import { components } from 'manjui';

for (const [name, component] of Object.entries(components)) {
    app.component(name, component);
}`;

const importRequiredCss = `import 'manjui/stylesheets/variables.css';
import 'manjui/stylesheets/baseline.css';
import 'manjui/stylesheets/components.css';`;

const importOptionalCss = `import 'manjui/stylesheets/modules/article.css';
import 'manjui/stylesheets/modules/headings.css';
import 'manjui/stylesheets/modules/kbd.css';
import 'manjui/stylesheets/modules/transitions.css';
import 'manjui/stylesheets/modules/utils.css';`;

const importFullCss = `import 'manjui/stylesheets/full.css';
import 'manjui/stylesheets/components.css';`;

const completeExample = `import { createApp } from 'vue';
import { components } from 'manjui';

// Import required CSS
import 'manjui/stylesheets/variables.css';
import 'manjui/stylesheets/baseline.css';
import 'manjui/stylesheets/components.css';

import App from './App.vue';

const app = createApp(App);

// Register all components
for (const [name, component] of Object.entries(components)) {
    app.component(name, component);
}

app.mount('#app');`;

const appExample = `<template>
  <VGroup gap="4" class="app">
    <Title>Welcome to NalaUI</Title>
    <Text>Build beautiful Vue applications faster!</Text>

    <HGroup gap="2">
      <Btn variant="primary">Get Started</Btn>
      <Btn variant="secondary">Learn More</Btn>
    </HGroup>

    <Divider />

    <VGroup gap="2">
      <Subtitle>Try the input component:</Subtitle>
      <InputText
        placeholder="Enter your name"
        v-model="name"
      />
      <Text v-if="name">Hello, {{ name }}!</Text>
    </VGroup>
  </VGroup>
</template>

<${''}script setup>
import { ref } from 'vue';

const name = ref('');
</${''}script>`;
</script>

<style scoped>
.GettingStarted {
    max-width: 800px;
}

.PageHeader {
    margin-bottom: var(--sp6);
}

.PageHeader-title {
    font-size: 3rem;
    font-weight: var(--font-weight-bold);
    margin: 0 0 var(--sp2) 0;
    color: var(--color-text-0);
}

.PageHeader-description {
    font-size: var(--font-size-large);
    color: var(--color-text-1);
    margin: 0;
}

.Content {
    line-height: 1.6;
}

.Section {
    margin-bottom: var(--sp6);
}

.Section h2 {
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
    margin: 0 0 var(--sp3) 0;
    color: var(--color-text-0);
    border-bottom: 2px solid var(--color-base-2);
    padding-bottom: var(--sp2);
}

.Section h3 {
    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);
    margin: var(--sp4) 0 var(--sp2) 0;
    color: var(--color-text-0);
}

.Section p {
    color: var(--color-text-1);
    margin: var(--sp2) 0;
}

.Section ul {
    color: var(--color-text-1);
    padding-left: var(--sp4);
}

.Section li {
    margin: var(--sp1) 0;
}

.Section code {
    background: var(--color-base-1);
    padding: 0.25em 0.5em;
    border-radius: 4px;
    font-family: var(--font-monospace);
    font-size: 0.9em;
    color: var(--color-text-0);
}

.Section a {
    color: var(--color-primary-2);
    text-decoration: none;
}

.Section a:hover {
    text-decoration: underline;
}

.NextSteps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--sp3);
    margin-top: var(--sp4);
}

.NextStep-card {
    display: block;
    background: var(--color-base-1);
    border: 1px solid var(--color-base-2);
    border-radius: 12px;
    padding: var(--sp4);
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
}

.NextStep-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: var(--color-primary-2);
}

.NextStep-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--color-primary-2), var(--color-secondary-2));
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: var(--sp2);
}

.NextStep-card h3 {
    margin: 0 0 var(--sp1) 0;
    color: var(--color-text-0);
    font-size: var(--font-size-large);
}

.NextStep-card p {
    margin: 0;
    color: var(--color-text-1);
    font-size: var(--font-size-small);
}
</style>
