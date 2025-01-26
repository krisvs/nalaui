<template>
    <div
        class="LinkStack"
        :class="[
            `LinkStack-align--${align}`,
            `LinkStack-direction--${direction}`
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
        direction: {
            type: String,
            default: 'column',
            validator: value => ['column', 'row'].includes(value)
        },
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
    gap: var(--sp2);
    width: 100%;
}

.LinkStack-direction--row {  flex-direction: row; }
.LinkStack-direction--column { flex-direction: column; }

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
