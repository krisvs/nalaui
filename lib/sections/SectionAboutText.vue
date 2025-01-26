<template>
    <section
        class="Section"
        :class="[
            `Background--${background}`,
        ]">
        <BlockTitleContent
            class="Content"
            :title="title"
            :text="text"
            :kind="kind"
            :align="align" />
    </section>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        text: { type: String, required: true },
        kind: { type: String, required: false },
        background: {
            type: String,
            default: 'default',
            validator: value => ['default', 'primary', 'secondary', 'tertiary'].includes(value)
        },
        align: { type: String, required: false },
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

.Background--default { backgrounsd-color: var(--color-default-0); }
.Background--primary { background-color: var(--color-primary-0); }
.Background--secondary { background-color: var(--color-secondary-0); }
.Background--tertiary { background-color: var(--color-tertiary-0); }

</style>
