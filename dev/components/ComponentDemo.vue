<template>
    <div :id="id" class="ComponentDemo">
        <div class="ComponentDemo-header">
            <h3 class="ComponentDemo-title">{{ title }}</h3>
            <div class="ComponentDemo-actions">
                <button
                    class="ComponentDemo-toggleBtn"
                    :aria-label="showCode ? 'Hide code' : 'Show code'"
                    @click="showCode = !showCode">
                    <Icon :name="showCode ? 'fas fa-eye-slash' : 'fas fa-code'" />
                    {{ showCode ? 'Hide Code' : 'Show Code' }}
                </button>
            </div>
        </div>

        <p v-if="description" class="ComponentDemo-description">
            {{ description }}
        </p>

        <div class="ComponentDemo-preview">
            <slot />
        </div>

        <div v-if="showCode" class="ComponentDemo-code">
            <CodeBlock
                :code="code"
                language="vue"
                :showHeader="false" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import CodeBlock from './CodeBlock.vue';

defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    code: {
        type: String,
        required: true
    }
});

const showCode = ref(false);
</script>

<style scoped>
.ComponentDemo {
    border: 1px solid var(--color-base-2);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: var(--sp4);
    background: var(--color-base-0);
}

.ComponentDemo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--sp3);
    background: var(--color-base-1);
    border-bottom: 1px solid var(--color-base-2);
}

.ComponentDemo-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-text-0);
}

.ComponentDemo-actions {
    display: flex;
    gap: var(--sp2);
}

.ComponentDemo-toggleBtn {
    display: flex;
    align-items: center;
    gap: var(--sp1);
    background: none;
    border: 1px solid var(--color-base-3);
    color: var(--color-text-1);
    padding: var(--sp1) var(--sp2);
    border-radius: 6px;
    cursor: pointer;
    font-size: var(--font-size-small);
    transition: all 0.2s;
}

.ComponentDemo-toggleBtn:hover {
    background: var(--color-base-2);
    color: var(--color-text-0);
    border-color: var(--color-base-4);
}

.ComponentDemo-description {
    padding: 0 var(--sp3) var(--sp2) var(--sp3);
    margin: var(--sp2) 0 0 0;
    color: var(--color-text-1);
    font-style: italic;
}

.ComponentDemo-preview {
    padding: var(--sp4);
    background: var(--color-base-0);
}

.ComponentDemo-code {
    border-top: 1px solid var(--color-base-2);
}

.ComponentDemo-code :deep(.CodeBlock) {
    margin: 0;
    border: none;
    border-radius: 0;
}

.ComponentDemo-code :deep(.CodeBlock-pre) {
    background: var(--color-base-1);
}
</style>
