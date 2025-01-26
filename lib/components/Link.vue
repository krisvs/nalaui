<template>
    <a
        class="Link"
        :class="{
            [`Link-kindHover--${kindHover}`]: label
        }"
        :href="href"
        :target="newTab ? '_blank' : '_self'"
        :rel="newTab ? 'noopener noreferrer' : undefined">

        <Icon
            class="Icon"
            :icon="icon"
            :size="iconSize"
            :kind="iconKind" />

        <div v-if="label">
            {{ label }}
        </div>

    </a>
</template>

<script>
export default {
    props: {
        href: { type: String, required: true },
        label: { type: String, required: false },
        icon: { type: String, required: false },
        iconSize: { type: String, required: false },
        iconKind: { type: String, required: false },
        kindHover: {
            type: String,
            default: 'default',
            validator: value => ['default', 'primary', 'secondary', 'tertiary'].includes(value)
        },
        newTab: { type: Boolean, default: false }
    }
};
</script>

<style>
.Link:hover {
    color: var(--color-text-subtle);
    text-decoration: underline;
}

.Icon {
    padding-right: var(--sp0-5);
}

.Link-kindHover--default:hover { color: var(--color-text-subtle); }
.Link-kindHover--primary:hover { color: var(--color-primary); }
.Link-kindHover--secondary:hover { color: var(--color-secondary); }
.Link-kindHover--tertiary:hover { color: var(--color-tertiary); }
</style>
