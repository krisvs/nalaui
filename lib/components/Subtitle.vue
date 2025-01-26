<template>
    <h4
        :class="[
            `Subtitle-align--${align}`,
            `Subtitle-kind--${kind}`,
        ]">
        {{ subtitle }}
    </h4>
</template>

<script>
export default {

    props: {
        subtitle: { type: String, required: true },
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
.Subtitle-align--start { text-align: start; }
.Subtitle-align--center { text-align: center; }
.Subtitle-align--end { text-align: end; }

.Subtitle-kind--default { color: var(--color-default); }
.Subtitle-kind--primary { color: var(--color-primary); }
.Subtitle-kind--secondary { color: var(--color-secondary); }
.Subtitle-kind--tertiary { color: var(--color-tertiary); }
</style>
