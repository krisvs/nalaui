<template>
    <i
        class="Icon"
        :class="[
            `Icon--${size}`,
            icon
        ]" />
</template>

<script>
export default {
    props: {
        icon: { type: String, required: true },
        size: {
            type: String,
            default: 'medium',
            validator: value => ['small', 'medium', 'large'].includes(value)
        }
    },

};
</script>

<style scoped>
.Icon {
    font-size: var(--fs-2);
}

.Icon--small {
    font-size: var(--fs-1);
}

.Icon--large {
    font-size: var(--fs-3);
}

</style>
