<template>
    <section class="FooterLinks">

        <HGroup
            justify="center">

            <BlockLinkStack
                :links="pageLinks"
                :align="align"
                :kindHover="kindHover" />

            <Image
                class="FooterImg"
                :src="imgSrc"
                :alt="imgAlt"
                :size="imgSize"
                :align="align" />

            <BlockLinkStack
                :links="legalLinks"
                :align="align"
                :kindHover="kindHover" />
        </HGroup>

    </section>

</template>

<script>

export default {
    props: {
        imgSrc: { type: String, required: true },
        imgAlt: { type: String, required: true },
        imgSize: { type: String, required: true },
        align: { type: String, required: true },
        pageLinks: { type: Array, required: true },
        legalLinks: { type: Array, required: true },
        kindHover: { type: String, required: false }
    }
};

</script>

<style scoped>

.FooterImg {
    margin: 0 var(--sp8);
}
</style>
