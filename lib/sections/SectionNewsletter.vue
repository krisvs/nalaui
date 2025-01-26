<template>
    <section
        class="Section"
        :class="[
            `Background--${background}`,
        ]">
        <VGroup
            class="Content"
            :align="align">
            <Image
                v-if="imgSrc"
                :src="imgSrc"
                :alt="imgAlt"
                :size="imgSize"
                :align="align" />

            <BlockTitleContent
                :title="title"
                :text="text"
                :kind="kind"
                :align="align" />

            <InputText
                v-model="email"
                class="InputText"

                placeholder="Enter your email"
                icon="fas fa-envelope" />

            <Btn
                label="Subscribe"
                kind="primary"
                @click="() => onSubscribe(email)" />

        </VGroup>
    </section>

</template>

<script>

export default {
    props: {
        title: { type: String, required: true },
        text: { type: String, required: true },
        kind: { type: String, required: false, default: 'primary' },
        imgSrc: { type: String, required: false },
        imgAlt: { type: String, required: false },
        imgSize: { type: String, required: false },
        align: {
            type: String,
            default: 'start',
            validator: value => ['start', 'center', 'end'].includes(value)
        },
        background: {
            type: String,
            default: 'default',
            validator: value => ['default', 'primary', 'secondary', 'tertiary'].includes(value)
        },
        onSubscribe: { type: Function, default: () => {} }
    },

    data() {
        return {
            email: ''
        };
    }
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

.Background--default { background-color: var(--color-default-0); }
.Background--primary { background-color: var(--color-primary-0); }
.Background--secondary { background-color: var(--color-secondary-0); }
.Background--tertiary { background-color: var(--color-tertiary-0); }

.InputText {
    padding: var(--sp2);
}
</style>
