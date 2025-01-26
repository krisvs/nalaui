<template>
    <div
        :class="[
            'BlockImageText',
            { 'Block-reverse': imagePosition === 'right' }
        ]">
        <Image
            class="Image"
            :src="imgSrc"
            :alt="imgAlt"
            :size="imgSize"
            :hoverPop="false" />

        <BlockTitleContent
            class="Text"
            :title="title"
            :subtitle="subtitle"
            :text="text"
            :kind="kind"
            :align="align" />
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: { type: String, required: true },
        imgAlt: { type: String, required: false },
        imgSize: { type: String, required: true },
        alignImg: { type: String, required: false },
        title: { type: String, required: true },
        subtitle: { type: String, required: false },
        text: { type: String, required: true },
        kind: { type: String, required: true },
        imagePosition: {
            type: String,
            default: 'left',
            validator: value => ['left', 'right'].includes(value)
        }
    },
};
</script>

<style scoped>
.BlockImageText {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.Block-reverse {
    flex-direction: row-reverse;
}

.Text, .Image {
    margin: var(--sp2);
}

.Image {
    border-radius: var(--sp1);
}
</style>
