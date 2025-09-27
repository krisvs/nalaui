<template>
    <header class="DocsHeader">
        <div class="DocsHeader-container">
            <div class="DocsHeader-left">
                <button
                    class="DocsHeader-menuBtn"
                    aria-label="Toggle sidebar"
                    @click="$emit('toggleSidebar')">
                    <Icon name="fas fa-bars" />
                </button>
                <router-link to="/" class="DocsHeader-logo">
                    <div class="DocsHeader-logoIcon">N</div>
                    <span class="DocsHeader-logoText">Nalaui</span>
                </router-link>
            </div>

            <nav class="DocsHeader-nav">
                <router-link to="/" class="DocsHeader-navLink">
                    Home
                </router-link>
                <router-link to="/getting-started" class="DocsHeader-navLink">
                    Getting Started
                </router-link>
                <router-link to="/components" class="DocsHeader-navLink">
                    Components
                </router-link>
                <router-link to="/design-system" class="DocsHeader-navLink">
                    Design System
                </router-link>
            </nav>

            <div class="DocsHeader-right">
                <button
                    class="DocsHeader-themeBtn"
                    :aria-label="`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`"
                    @click="toggleTheme">
                    <Icon :name="currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun'" />
                </button>
                <a
                    href="https://github.com/christellevs/manjui"
                    target="_blank"
                    class="DocsHeader-githubLink"
                    aria-label="View on GitHub">
                    <Icon name="fab fa-github" />
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
import { computed, inject } from 'vue';

defineEmits(['toggleSidebar']);

const themeManager = inject('themeManager', {
    currentTheme: 'light',
    toggleTheme: () => {}
});

const currentTheme = computed(() => {
    if (!themeManager || !themeManager.currentTheme) {
        return 'light';
    }
    return themeManager.currentTheme === 'auto'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : themeManager.currentTheme;
});

const toggleTheme = () => {
    if (themeManager && themeManager.toggleTheme) {
        themeManager.toggleTheme();
    }
};
</script>

<style scoped>
.DocsHeader {
    height: 64px;
    background: var(--color-base-0);
    border-bottom: 1px solid var(--color-base-2);
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(8px);
}

.DocsHeader-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--sp2);
}

.DocsHeader-left {
    display: flex;
    align-items: center;
    gap: var(--sp2);
}

.DocsHeader-menuBtn {
    display: none;
    background: none;
    border: none;
    color: var(--color-text-0);
    font-size: 18px;
    padding: var(--sp1);
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.DocsHeader-menuBtn:hover {
    background: var(--color-base-1);
}

.DocsHeader-logo {
    display: flex;
    align-items: center;
    gap: var(--sp1);
    text-decoration: none;
    color: var(--color-text-0);
    font-weight: var(--font-weight-bold);
    font-size: 20px;
}

.DocsHeader-logoIcon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--color-primary-2), var(--color-secondary-2));
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-weight-boldest);
}

.DocsHeader-nav {
    display: flex;
    gap: var(--sp3);
}

.DocsHeader-navLink {
    text-decoration: none;
    color: var(--color-text-1);
    font-weight: var(--font-weight);
    padding: var(--sp1) var(--sp2);
    border-radius: 6px;
    transition: all 0.2s;
    position: relative;
}

.DocsHeader-navLink:hover {
    color: var(--color-text-0);
    background: var(--color-base-1);
}

.DocsHeader-navLink.router-link-active {
    color: var(--color-primary-2);
    background: var(--color-primary-0);
    background-opacity: 0.1;
}

.DocsHeader-right {
    display: flex;
    align-items: center;
    gap: var(--sp2);
}

.DocsHeader-themeBtn,
.DocsHeader-githubLink {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    color: var(--color-text-1);
    text-decoration: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.DocsHeader-themeBtn:hover,
.DocsHeader-githubLink:hover {
    color: var(--color-text-0);
    background: var(--color-base-1);
}

@media (max-width: 768px) {
    .DocsHeader-menuBtn {
        display: flex;
    }

    .DocsHeader-nav {
        display: none;
    }

    .DocsHeader-logoText {
        display: none;
    }
}
</style>
