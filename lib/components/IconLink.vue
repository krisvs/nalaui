<template>
    <a
        class="IconLink"
        :href="href"
        :target="newTab ? '_blank' : '_self'"
        :rel="newTab ? 'noopener noreferrer' : ''"
        :title="title">
        <i :class="icon" />
    </a>
</template>

<script>
export default {
    props: {
        href: { type: String, required: true },
        newTab: { type: Boolean, default: true },
        icon: { type: String, required: true },
        title: { type: String, required: true },
    },
};
</script>

<style scoped>
.IconLink {
    transition: transform 0.3s ease;
}

.IconLink:hover {
    transform: scale(1.15);
}
</style>
