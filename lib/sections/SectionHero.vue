<template>
    <section
        class="Hero"
        :style="{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: height
        }">
        <div class="Hero-overlay" />

        <div class="Hero-content">
            <BlockTitleText
                v-if="title || text"
                :title="title"
                :text="text"
                :kind="kind"
                align="center" />
        </div>

        <div
            v-if="imgSrc"
            class="Hero-overlayImgWrapper"
            :class="`Hero-overlayImgWrapper--${align}`">
            <Image
                class="Hero-overlayImg"
                :src="imgSrc"
                :alt="imgAlt"
                :size="imgSize"
                :align="align"
                :hoverPop="true" />
        </div>
    </section>
</template>

<script>

export default {
    props: {
        title: { type: String, required: false },
        text: { type: String, required: false, default: '' },
        backgroundImg: { type: String, required: true },
        imgSrc: { type: String, required: false },
        imgAlt: { type: String, required: false },
        height: {
            type: String,
            default: '100vh',
            validator: value => /^[0-9]+(px|vh|rem|em|%)$/.test(value)
        },
        align: {
            type: String,
            default: 'center',
            validator: value => ['start', 'center', 'end'].includes(value)
        },
        kind: {
            type: String,
            default: 'primary',
            validator: value => ['default', 'primary', 'secondary', 'tertiary'].includes(value)
        }
    }
};
</script>

<style scoped>
.Hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.Hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
    padding: var(--sp3);
}

.Hero-overlayImgWrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 2;
    padding: 0 var(--sp3);
}

.Hero-overlayImgWrapper--start {
    justify-content: flex-start;
}

.Hero-overlayImgWrapper--center {
    justify-content: center;
}

.Hero-overlayImgWrapper--end {
    justify-content: flex-end;
}

</style>
