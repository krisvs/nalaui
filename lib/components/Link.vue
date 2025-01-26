<template>
    <a
        class="Link"
        :class="{
            [`Link-kindHover--${kindHover}`]: label
        }"
        :href="href"
        :target="newTab ? '_blank' : '_self'"
        :rel="newTab ? 'noopener noreferrer' : undefined">

        <div v-if="label">
            {{ label }}
        </div>

        <Image
            :src="imgSrc"
            :alt="imgAlt"
            size="icon"
            align="center" />
    </a>
</template>

<script>
export default {
    props: {
        href: { type: String, required: true },
        label: { type: String, required: false },
        imgSrc: { type: String, required: false },
        imgAlt: { type: String, required: false },
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

.Link-kindHover--default:hover { color: var(--color-text-subtle); }
.Link-kindHover--primary:hover { color: var(--color-primary); }
.Link-kindHover--secondary:hover { color: var(--color-secondary); }
.Link-kindHover--tertiary:hover { color: var(--color-tertiary); }
</style>
