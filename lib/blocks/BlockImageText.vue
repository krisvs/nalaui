<template>
    <HGroup>
        <Image
            :src="imgSrc"
            :alt="imgAlt"
            :size="imgSize"
            :hoverPop="true" />
        <BlockTitleContent
            :title="title"
            :text="text"
            :kind="kind"
            :align="align" />
    </HGroup>

</template>

<script>
export default {
    props: {
        imgSrc: { type: String, required: true },
        imgAlt: { type: String, required: true },
        imgSize: { type: String, required: true },
        alignImg: { type: String, required: true },
        text: { type: String, required: true },
        kind: { type: String, required: true },
    },
};
</script>
