<template>
    <div class="Root">
        <div class="Container">
            <Usage />
            <DesignSystem />
            <GalleryBtn />
            <GalleryInput />
            <GalleryTab />
        </div>
    </div>
</template>

<script>
import DesignSystem from './DesignSystem.vue';
import GalleryBtn from './GalleryBtn.vue';
import GalleryInput from './GalleryInput.vue';
import GalleryTab from './GalleryTab.vue';
import Usage from './Usage.vue';

export default {

    components: {
        DesignSystem,
        GalleryBtn,
        GalleryInput,
        GalleryTab,
        Usage,
    }

};
</script>

<style scoped>

.Container {
    max-width: var(--container-width);
    margin: var(--sp4) auto;
}

@media screen and (max-width: 420px) {
    .Container {
        padding: var(--sp2);
    }
}

</style>
