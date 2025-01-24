<template>
    <div class="Root">
        <div class="Container">
            <Usage />
            <DesignSystem />
            <GalleryBtn />
            <GalleryInput />
            <GalleryTab />
            <Sections />
        </div>
    </div>
</template>

<script>
import DesignSystem from './DesignSystem.vue';
import GalleryBtn from './GalleryBtn.vue';
import GalleryInput from './GalleryInput.vue';
import GalleryTab from './GalleryTab.vue';
import Sections from './Sections.vue';
import Usage from './Usage.vue';

export default {

    components: {
        DesignSystem,
        GalleryBtn,
        GalleryInput,
        GalleryTab,
        Sections,
        Usage,
    }

};
</script>

<style scoped>
.Root {
    padding: 0 var(--sp2);
}

.Container {
    max-width: var(--container-width);
    margin: var(--sp4) auto;
}
</style>
