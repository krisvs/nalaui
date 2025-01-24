<template>
    <section
        class="Hero"
        :style="{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }">
        <div class="Hero-overlay" />

        <div class="Hero-content">
            <BlockTitleText
                :title="title"
                :text="text"
                :kind="kind"
                align="center" />
        </div>

        <img
            v-if="overlayImg"
            class="Hero-overlayImg"
            :src="overlayImg"
            :alt="overlayImgAlt" />
    </section>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        text: { type: String, required: false },
        backgroundImg: { type: String, required: true },
        overlayImg: { type: String, required: false },
        overlayImgAlt: { type: String, required: false },
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
    min-height: 100vh;
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

.Hero-overlayImg {
    position: absolute;
    bottom: var(--sp3);
    left: 50%;
    transform: translateX(-50%);
    max-width: 200px;
    z-index: 2;
}
</style>
