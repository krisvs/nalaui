<template>
    <img
        v-if="src"
        class="Image"
        :class="[
            `Image-size-${size}`,
            `Image-align--${align}`,
            {
                'Image--hover': hover,
                'Image--flip': flip
            }
        ]"
        :src="src"
        :alt="alt"
        :hoverPop="hoverPop" />

</template>

<script>
export default {
    props: {
        src: { type: String, required: true },
        alt: { type: String, required: true },
        size: {
            type: String,
            default: 'medium',
            validator: value => ['icon', 'smallest', 'smaller', 'small', 'medium', 'large', 'larger', 'largest'].includes(value)
        },
        align: {
            type: String,
            default: 'start',
            validator: value => ['start', 'center', 'end'].includes(value)
        },
        hover: { type: Boolean, default: false },
        flip: { type: Boolean, default: false },
        hoverPop: { type: Boolean, required: false, default: false }
    },
};
</script>

<style scoped>
.Image-size-medium { width: var(--image-size); }

.Image-size-icon { width: var(--image-size-icon); }
.Image-size-smallest { width: var(--image-size-smallest); }
.Image-size-smaller { width: var(--image-size-smaller); }
.Image-size-small { width: var(--image-size-small); }
.Image-size-large { width: var(--image-size-large); }
.Image-size-larger { width: var(--image-size-larger); }
.Image-size-largest { width: var(--image-size-largest); }
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
.Image-hoverPop:hover {
    transform: scale(var(--image-hover-scale));
}

.Image {
    transition: transform 0.2s ease-in-out;
}

.Image--flip {
    transform: scaleX(-1);
}
</style>
