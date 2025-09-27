<template>
    <div class="DocsLayout">
        <DocsHeader @toggleSidebar="sidebarOpen = !sidebarOpen" />
        <div class="DocsLayout-body">
            <DocsSidebar
                :isOpen="sidebarOpen"
                @close="sidebarOpen = false" />
            <main class="DocsLayout-content">
                <div class="DocsLayout-container">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import DocsHeader from './DocsHeader.vue';
import DocsSidebar from './DocsSidebar.vue';

const sidebarOpen = ref(false);
</script>

<style scoped>
.DocsLayout {
    min-height: 100vh;
    background: var(--color-base-0);
    color: var(--color-text-0);
}

.DocsLayout-body {
    display: flex;
    min-height: calc(100vh - 64px);
}

.DocsLayout-content {
    flex: 1;
    overflow-x: hidden;
}

.DocsLayout-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--sp4);
}

@media (max-width: 768px) {
    .DocsLayout-container {
        padding: var(--sp2);
    }
}
</style>
