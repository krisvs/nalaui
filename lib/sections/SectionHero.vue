<template>
    <section
        class="Hero"
        :style="{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: height
        }">
        <div
            class="Hero-overlay"
            :style="{
                opacity: opacity
            }" />

        <div class="Hero-content">
            <h1
                class="Headline"
                :class="`Headline-align--${alignText}`">
                {{ title }}
            </h1>
        </div>

        <div
            v-if="imgSrc"
            class="Hero-overlayImgWrapper"
            :class="`Hero-overlayImgWrapper--${alignImg}`">
            <Image
                class="Hero-overlayImg"
                :src="imgSrc"
                :alt="imgAlt"
                :size="imgSize"
                :align="alignImg"
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
        opacity: {
            type: Number,
            default: 0.4,
            validator: value => value >= 0 && value <= 1
        },
        height: {
            type: String,
            default: '100vh',
            validator: value => /^[0-9]+(px|vh|rem|em|%)$/.test(value)
        },
        alignImg: { type: String,
            default: 'center',
            validator: value => ['start', 'center', 'end'].includes(value)
        },
        alignText: {
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
    z-index: 1;
    background-color: rgb(255, 255, 255);
}

.Hero-content {
    z-index: 3;
    width: 100%;
    height: 100%;
}

.Headline {
    font-size: var(--font-size-headline);
    font-weight: var(--font-weight-boldest);
    color: var(--color-default);
    padding: var(--sp2);
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

.Hero-overlayImgWrapper--start { justify-content: flex-start; }
.Hero-overlayImgWrapper--center { justify-content: center; }
.Hero-overlayImgWrapper--end { justify-content: flex-end; }

.Headline-align--start { text-align: start; }
.Headline-align--center {
    text-align: center;
    margin-top: var(--sp24);
}
.Headline-align--end { text-align: end; }
</style>
