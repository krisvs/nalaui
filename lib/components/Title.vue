<template>
    <h2
        :class="[
            `Title-align--${align}`,
            `Title-kind--${kind}`,
        ]">
        {{ title }}
    </h2>
</template>

<script>
export default {

    props: {
        title: { type: String, required: true },
        kind: {
            type: String,
            default: 'default',
            validator: value => ['default', 'primary', 'secondary', 'tertiary'].includes(value)
        },
        align: {
            type: String,
            default: 'start',
            validator: value => ['start', 'center', 'end'].includes(value)
        },
    }

};
</script>

<style scoped>
.Title-align--start { text-align: start; }
.Title-align--center { text-align: center; }
.Title-align--end { text-align: end; }

.Title-kind--default { color: var(--color-default); }
.Title-kind--primary { color: var(--color-primary); }
.Title-kind--secondary { color: var(--color-secondary); }
.Title-kind--tertiary { color: var(--color-tertiary); }
</style>
