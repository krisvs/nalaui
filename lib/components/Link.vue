<template>
    <a :href="href" class="Link">{{ label }}</a>

</template>

<script>

export default {
    props: {
        href: { type: String, required: true },
        label: { type: String, required: true },
    }
};

</script>

<style>

.Link:hover {
    color: var(--color-text-subtle);
    text-decoration: underline;
}

</style>
