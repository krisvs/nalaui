<template>
    <VGroup
        :align="align">
        <Title
            :title="title"
            :kind="kind"
            :align="align" />
        <Subtitle
            v-if="subtitle"
            :subtitle="subtitle"
            :align="align" />
        <Text
            :text="text"
            :align="align" />
        <Btn
            v-if="btnLabel"
            class="Button"
            :title="btnLabel"
            :label="btnLabel"
            :kind="kind"
            @click="navigateToLink" />
    </VGroup>

</template>

<script>
export default {

    props: {
        title: { type: String, required: true },
        subtitle: { type: String, required: false },
        text: { type: String, required: true },
        kind: { type: String, required: false },
        align: { type: String, required: false },
        btnLabel: { type: String, required: false },
        btnKind: { type: String, required: false },
        btnLink: { type: String, required: false },
    },

    methods: {
        navigateToLink() {
            if (this.btnLink) {
                window.location.href = this.btnLink;
            }
        }
    }

};
</script>

<style scoped>
.VGroup > * {
    margin-bottom: var(--sp1);
}

.Title, .Subtitle, .Text {
    line-height: 1.2;
}

.Button {
    padding-top: var(--sp2);
}
</style>
