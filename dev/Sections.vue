<template>
    <div class="Sections">
        <hr />

        <VGroup class="Intro">
            <h1>Sections</h1>
            <div>
                The following sections are available to plug and play into your project.
            </div>
        </VGroup>

        <VGroup gap="0">
            <SectionNavbar
                imgSrc="dev/assets/img/logo.png"
                imgAlt="Sushi and Manju"
                imgSize="smallest"
                :links="navbarLinks" />
            <SectionHero
                backgroundImg="dev/assets/img/hero.jpg"
                imgSrc="dev/assets/img/logo.png"
                imgAlt="Overlay Waggy Shepherds Logo"
                height="50vh"
                opacity="0.25"
                alignImg="center"
                alignText="center"
                title="Waggy Shepherds"
                kind="primary" />
            <SectionAboutText
                title="Sushi and Manju"
                align="center"
                kind="primary"
                background="secondary"
                text="Sushi and Manju are two adorable dogs on a mission to explore the great outdoors. Their incredible journey through forests, meadows, and mountains, captured in stunning photography, will leave you breathless and inspired." />
            <SectionImageText
                :content="content"
                imgSize="small" />
            <SectionNewsletter
                title="Join the Pack!"
                text="Stay updated on Sushi and Manju's latest adventures and get exclusive content delivered right to your inbox. Hurry, adventure awaits! Sign up now!"
                imgSrc="dev/assets/img/image.png"
                imgAlt="Sushi and Manju"
                align="center"
                :onSubscribe="onSubscribe" />
            <SectionFooterLinks
                imgSrc="dev/assets/img/logo.png"
                imgAlt="Waggy Shepherds"
                align="center"
                :pageLinks="pageLinks"
                :legalLinks="legalLinks"
                kindHover="primary" />
            <SectionFooterEnd
                imgSrc="dev/assets/img/mountains-light.png"
                imgAlt="Waggy Shepherds Mountains"
                imgSize="large"
                alignImg="center"
                :socialLinks="socialLinks" />
        </VGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbarLinks: [
                {
                    href: 'https://waggyshepherds.com/about',
                    label: 'About'
                },
                {
                    href: 'https://waggyshepherds.com/blog',
                    label: 'Blog'
                },
                {
                    href: 'https://waggyshepherds.com/gallery',
                    label: 'Gallery'
                },
            ],
            content: [
                {
                    title: 'Sushi',
                    subtitle: 'The Belgian Malinois',
                    text: '4 year old rescue who found us, and waited outside work asking for help. Energetic, but calculated for a Malinois.',
                    imgSrc: 'dev/assets/img/sushi1.jpg',
                    imgAlt: 'Sushi',
                    alignImg: 'center',
                    btnLink: 'https://waggyshepherds.com/sushi',
                },
                {
                    title: 'Manju',
                    subtitle: 'The Sable German Shepherd',
                    text: '2 year old adopted puppy from an unwanted litter. Jumps 2 meters high, and is able to squeeze into small places (we don\'t even know how). Completely unstoppable.',
                    imgSrc: 'dev/assets/img/manju1.jpg',
                    imgAlt: 'Manju',
                    alignImg: 'center',
                    btnLink: 'https://waggyshepherds.com/blog/manju-adoption-story',
                },
                {
                    title: 'Satis',
                    subtitle: 'The Common European',
                    text: '10 year old rescued street cat. Too clever for her own good.',
                    imgSrc: 'dev/assets/img/satis-tufinhas.jpg',
                    imgAlt: 'Satis',
                    alignImg: 'center',
                    btnLink: 'https://waggyshepherds.com/blog/satis-kingdom',
                },
                {
                    title: 'Tufinhas',
                    subtitle: 'The Princess',
                    text: '9 year old rescued Siamese cat. Doesn`t care about anything. Boss of the group. Meows incessantly.',
                    imgSrc: 'dev/assets/img/satis-tufinhas-2.jpg',
                    imgAlt: 'Tufinhas',
                    alignImg: 'center',
                    btnLink: 'https://waggyshepherds.com/blog/satis-kingdom',
                }
            ],
            pageLinks: [
                {
                    href: 'https://waggyshepherds.com/about',
                    label: 'About'
                },
                {
                    href: 'https://waggyshepherds.com/blog',
                    label: 'Blog'
                },
                {
                    href: 'https://waggyshepherds.com/gallery',
                    label: 'Gallery'
                },
            ],
            legalLinks: [
                {
                    href: 'https://waggyshepherds.com/terms',
                    label: 'Terms of Use'
                },
                {
                    href: 'https://waggyshepherds.com/privacy',
                    label: 'Privacy Policy'
                },
                {
                    href: 'https://waggyshepherds.com/cookies',
                    label: 'Cookie Policy'
                },
            ],
            socialLinks: [
                {
                    href: 'https://www.instagram.com/waggyshepherds/',
                    alt: 'Waggy Shepherds Instagram channel',
                    icon: 'fa-brands fa-instagram',
                    iconSize: 'lg',
                    iconKind: 'secondary'
                },
                {
                    href: 'https://www.youtube.com/@WaggyShepherds',
                    alt: 'Waggy Shepherds YouTube Channel',
                    icon: 'fa-brands fa-youtube',
                    iconSize: 'lg',
                    iconKind: 'secondary'
                },
            ],
        };
    },

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
