<template>
    <div class="CodeBlock">
        <div v-if="showHeader" class="CodeBlock-header">
            <span class="CodeBlock-language">{{ language }}</span>
            <button
                class="CodeBlock-copy"
                :aria-label="copied ? 'Copied!' : 'Copy code'"
                @click="copyCode">
                <Icon :name="copied ? 'fas fa-check' : 'fas fa-copy'" />
                {{ copied ? 'Copied!' : 'Copy' }}
            </button>
        </div>
        <pre class="CodeBlock-pre"><code class="CodeBlock-code" :class="`language-${language}`" v-html="highlightedCode" /></pre>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: 'javascript'
    },
    showHeader: {
        type: Boolean,
        default: true
    }
});

const copied = ref(false);

// Simple syntax highlighting for common languages
const highlightedCode = computed(() => {
    let code = props.code;

    // Escape HTML
    code = code.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Apply basic syntax highlighting based on language
    switch (props.language) {
        case 'javascript':
        case 'js':
            return highlightJavaScript(code);
        case 'vue':
            return highlightVue(code);
        case 'json':
            return highlightJson(code);
        case 'bash':
        case 'shell':
            return highlightBash(code);
        case 'css':
            return highlightCss(code);
        default:
            return code;
    }
});

function highlightJavaScript(code) {
    return code
        // Keywords
        .replace(/\b(import|export|from|const|let|var|function|class|extends|return|if|else|for|while|do|try|catch|finally|async|await|new|this|super|static|default)\b/g, '<span class="keyword">$1</span>')
        // Strings
        .replace(/(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>')
        // Comments
        .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
        .replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
}

function highlightVue(code) {
    return code
        // Vue template tags
        .replace(/(&lt;\/?)([\w-]+)([^&]*?)(&gt;)/g, '<span class="tag">$1<span class="tag-name">$2</span>$3$4</span>')
        // Vue directives
        .replace(/\s(v-[\w-]+|@[\w-]+|:[\w-]+)=/g, ' <span class="directive">$1</span>=')
        // Apply JS highlighting for script sections
        .replace(/(&lt;script[^&]*?&gt;)([\s\S]*?)(&lt;\/script&gt;)/g, (match, open, content, close) => {
            return open + highlightJavaScript(content) + close;
        });
}

function highlightJson(code) {
    return code
        // Keys
        .replace(/("[\w-]+")\s*:/g, '<span class="key">$1</span>:')
        // Strings
        .replace(/:\s*(".*?")/g, ': <span class="string">$1</span>')
        // Numbers
        .replace(/:\s*(\d+\.?\d*)/g, ': <span class="number">$1</span>')
        // Booleans and null
        .replace(/:\s*(true|false|null)/g, ': <span class="boolean">$1</span>');
}

function highlightBash(code) {
    return code
        // Commands
        .replace(/^(\w+)/gm, '<span class="command">$1</span>')
        // Flags
        .replace(/\s(-{1,2}[\w-]+)/g, ' <span class="flag">$1</span>')
        // Comments
        .replace(/#.*$/gm, '<span class="comment">$&</span>');
}

function highlightCss(code) {
    return code
        // Selectors
        .replace(/^([^{]+){/gm, '<span class="selector">$1</span>{')
        // Properties
        .replace(/(\w+(-\w+)*)\s*:/g, '<span class="property">$1</span>:')
        // Values
        .replace(/:\s*([^;]+);/g, ': <span class="value">$1</span>;')
        // Comments
        .replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
}

async function copyCode() {
    try {
        await navigator.clipboard.writeText(props.code);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy code:', err);
    }
}
</script>

<style scoped>
.CodeBlock {
    background: var(--color-base-1);
    border: 1px solid var(--color-base-2);
    border-radius: 8px;
    overflow: hidden;
    margin: var(--sp3) 0;
}

.CodeBlock-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--sp1) var(--sp2);
    background: var(--color-base-2);
    border-bottom: 1px solid var(--color-base-3);
}

.CodeBlock-language {
    font-size: var(--font-size-small);
    color: var(--color-text-1);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
}

.CodeBlock-copy {
    display: flex;
    align-items: center;
    gap: var(--sp1);
    background: none;
    border: none;
    color: var(--color-text-1);
    font-size: var(--font-size-small);
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    transition: all 0.2s;
}

.CodeBlock-copy:hover {
    color: var(--color-text-0);
    background: var(--color-base-3);
}

.CodeBlock-pre {
    margin: 0;
    padding: var(--sp3);
    overflow-x: auto;
    background: var(--color-base-1);
}

.CodeBlock-code {
    font-family: var(--font-monospace);
    font-size: var(--font-size-small);
    line-height: 1.5;
    color: var(--color-text-0);
}

/* Syntax highlighting styles */
.CodeBlock-code :deep(.keyword) {
    color: var(--color-primary-2);
    font-weight: var(--font-weight-bold);
}

.CodeBlock-code :deep(.string) {
    color: var(--color-secondary-2);
}

.CodeBlock-code :deep(.comment) {
    color: var(--color-text-2);
    font-style: italic;
}

.CodeBlock-code :deep(.tag) {
    color: var(--color-primary-3);
}

.CodeBlock-code :deep(.tag-name) {
    color: var(--color-primary-2);
    font-weight: var(--font-weight-bold);
}

.CodeBlock-code :deep(.directive) {
    color: var(--color-secondary-3);
    font-weight: var(--font-weight-bold);
}

.CodeBlock-code :deep(.key) {
    color: var(--color-primary-2);
}

.CodeBlock-code :deep(.number) {
    color: var(--color-secondary-3);
}

.CodeBlock-code :deep(.boolean) {
    color: var(--color-primary-3);
    font-weight: var(--font-weight-bold);
}

.CodeBlock-code :deep(.command) {
    color: var(--color-primary-2);
    font-weight: var(--font-weight-bold);
}

.CodeBlock-code :deep(.flag) {
    color: var(--color-secondary-2);
}

.CodeBlock-code :deep(.selector) {
    color: var(--color-primary-2);
}

.CodeBlock-code :deep(.property) {
    color: var(--color-secondary-2);
}

.CodeBlock-code :deep(.value) {
    color: var(--color-text-0);
}
</style>
