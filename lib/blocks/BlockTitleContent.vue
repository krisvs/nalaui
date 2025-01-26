<template>
    <VGroup
        justify="space-around"
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
            :title="btnLabel"
            :label="btnLabel"
            :kind="btnKind"
            :link="btnLink" />
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
};
</script>
