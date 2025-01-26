<template>
    <div
        class="BlockLinks"
        :class="[
            `BlockLinks-align--${align}`,
            `BlockLinks-direction--${direction}`
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
        kindHover: { type: String, required: false },
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
.BlockLinks {
    display: flex;
    width: 100%;
}

.BlockLinks-direction--row {  flex-direction: row; }
.BlockLinks-direction--column { flex-direction: column; }

.BlockLinks-align--start {
    align-items: flex-start;
    text-align: start;
}

.BlockLinks-align--center {
    align-items: center;
    text-align: center;
}

.BlockLinks-align--end {
    align-items: flex-end;
    text-align: end;
}

/* Mobile state */
@media screen and (max-width: 420px) {
    .BlockLinks {
        flex-direction: row !important;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--sp3);
    }

    .BlockLinks-align--start,
    .BlockLinks-align--center,
    .BlockLinks-align--end {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}
</style>
