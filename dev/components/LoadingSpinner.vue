<template>
    <div class="LoadingSpinner" :class="{ [`LoadingSpinner--${size}`]: size }">
        <div class="LoadingSpinner-circle">
            <div class="LoadingSpinner-path" />
        </div>
        <div v-if="text" class="LoadingSpinner-text">{{ text }}</div>
    </div>
</template>

<script setup>
defineProps({
    size: {
        type: String,
        default: 'medium', // small, medium, large
        validator: value => ['small', 'medium', 'large'].includes(value)
    },
    text: {
        type: String,
        default: ''
    }
});
</script>

<style scoped>
.LoadingSpinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sp2);
}

.LoadingSpinner-circle {
    border-radius: 50%;
    background: conic-gradient(
        var(--color-primary-2) 0deg,
        var(--color-secondary-2) 90deg,
        var(--color-primary-2) 180deg,
        var(--color-secondary-2) 270deg,
        var(--color-primary-2) 360deg
    );
    animation: spin 1s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
}

.LoadingSpinner-path {
    background: var(--color-base-0);
    border-radius: 50%;
}

.LoadingSpinner--small .LoadingSpinner-circle {
    width: 24px;
    height: 24px;
}

.LoadingSpinner--small .LoadingSpinner-path {
    width: 18px;
    height: 18px;
}

.LoadingSpinner--medium .LoadingSpinner-circle {
    width: 32px;
    height: 32px;
}

.LoadingSpinner--medium .LoadingSpinner-path {
    width: 24px;
    height: 24px;
}

.LoadingSpinner--large .LoadingSpinner-circle {
    width: 48px;
    height: 48px;
}

.LoadingSpinner--large .LoadingSpinner-path {
    width: 36px;
    height: 36px;
}

.LoadingSpinner-text {
    color: var(--color-text-1);
    font-size: var(--font-size-small);
    text-align: center;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
