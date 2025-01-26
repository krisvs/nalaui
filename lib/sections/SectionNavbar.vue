<template>
    <section class="Section">
        <HGroup class="Navbar">
            <Image
                :src="imgSrc"
                :alt="imgAlt"
                :size="imgSize"
                :align="align" />

            <Sizer />
            <BlockLinks
                :links="links"
                direction="row" />

            <Sizer />
            <Btn
                label="Contact"
                kind="secondary" />

        </HGroup>
    </section>
</template>

<script>
export default {
    props: {
        imgSrc: { type: String, required: true },
        imgAlt: { type: String, required: true },
        imgSize: { type: String, required: false },
        align: { type: String, required: false },
        links: { type: Array, required: true }
    }
};
</script>

<style scoped>
.Section {
    padding: var(--sp1);
}
</style>
