<template>
    <section class="Section">
        <div class="Content">
            <BlockImageText
                v-for="(item, index) in content"
                :key="index"
                :title="item.title"
                :subtitle="item.subtitle"
                :text="item.text"
                :imgSrc="item.imgSrc"
                :imgAlt="item.imgAlt"
                s
                :imgSize="imgSize"
                :alignImg="item.alignImg"
                :imagePosition="index % 2 === 0 ? 'left' : 'right'" />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        content: { type: Array, required: true },
        imgSize: { type: String, required: true },
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
