<template>
    <div
        :class="[
            `Text-align--${align}`,
            `Text-kind--${kind}`,
        ]">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text: { type: String, required: true },
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
    },
};
</script>

<style scoped>
.Text-align--start { text-align: start; }
.Text-align--center { text-align: center; }
.Text-align--end { text-align: end; }

.Text-kind--default { color: var(--color-default); }
.Text-kind--primary { color: var(--color-primary); }
.Text-kind--secondary { color: var(--color-secondary); }
.Text-kind--tertiary { color: var(--color-tertiary); }
</style>
