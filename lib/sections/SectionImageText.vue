<template>
    <section class="Section">
        <div class="Content">
            <Title
                :title="title"
                :kind="kind"
                :align="alignTitle" />
            <BlockImageText
                v-for="(item, index) in content"
                :key="index"
                :title="item.title"
                :subtitle="item.subtitle"
                :text="item.text"
                :imgSrc="item.imgSrc"
                :imgAlt="item.imgAlt"
                :btnLink="item.btnLink"
                :imgSize="imgSize"
                :btnLabel="btnLabel"
                :align="align"
                :kind="kind"
                :imagePosition="index % 2 === 0 ? 'left' : 'right'" />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        content: { type: Array, required: true },
        imgSize: { type: String, required: true },
        align: { type: String, required: true },
        alignTitle: { type: String, required: true },
        btnLabel: { type: String, required: false },
        kind: { type: String, required: true },
    },
};
</script>

<style scoped>
.Section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--sp3);
}

.Content {
    max-width: var(--content-width);
}

</style>
