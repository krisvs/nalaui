<template>
    <div class="Home">
        <!-- Hero Section -->
        <section class="Hero">
            <div class="Hero-content">
                <div class="Hero-badge">
                    <Icon name="fas fa-star" />
                    Vue UI Library
                </div>
                <h1 class="Hero-title">
                    Build Beautiful
                    <span class="Hero-gradient">Vue Applications</span>
                    Faster
                </h1>
                <p class="Hero-description">
                    Nalaui is a modern Vue 3 UI library with a complete design system.
                    Create consistent, accessible, and beautiful user interfaces with minimal effort.
                </p>
                <div class="Hero-actions">
                    <router-link to="/getting-started" class="Hero-btn Hero-btn--primary">
                        <Icon name="fas fa-rocket" />
                        Get Started
                    </router-link>
                    <router-link to="/components" class="Hero-btn Hero-btn--secondary">
                        <Icon name="fas fa-puzzle-piece" />
                        View Components
                    </router-link>
                </div>
            </div>
            <div class="Hero-visual">
                <div class="Hero-showcase">
                    <div class="Demo-card">
                        <VGroup gap="2">
                            <Title>Sample Component</Title>
                            <Text>This is how easy it is to build with Nalaui</Text>
                            <HGroup gap="1">
                                <Btn variant="primary">Primary</Btn>
                                <Btn variant="secondary">Secondary</Btn>
                            </HGroup>
                        </VGroup>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="Features">
            <div class="Features-container">
                <h2 class="Features-title">Why Choose Nalaui?</h2>
                <div class="Features-grid">
                    <div class="Feature-card">
                        <div class="Feature-icon">
                            <Icon name="fas fa-bolt" />
                        </div>
                        <h3>Lightning Fast</h3>
                        <p>Tree-shakable ESM modules and optimized CSS for minimal bundle size and maximum performance.</p>
                    </div>
                    <div class="Feature-card">
                        <div class="Feature-icon">
                            <Icon name="fas fa-palette" />
                        </div>
                        <h3>Design System</h3>
                        <p>Complete design system with consistent spacing, typography, and colors. Easy to customize and extend.</p>
                    </div>
                    <div class="Feature-card">
                        <div class="Feature-icon">
                            <Icon name="fas fa-mobile-alt" />
                        </div>
                        <h3>Responsive</h3>
                        <p>Mobile-first responsive design that works beautifully on all devices and screen sizes.</p>
                    </div>
                    <div class="Feature-card">
                        <div class="Feature-icon">
                            <Icon name="fas fa-universal-access" />
                        </div>
                        <h3>Accessible</h3>
                        <p>Built with accessibility in mind. ARIA compliant components that work with screen readers.</p>
                    </div>
                    <div class="Feature-card">
                        <div class="Feature-icon">
                            <Icon name="fas fa-moon" />
                        </div>
                        <h3>Dark Mode</h3>
                        <p>Built-in dark mode support with automatic system theme detection and manual toggle.</p>
                    </div>
                    <div class="Feature-card">
                        <div class="Feature-icon">
                            <Icon name="fab fa-vuejs" />
                        </div>
                        <h3>Vue 3 Native</h3>
                        <p>Built specifically for Vue 3 with Composition API, TypeScript support, and modern tooling.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quick Start Section -->
        <section class="QuickStart">
            <div class="QuickStart-container">
                <h2 class="QuickStart-title">Quick Start</h2>
                <div class="QuickStart-steps">
                    <div class="Step">
                        <div class="Step-number">1</div>
                        <div class="Step-content">
                            <h3>Install</h3>
                            <div class="Code-block">
                                <code>npm install manjui</code>
                            </div>
                        </div>
                    </div>
                    <div class="Step">
                        <div class="Step-number">2</div>
                        <div class="Step-content">
                            <h3>Import</h3>
                            <div class="Code-block">
                                <code>import { components } from 'manjui'</code>
                            </div>
                        </div>
                    </div>
                    <div class="Step">
                        <div class="Step-number">3</div>
                        <div class="Step-content">
                            <h3>Use</h3>
                            <div class="Code-block">
                                <code>&lt;Btn variant="primary"&gt;Hello&lt;/Btn&gt;</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// No specific setup needed, using global components
</script>

<style scoped>
.Home {
    min-height: 100vh;
}

/* Hero Section */
.Hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp6);
    align-items: center;
    min-height: 70vh;
    padding: var(--sp6) 0;
}

.Hero-content {
    max-width: 600px;
}

.Hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--sp1);
    background: var(--color-primary-0);
    color: var(--color-primary-3);
    padding: var(--sp1) var(--sp2);
    border-radius: 20px;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--sp3);
}

.Hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: var(--font-weight-boldest);
    line-height: 1.1;
    margin: 0 0 var(--sp3) 0;
    color: var(--color-text-0);
}

.Hero-gradient {
    background: linear-gradient(135deg, var(--color-primary-2), var(--color-secondary-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.Hero-description {
    font-size: var(--font-size-large);
    color: var(--color-text-1);
    line-height: 1.6;
    margin: 0 0 var(--sp4) 0;
}

.Hero-actions {
    display: flex;
    gap: var(--sp2);
    flex-wrap: wrap;
}

.Hero-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--sp1);
    padding: var(--sp2) var(--sp3);
    border-radius: 8px;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    transition: all 0.2s;
    border: 2px solid transparent;
}

.Hero-btn--primary {
    background: var(--color-primary-2);
    color: var(--color-primary-text);
}

.Hero-btn--primary:hover {
    background: var(--color-primary-3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.Hero-btn--secondary {
    background: var(--color-base-1);
    color: var(--color-text-0);
    border-color: var(--color-base-3);
}

.Hero-btn--secondary:hover {
    background: var(--color-base-2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.Hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.Hero-showcase {
    perspective: 1000px;
}

.Demo-card {
    background: var(--color-base-0);
    border: 1px solid var(--color-base-2);
    border-radius: 12px;
    padding: var(--sp4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transform: rotateY(-5deg) rotateX(5deg);
    transition: transform 0.3s ease;
}

.Demo-card:hover {
    transform: rotateY(0deg) rotateX(0deg);
}

/* Features Section */
.Features {
    padding: var(--sp8) 0;
    background: var(--color-base-1);
}

.Features-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--sp4);
}

.Features-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: var(--font-weight-boldest);
    margin: 0 0 var(--sp6) 0;
    color: var(--color-text-0);
}

.Features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--sp4);
}

.Feature-card {
    background: var(--color-base-0);
    padding: var(--sp4);
    border-radius: 12px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid var(--color-base-2);
}

.Feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.Feature-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--color-primary-2), var(--color-secondary-2));
    color: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin: 0 auto var(--sp3) auto;
}

.Feature-card h3 {
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    margin: 0 0 var(--sp2) 0;
    color: var(--color-text-0);
}

.Feature-card p {
    color: var(--color-text-1);
    line-height: 1.6;
    margin: 0;
}

/* Quick Start Section */
.QuickStart {
    padding: var(--sp8) 0;
}

.QuickStart-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--sp4);
}

.QuickStart-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: var(--font-weight-boldest);
    margin: 0 0 var(--sp6) 0;
    color: var(--color-text-0);
}

.QuickStart-steps {
    display: grid;
    gap: var(--sp4);
}

.Step {
    display: flex;
    gap: var(--sp3);
    align-items: flex-start;
}

.Step-number {
    width: 40px;
    height: 40px;
    background: var(--color-primary-2);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-weight-bold);
    flex-shrink: 0;
}

.Step-content h3 {
    margin: 0 0 var(--sp2) 0;
    color: var(--color-text-0);
    font-weight: var(--font-weight-bold);
}

.Code-block {
    background: var(--color-base-1);
    border: 1px solid var(--color-base-2);
    border-radius: 6px;
    padding: var(--sp2);
    font-family: var(--font-monospace);
    font-size: var(--font-size-small);
    color: var(--color-text-0);
}

/* Responsive Design */
@media (max-width: 768px) {
    .Hero {
        grid-template-columns: 1fr;
        text-align: center;
        gap: var(--sp4);
    }

    .Hero-visual {
        order: -1;
    }

    .Demo-card {
        transform: none;
    }

    .Features-grid {
        grid-template-columns: 1fr;
    }

    .QuickStart-steps {
        gap: var(--sp6);
    }

    .Step {
        flex-direction: column;
        text-align: center;
    }
}
</style>
