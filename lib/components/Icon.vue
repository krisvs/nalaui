<template>
    <i
        class="Icon"
        :class="[
            `Icon--${kind}`,
            icon,
            size ? `fa-${size}` : ''
        ]" />
</template>

<script>
export default {
    props: {
        icon: { type: String, required: true },
        kind: { type: String, required: false },
        size: { type: String, required: false }
    },

};
</script>

<style scoped>

.Icon--default { color: var(--color-text-default); }
.Icon--primary { color: var(--color-primary-4); }
.Icon--secondary { color: var(--color-secondary-4); }
.Icon--tertiary { color: var(--color-tertiary-4); }
.Icon--success { color: var(--color-success-4); }
.Icon--warning { color: var(--color-warning-4); }
.Icon--danger { color: var(--color-danger-4); }

</style>
