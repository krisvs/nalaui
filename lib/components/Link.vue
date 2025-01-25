<template>
    <a
        class="Link"
        :class="[
            `Link-kindHover--${kindHover}`,
        ]"
        :href="href">
        {{ label }}
    </a>
</template>

<script>
export default {
    props: {
        href: { type: String, required: true },
        label: { type: String, required: true },
        kindHover: {
            type: String,
            default: 'default',
            validator: value => ['default', 'primary', 'secondary', 'tertiary'].includes(value)
        }
    }
};
</script>

<style>
.Link:hover {
    color: var(--color-text-subtle);
    text-decoration: underline;
}

.Link-kindHover--default:hover { color: var(--color-text-subtle); }
.Link-kindHover--primary:hover { color: var(--color-primary); }
.Link-kindHover--secondary:hover { color: var(--color-secondary); }
.Link-kindHover--tertiary:hover { color: var(--color-tertiary); }
</style>
