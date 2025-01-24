<template>
    <VGroup class="LinkStack">
        <Link
            v-for="link, idx in links"
            :key="idx"
            :href="link.href"
            :label="link.label" />
    </VGroup>
</template>

<script>

export default {
    props: {
        links: { type: Array, required: true },
    }
};

</script>
