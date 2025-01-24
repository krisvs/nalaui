<template>
    <div class="Sections">
        <hr />

        <VGroup class="Intro">
            <h1>Sections</h1>
            <div>
                The following sections are available to plug and play into your project.
            </div>
        </VGroup>

        <VGroup>
            <SectionAboutText
                title="Sushi and Manju"
                align="start"
                kind="primary"
                background="secondary"
                text="Sushi and Manju are two adorable dogs on a mission to explore the great outdoors. Their incredible journey through forests, meadows, and mountains, captured in stunning photography, will leave you breathless and inspired." />
            <SectionNewsletter
                title="Join the Pack!"
                text="Stay updated on Sushi and Manju's latest adventures and get exclusive content delivered right to your inbox. Hurry, adventure awaits! Sign up now!"
                imgSrc="dev/assets/img/image.png"
                imgAlt="Sushi and Manju"
                align="center"
                :onSubscribe="onSubscribe" />
        </VGroup>

    </div>
</template>

<script>
export default {
    methods: {
        onSubscribe(email) {
            console.info('Subscribe:', email);
        }
    }
};
</script>

<style scoped>
.Intro {
    padding: var(--sp2);
}
</style>
