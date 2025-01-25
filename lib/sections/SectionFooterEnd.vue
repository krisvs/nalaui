<template>
    <HGroup>

        <Image
            :src="imgSrc"
            :alt="imgAlt"
            :size="imgSize"
            :align="alignImg"
            :hoverPop="true" />

    </HGroup>
</template>

<script>
export default {
    props: {
        socialLinks: { type: Array, required: true },
    }
};
</script>
