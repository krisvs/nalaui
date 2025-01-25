<template>
    <VGroup
        class="LinkStack"
        :class="[
            `LinkStack-align--${align}`,
        ]">
        <Link
            v-for="link, idx in links"
            :key="idx"
            :kindHover="kindHover"
            :href="link.href"
            :label="link.label" />
    </VGroup>
</template>

<script>
export default {
    props: {
        links: { type: Array, required: true },
        kindHover: { type: String, required: false },
        align: {
            type: String,
            default: 'start',
            validator: value => ['start', 'center', 'end'].includes(value)
        }
    }
};
</script>

<style scoped>
.LinkStack-align--start {
    align-items: flex-start;
    text-align: start;
}

.LinkStack-align--center {
    align-items: center;
    text-align: center;
}

.LinkStack-align--end {
    align-items: flex-end;
    text-align: end;
}
</style>
