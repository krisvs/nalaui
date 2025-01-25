<template>
    <section class="FooterLinks">
        <HGroup
            justify="center"
            wrap="true"
            class="FooterLinks-layout">
            <div class="Column Column-Links">
                <BlockLinkStack
                    :links="pageLinks"
                    :align="align"
                    :kindHover="kindHover" />
            </div>

            <div class="Column Column-Image">
                <Image
                    class="FooterImg"
                    :src="imgSrc"
                    :alt="imgAlt"
                    :size="imgSize"
                    :align="align"
                    :hoverPop="true" />
            </div>

            <div class="Column Column-Links">
                <BlockLinkStack
                    :links="legalLinks"
                    :align="align"
                    :kindHover="kindHover" />
            </div>
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

.FooterLinks-layout {
    --column-Links: 0 0 128px;
    --column-Image: 0 0 auto;
}

.FooterLinks-layout:deep(.Column) {
    min-width: 0;
}

.FooterLinks-layout:deep(.Column-Links) {
    flex: var(--column-Links);
}

.FooterLinks-layout:deep(.Column-Image) {
    flex: var(--column-Image);
}

.FooterImg {
    margin: 0 var(--sp8);
}

@media (max-width: 640px) {
    .FooterLinks-layout {
        --column-Links: 1 1 auto;
    }
}
</style>
