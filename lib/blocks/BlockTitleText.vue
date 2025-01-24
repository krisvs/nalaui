<template>
    <VGroup
        :align="align">
        <Title
            :title="title"
            :kind="kind"
            :align="align" />
        <Text
            :text="text"
            :align="align" />
    </VGroup>

</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        text: { type: String, required: true },
        kind: { type: String, required: false },
        align: { type: String, required: false },
    },
};
</script>
