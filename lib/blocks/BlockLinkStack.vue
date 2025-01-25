<template>
    <div
        class="LinkStack"
        :class="[
            `LinkStack-align--${align}`
        ]">
        <Link
            v-for="link, idx in links"
            :key="idx"
            :kindHover="kindHover"
            :href="link.href"
            :label="link.label" />
    </div>
</template>

<script>
export default {
    props: {
        links: { type: Array, required: true },
        align: {
            type: String,
            default: 'start',
            validator: value => ['start', 'center', 'end'].includes(value)
        }
    }
};
</script>

<style scoped>
/* Default state (desktop) */
.LinkStack {
    display: flex;
    flex-direction: column;
    gap: var(--sp2);
    width: 100%;
}

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

/* Mobile state */
@media screen and (max-width: 420px) {
    .LinkStack {
        flex-direction: row !important;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--sp3);
    }

    .LinkStack-align--start,
    .LinkStack-align--center,
    .LinkStack-align--end {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}
</style>
