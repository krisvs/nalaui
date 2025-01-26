<template>
    <section class="SectionFooterEnd">
        <HGroup
            justify="space-around"
            class="FooterEnd">
            <div class="Column Column-Image first-image">
                <Image
                    :src="imgSrc"
                    :alt="imgAlt"
                    :size="imgSize"
                    :align="alignImg" />
            </div>

            <div class="Column Column-Links">
                <HGroup gap="2" class="LinksGroup">
                    <Link
                        v-for="(link, idx) in socialLinks"
                        :key="idx"
                        :href="link.href"
                        :icon="link.icon"
                        :iconSize="link.iconSize"
                        :iconKind="link.iconKind"
                        :newTab="true" />
                </HGroup>
            </div>

            <div class="Column Column-Image">
                <Image
                    :src="imgSrc"
                    :alt="imgAlt"
                    :size="imgSize"
                    :align="alignImg"
                    :flip="true" />
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
        alignImg: { type: String, required: true },
        socialLinks: { type: Array, required: true },
    }
};
</script>

<style scoped>
.SectionFooterEnd {
    padding-top: var(--sp2);
    padding-bottom: 0;
}

.FooterEnd {
    --column-Links: 0 0 auto;
    --column-Image: 0 0 128px;
    display: flex;
    flex-wrap: wrap;
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

@media (max-width: 640px) {
    .FooterEnd {
        flex-direction: column;
        align-items: center;
    }

    .first-image {
        display: none; /* Hide the first image on mobile */
    }

    .LinksGroup {
        order: -1; /* Move links to the top */
        margin-bottom: var(--sp2);
    }

    .FooterLinks-layout {
        --column-Links: 1 1 auto;
    }
}
</style>
