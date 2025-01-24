<template>
    <img
        v-if="src"
        class="Image"
        :class="[
            `Image-size-${size}`,
            `Image-align--${align}`
        ]"
        :src="src"
        :alt="alt" />

</template>

<script>
export default {
    props: {
        src: { type: String, required: true },
        alt: { type: String, required: true },
        size: {
            type: String,
            required: false,
            default: '',
            validator: value => ['small', 'smaller', 'large', 'larger'].includes(value)
        },
        align: {
            type: String,
            default: 'start',
            validator: value => ['start', 'center', 'end'].includes(value)
        }
    },
};
</script>

<style scoped>
.Image {
    width: var(--image-size);
}

.Image-size-small { width: var(--image-size-small); }
.Image-size-smaller { width: var(--image-size-smaller); }
.Image-size-large { width: var(--image-size-large); }
.Image-size-larger { width: var(--image-size-larger); }

.Image-align--start {
    margin-right: auto;
    margin-left: 0;
    display: block;
}
.Image-align--center {
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.Image-align--end {
    margin-left: auto;
    margin-right: 0;
    display: block;
}
</style>
