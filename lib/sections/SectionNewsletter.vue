<template>
    <section
        class="Newsletter"
        :class="[
            `Background--${background}`,
        ]">
        <VGroup :align="align">

            <img
                v-if="imgSrc"
                class="Image"
                :src="imgSrc"
                :alt="imgAlt" />

            <BlockTitleText
                :title="title"
                :text="text"
                :kind="kind"
                :align="align" />

            <InputText
                placeholder="Enter your email"
                icon="fas fa-search" />

        </VGroup>
    </section>

</template>

<script>

export default {
    props: {
        title: { type: String, required: true },
        text: { type: String, required: true },
        imgSrc: { type: String, required: false },
        imgAlt: { type: String, required: false },
        background: {
            type: String,
            default: 'default',
            validator: value => ['default', 'primary', 'secondary', 'tertiary'].includes(value)
        },
    },
};
</script>

<style scoped>
.Newsletter {
    padding: var(--sp3);
}

.Background--default { background-color: var(--color-default-0); }
.Background--primary { background-color: var(--color-primary-0); }
.Background--secondary { background-color: var(--color-secondary-0); }
.Background--tertiary { background-color: var(--color-tertiary-0); }

.Image {
    width: var(--image-size-large);
    height: auto;
}
</style>
