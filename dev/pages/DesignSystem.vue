<template>
    <div class="DesignSystem">
        <div class="PageHeader">
            <h1 class="PageHeader-title">Design System</h1>
            <p class="PageHeader-description">
                Nalaui features a minimalistic design system based on CSS variables and lightweight conventions.
            </p>
        </div>

        <div class="Content">
            <section id="spacing" class="Section">
                <h2 class="Section-title">
                    <Icon name="fas fa-ruler" />
                    Spacing
                </h2>
                <p>
                    All components use consistent spacing defined as multiples of a <strong>base spacing unit</strong>.
                    It is defined as <code>--sp</code> variable and is equal to <code>8px</code> by default.
                </p>

                <div class="SpacingDemo">
                    <h3>Spacing Variables</h3>
                    <div class="SpacingGrid">
                        <div v-for="(size, index) in spacingSizes" :key="index" class="SpacingItem">
                            <div class="SpacingItem-visual" :style="{ width: `var(--sp${index})`, height: `var(--sp${index})` }" />
                            <div class="SpacingItem-info">
                                <code>--sp{{ index }}</code>
                                <span>{{ size }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <CodeBlock
                    language="css"
                    :code="spacingCss" />
            </section>

            <section id="typography" class="Section">
                <h2 class="Section-title">
                    <Icon name="fas fa-font" />
                    Typography
                </h2>
                <p>
                    The following CSS variables define typography. Applications should override these to match their unique style requirements.
                </p>

                <div class="TypographyDemo">
                    <h3>Font Sizes</h3>
                    <div class="TypographyGrid">
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-size: var(--font-size-headline)">
                                Headline
                            </div>
                            <code>--font-size-headline: 42px</code>
                        </div>
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-size: var(--font-size-larger)">
                                Larger Text
                            </div>
                            <code>--font-size-larger: 20px</code>
                        </div>
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-size: var(--font-size-large)">
                                Large Text
                            </div>
                            <code>--font-size-large: 18px</code>
                        </div>
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-size: var(--font-size)">
                                Default Text
                            </div>
                            <code>--font-size: 16px</code>
                        </div>
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-size: var(--font-size-small)">
                                Small Text
                            </div>
                            <code>--font-size-small: 14px</code>
                        </div>
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-size: var(--font-size-smaller)">
                                Smaller Text
                            </div>
                            <code>--font-size-smaller: 12px</code>
                        </div>
                    </div>

                    <h3>Font Weights</h3>
                    <div class="TypographyGrid">
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-weight: var(--font-weight)">
                                Regular Weight
                            </div>
                            <code>--font-weight: 400</code>
                        </div>
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-weight: var(--font-weight-bold)">
                                Bold Weight
                            </div>
                            <code>--font-weight-bold: 500</code>
                        </div>
                        <div class="TypographyItem">
                            <div class="TypographyItem-preview" style="font-weight: var(--font-weight-boldest)">
                                Boldest Weight
                            </div>
                            <code>--font-weight-boldest: 800</code>
                        </div>
                    </div>
                </div>

                <CodeBlock
                    language="css"
                    :code="typographyCss" />
            </section>

            <section id="colors" class="Section">
                <h2 class="Section-title">
                    <Icon name="fas fa-palette" />
                    Colors
                </h2>
                <p>
                    Nalaui follows a simple yet efficient approach to manage dual-themed application color schemes.
                </p>

                <h3>Color Tokens</h3>
                <p>
                    Each color token is defined as a set of CSS variables and includes 5 grades of lightness
                    in the form of <code>--color-&lt;token&gt;-&lt;0-4&gt;</code>.
                </p>

                <div class="ColorsDemo">
                    <h4>Base Colors</h4>
                    <p>The following CSS variables define the basis colors for the application.</p>

                    <div class="ColorPalette">
                        <div class="ColorGroup">
                            <h5>Base Token</h5>
                            <p>Backdrop colors for various UI surfaces.</p>
                            <div class="ColorRow">
                                <div
                                    v-for="i in 5"
                                    :key="i"
                                    class="ColorSwatch"
                                    :style="{ background: `var(--color-base-${i-1})` }">
                                    <span>{{ i-1 }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="ColorGroup">
                            <h5>Text Token</h5>
                            <p>Main text colors with different emphasis levels.</p>
                            <div class="ColorRow">
                                <div
                                    v-for="i in 5"
                                    :key="i"
                                    class="ColorSwatch"
                                    :style="{ background: `var(--color-text-${i-1})` }">
                                    <span>{{ i-1 }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4>Semantic Colors</h4>
                    <p>Semantic tokens provide the color palette for various UI components.</p>

                    <div class="ColorPalette">
                        <div class="ColorGroup">
                            <h5>Primary Token</h5>
                            <p>Primary brand colors for main actions and emphasis.</p>
                            <div class="ColorRow">
                                <div
                                    v-for="i in 5"
                                    :key="i"
                                    class="ColorSwatch"
                                    :style="{ background: `var(--color-primary-${i-1})` }">
                                    <span>{{ i-1 }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="ColorGroup">
                            <h5>Secondary Token</h5>
                            <p>Secondary colors for supporting actions and elements.</p>
                            <div class="ColorRow">
                                <div
                                    v-for="i in 5"
                                    :key="i"
                                    class="ColorSwatch"
                                    :style="{ background: `var(--color-secondary-${i-1})` }">
                                    <span>{{ i-1 }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Usage Examples</h3>
                <CodeBlock
                    language="css"
                    :code="colorUsageExample" />
            </section>

            <section id="conventions" class="Section">
                <h2 class="Section-title">
                    <Icon name="fas fa-cogs" />
                    Conventions
                </h2>
                <p>
                    Nalaui follows consistent conventions to ensure predictable behavior and easy customization.
                </p>

                <div class="ConventionsGrid">
                    <div class="Convention-card">
                        <div class="Convention-icon">
                            <Icon name="fas fa-mobile-alt" />
                        </div>
                        <h4>Mobile First</h4>
                        <p>All components are designed mobile-first with responsive breakpoints.</p>
                    </div>

                    <div class="Convention-card">
                        <div class="Convention-icon">
                            <Icon name="fas fa-puzzle-piece" />
                        </div>
                        <h4>Composable</h4>
                        <p>Components can be easily composed together to create complex interfaces.</p>
                    </div>

                    <div class="Convention-card">
                        <div class="Convention-icon">
                            <Icon name="fas fa-universal-access" />
                        </div>
                        <h4>Accessible</h4>
                        <p>Built with accessibility in mind, following ARIA guidelines.</p>
                    </div>

                    <div class="Convention-card">
                        <div class="Convention-icon">
                            <Icon name="fas fa-paint-brush" />
                        </div>
                        <h4>Customizable</h4>
                        <p>Easy to customize through CSS variables and component props.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const spacingSizes = ['0px', '8px', '16px', '24px', '32px', '40px', '48px', '56px', '64px'];

const spacingCss = `:root {
    --sp: 8px;
    --sp0: 0;
    --sp1: calc(var(--sp) * 1); /* 8px */
    --sp2: calc(var(--sp) * 2); /* 16px */
    --sp3: calc(var(--sp) * 3); /* 24px */
    --sp4: calc(var(--sp) * 4); /* 32px */
    --sp5: calc(var(--sp) * 5); /* 40px */
    --sp6: calc(var(--sp) * 6); /* 48px */
    --sp7: calc(var(--sp) * 7); /* 56px */
    --sp8: calc(var(--sp) * 8); /* 64px */
}`;

const typographyCss = `:root {
    --font-main: sans-serif;
    --font-monospace: monospace;

    --font-size: 16px;
    --font-size-small: 14px;
    --font-size-smaller: 12px;
    --font-size-large: 18px;
    --font-size-larger: 20px;
    --font-size-headline: 42px;

    --font-weight: 400;
    --font-weight-bold: 500;
    --font-weight-boldest: 800;

    --line-height: 1.5em;
}`;

const colorUsageExample = `/* Using color tokens in your CSS */
.my-component {
    background: var(--color-base-0);
    color: var(--color-text-0);
    border: 1px solid var(--color-base-2);
}

.my-button {
    background: var(--color-primary-2);
    color: var(--color-primary-text);
}

.my-button:hover {
    background: var(--color-primary-3);
}`;
</script>

<style scoped>
.DesignSystem {
    max-width: 1000px;
}

.PageHeader {
    margin-bottom: var(--sp6);
}

.PageHeader-title {
    font-size: 3rem;
    font-weight: var(--font-weight-bold);
    margin: 0 0 var(--sp2) 0;
    color: var(--color-text-0);
}

.PageHeader-description {
    font-size: var(--font-size-large);
    color: var(--color-text-1);
    margin: 0;
}

.Content {
    line-height: 1.6;
}

.Section {
    margin-bottom: var(--sp8);
}

.Section-title {
    display: flex;
    align-items: center;
    gap: var(--sp2);
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
    margin: 0 0 var(--sp3) 0;
    color: var(--color-text-0);
    border-bottom: 2px solid var(--color-base-2);
    padding-bottom: var(--sp2);
}

.Section p {
    color: var(--color-text-1);
    margin: var(--sp2) 0;
}

.Section h3 {
    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);
    margin: var(--sp4) 0 var(--sp2) 0;
    color: var(--color-text-0);
}

.Section h4 {
    font-size: 1.25rem;
    font-weight: var(--font-weight-bold);
    margin: var(--sp3) 0 var(--sp2) 0;
    color: var(--color-text-0);
}

.Section h5 {
    font-size: 1.1rem;
    font-weight: var(--font-weight-bold);
    margin: var(--sp2) 0 var(--sp1) 0;
    color: var(--color-text-0);
}

.Section code {
    background: var(--color-base-1);
    padding: 0.25em 0.5em;
    border-radius: 4px;
    font-family: var(--font-monospace);
    font-size: 0.9em;
    color: var(--color-text-0);
}

/* Spacing Demo */
.SpacingDemo {
    margin: var(--sp4) 0;
}

.SpacingGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--sp3);
    margin: var(--sp3) 0;
}

.SpacingItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sp2);
    padding: var(--sp3);
    background: var(--color-base-1);
    border: 1px solid var(--color-base-2);
    border-radius: 8px;
}

.SpacingItem-visual {
    background: var(--color-primary-2);
    border-radius: 4px;
    min-height: 8px;
}

.SpacingItem-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sp1);
    text-align: center;
}

.SpacingItem-info code {
    font-size: var(--font-size-small);
}

.SpacingItem-info span {
    font-size: var(--font-size-smaller);
    color: var(--color-text-2);
}

/* Typography Demo */
.TypographyDemo {
    margin: var(--sp4) 0;
}

.TypographyGrid {
    display: grid;
    gap: var(--sp3);
    margin: var(--sp3) 0;
}

.TypographyItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--sp3);
    background: var(--color-base-1);
    border: 1px solid var(--color-base-2);
    border-radius: 8px;
}

.TypographyItem-preview {
    font-family: var(--font-main);
    color: var(--color-text-0);
}

/* Colors Demo */
.ColorsDemo {
    margin: var(--sp4) 0;
}

.ColorPalette {
    margin: var(--sp3) 0;
}

.ColorGroup {
    margin: var(--sp4) 0;
}

.ColorGroup p {
    font-size: var(--font-size-small);
    margin: var(--sp1) 0 var(--sp2) 0;
}

.ColorRow {
    display: flex;
    gap: var(--sp1);
    margin: var(--sp2) 0;
}

.ColorSwatch {
    width: 80px;
    height: 60px;
    border-radius: 8px;
    border: 1px solid var(--color-base-3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-small);
    color: var(--color-text-0);
    mix-blend-mode: difference;
}

/* Conventions */
.ConventionsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--sp3);
    margin: var(--sp4) 0;
}

.Convention-card {
    padding: var(--sp4);
    background: var(--color-base-1);
    border: 1px solid var(--color-base-2);
    border-radius: 12px;
    text-align: center;
}

.Convention-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--color-primary-2), var(--color-secondary-2));
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin: 0 auto var(--sp2) auto;
}

.Convention-card h4 {
    margin: 0 0 var(--sp1) 0;
    color: var(--color-text-0);
}

.Convention-card p {
    margin: 0;
    font-size: var(--font-size-small);
    color: var(--color-text-1);
}
</style>
