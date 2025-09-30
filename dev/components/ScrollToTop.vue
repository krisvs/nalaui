<template>
    <transition name="fade">
        <button
            v-show="isVisible"
            class="ScrollToTop"
            @click="scrollToTop"
            aria-label="Scroll to top">
            <Icon name="fas fa-arrow-up" />
        </button>
    </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
    isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.ScrollToTop {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, var(--color-primary-2), var(--color-secondary-2));
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    transition: transform 0.2s, box-shadow 0.2s;
}

.ScrollToTop:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.ScrollToTop:active {
    transform: translateY(-1px);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .ScrollToTop {
        bottom: 1.5rem;
        right: 1.5rem;
        width: 45px;
        height: 45px;
        font-size: 16px;
    }
}
</style>