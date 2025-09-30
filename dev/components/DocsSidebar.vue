<template>
    <aside
        class="DocsSidebar"
        :class="{ 'DocsSidebar--open': isOpen }">
        <div class="DocsSidebar-overlay" @click="$emit('close')" />
        <nav class="DocsSidebar-nav">
            <div class="DocsSidebar-section">
                <h3 class="DocsSidebar-title">Getting Started</h3>
                <ul class="DocsSidebar-list">
                    <li>
                        <router-link to="/getting-started" class="DocsSidebar-link" @click="$emit('close')">
                            <Icon name="fas fa-rocket" />
                            Installation
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="DocsSidebar-section">
                <h3 class="DocsSidebar-title">Components</h3>
                <ul class="DocsSidebar-list">
                    <li>
                        <router-link to="/components#layout" class="DocsSidebar-category" @click="$emit('close')">
                            <Icon name="fas fa-layer-group" />
                            Layout
                        </router-link>
                        <ul class="DocsSidebar-sublist">
                            <li>
                                <router-link to="/components#vgroup" class="DocsSidebar-link" @click="$emit('close')">
                                    VGroup
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#hgroup" class="DocsSidebar-link" @click="$emit('close')">
                                    HGroup
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#hstack" class="DocsSidebar-link" @click="$emit('close')">
                                    HStack
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#sizer" class="DocsSidebar-link" @click="$emit('close')">
                                    Sizer
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/components#typography" class="DocsSidebar-category" @click="$emit('close')">
                            <Icon name="fas fa-font" />
                            Typography
                        </router-link>
                        <ul class="DocsSidebar-sublist">
                            <li>
                                <router-link to="/components#title" class="DocsSidebar-link" @click="$emit('close')">
                                    Title
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#subtitle" class="DocsSidebar-link" @click="$emit('close')">
                                    Subtitle
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#text" class="DocsSidebar-link" @click="$emit('close')">
                                    Text
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#link" class="DocsSidebar-link" @click="$emit('close')">
                                    Link
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/components#forms" class="DocsSidebar-category" @click="$emit('close')">
                            <Icon name="fas fa-edit" />
                            Forms
                        </router-link>
                        <ul class="DocsSidebar-sublist">
                            <li>
                                <router-link to="/components#btn" class="DocsSidebar-link" @click="$emit('close')">
                                    Button
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#inputtext" class="DocsSidebar-link" @click="$emit('close')">
                                    InputText
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#inputbase" class="DocsSidebar-link" @click="$emit('close')">
                                    InputBase
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/components#ui-elements" class="DocsSidebar-category" @click="$emit('close')">
                            <Icon name="fas fa-star" />
                            UI Elements
                        </router-link>
                        <ul class="DocsSidebar-sublist">
                            <li>
                                <router-link to="/components#tab" class="DocsSidebar-link" @click="$emit('close')">
                                    Tab
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#icon" class="DocsSidebar-link" @click="$emit('close')">
                                    Icon
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#image" class="DocsSidebar-link" @click="$emit('close')">
                                    Image
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/components#divider" class="DocsSidebar-link" @click="$emit('close')">
                                    Divider
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="DocsSidebar-section">
                <h3 class="DocsSidebar-title">Design System</h3>
                <ul class="DocsSidebar-list">
                    <li>
                        <router-link to="/design-system#spacing" class="DocsSidebar-link" @click="$emit('close')">
                            <Icon name="fas fa-ruler" />
                            Spacing
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/design-system#typography" class="DocsSidebar-link" @click="$emit('close')">
                            <Icon name="fas fa-font" />
                            Typography
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/design-system#colors" class="DocsSidebar-link" @click="$emit('close')">
                            <Icon name="fas fa-palette" />
                            Colors
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

defineEmits(['close']);
</script>

<style scoped>
.DocsSidebar {
    width: 280px;
    background: var(--color-base-0);
    border-right: 1px solid var(--color-base-2);
    position: relative;
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.DocsSidebar-overlay {
    display: none;
}

.DocsSidebar-nav {
    padding: var(--sp3) 0;
    height: 100%;
    overflow-y: auto;
}

.DocsSidebar-section {
    margin-bottom: var(--sp4);
}

.DocsSidebar-title {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-0);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 var(--sp2) 0;
    padding: 0 var(--sp3);
}

.DocsSidebar-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.DocsSidebar-category {
    display: flex;
    align-items: center;
    gap: var(--sp1);
    padding: var(--sp1) var(--sp3);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-1);
    margin-bottom: var(--sp1);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 0;
    border-right: 3px solid var(--color-primary-2);
}

.DocsSidebar-category:hover {
    color: var(--color-text-0);
    background: var(--color-base-1);
}

.DocsSidebar-category.router-link-active {
    color: var(--color-primary-2);
    background: var(--color-base-1);
    border-right: 3px solid var(--color-primary-2);
}

:global(.theme-dark) .DocsSidebar-category.router-link-active {
    color: var(--color-primary-1);
}

.DocsSidebar-sublist {
    list-style: none;
    margin: 0 0 var(--sp2) 0;
    padding: 0;
}

.DocsSidebar-link {
    display: flex;
    align-items: center;
    gap: var(--sp1);
    padding: var(--sp1) var(--sp3);
    text-decoration: none;
    color: var(--color-text-1);
    font-size: var(--font-size-small);
    transition: all 0.2s;
    border-radius: 0;
}

.DocsSidebar-sublist .DocsSidebar-link {
    padding-left: var(--sp5);
}

.DocsSidebar-link:hover {
    color: var(--color-text-0);
    background: var(--color-base-1);
}

.DocsSidebar-link.router-link-active {
    color: var(--color-primary-2);
    border-right: 3px solid var(--color-primary-2);
}

@media (max-width: 768px) {
    .DocsSidebar {
        position: fixed;
        top: 64px;
        left: 0;
        bottom: 0;
        z-index: 50;
        transform: translateX(-100%);
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    }

    .DocsSidebar--open {
        transform: translateX(0);
    }

    .DocsSidebar--open .DocsSidebar-overlay {
        display: block;
        position: fixed;
        top: 0;
        left: 280px;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: -1;
    }
}
</style>
