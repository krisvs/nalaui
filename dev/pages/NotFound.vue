<template>
    <div class="NotFound">
        <div class="NotFound-content">
            <div class="NotFound-icon">
                <Icon name="fas fa-search" />
            </div>
            <h1 class="NotFound-title">404</h1>
            <h2 class="NotFound-subtitle">Page Not Found</h2>
            <p class="NotFound-description">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <div class="NotFound-actions">
                <router-link to="/" class="NotFound-btn NotFound-btn--primary">
                    <Icon name="fas fa-home" />
                    Go Home
                </router-link>
                <router-link to="/components" class="NotFound-btn NotFound-btn--secondary">
                    <Icon name="fas fa-puzzle-piece" />
                    Browse Components
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
// No setup needed
</script>

<style scoped>
.NotFound {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
}

.NotFound-content {
    max-width: 500px;
    padding: var(--sp4);
}

.NotFound-icon {
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, var(--color-primary-2), var(--color-secondary-2));
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin: 0 auto var(--sp4) auto;
    opacity: 0.8;
}

.NotFound-title {
    font-size: 6rem;
    font-weight: var(--font-weight-boldest);
    margin: 0;
    background: linear-gradient(135deg, var(--color-primary-2), var(--color-secondary-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.NotFound-subtitle {
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
    margin: var(--sp2) 0;
    color: var(--color-text-0);
}

.NotFound-description {
    font-size: var(--font-size-large);
    color: var(--color-text-1);
    margin: 0 0 var(--sp4) 0;
    line-height: 1.6;
}

.NotFound-actions {
    display: flex;
    gap: var(--sp2);
    justify-content: center;
    flex-wrap: wrap;
}

.NotFound-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--sp1);
    padding: var(--sp2) var(--sp3);
    border-radius: 8px;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    transition: all 0.2s;
    border: 2px solid transparent;
}

.NotFound-btn--primary {
    background: var(--color-primary-2);
    color: var(--color-primary-text);
}

.NotFound-btn--primary:hover {
    background: var(--color-primary-3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.NotFound-btn--secondary {
    background: var(--color-base-1);
    color: var(--color-text-0);
    border-color: var(--color-base-3);
}

.NotFound-btn--secondary:hover {
    background: var(--color-base-2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 480px) {
    .NotFound-title {
        font-size: 4rem;
    }

    .NotFound-subtitle {
        font-size: 1.5rem;
    }

    .NotFound-actions {
        flex-direction: column;
        align-items: center;
    }

    .NotFound-btn {
        width: 100%;
        max-width: 250px;
        justify-content: center;
    }
}
</style>
