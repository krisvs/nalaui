<template>
    <div class="Components">
        <div class="PageHeader">
            <h1 class="PageHeader-title">Components</h1>
            <p class="PageHeader-description">
                Explore all available components with interactive examples and code snippets.
            </p>
        </div>

        <div class="Content">
            <!-- Layout Components -->
            <section id="layout" class="Section">
                <h2 class="Section-title">
                    <Icon name="fas fa-layer-group" />
                    Layout Components
                </h2>
                <p class="Section-description">Components for organizing and structuring your UI layout.</p>

                <ComponentDemo
                    id="vgroup"
                    title="VGroup"
                    description="Vertical group component for stacking elements with consistent spacing."
                    :code="vgroupCode">
                    <VGroup gap="2" class="demo-container">
                        <Title>VGroup Example</Title>
                        <Text>This is a vertical group with gap="2"</Text>
                        <Btn variant="primary">Button 1</Btn>
                        <Btn variant="secondary">Button 2</Btn>
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="hgroup"
                    title="HGroup"
                    description="Horizontal group component for arranging elements side by side."
                    :code="hgroupCode">
                    <HGroup gap="2" class="demo-container">
                        <Btn variant="primary">Button 1</Btn>
                        <Btn variant="secondary">Button 2</Btn>
                        <Btn variant="default">Button 3</Btn>
                    </HGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="hstack"
                    title="HStack"
                    description="Horizontal stack for simple side-by-side layouts."
                    :code="hstackCode">
                    <HStack class="demo-container">
                        <Text>Left content</Text>
                        <Text>Right content</Text>
                    </HStack>
                </ComponentDemo>
            </section>

            <!-- Typography Components -->
            <section id="typography" class="Section">
                <h2 class="Section-title">
                    <Icon name="fas fa-font" />
                    Typography
                </h2>
                <p class="Section-description">Text components for headings, paragraphs, and links.</p>

                <ComponentDemo
                    id="title"
                    title="Title"
                    description="Main heading component with kind variants for different colors."
                    :code="titleCode">
                    <VGroup gap="2" class="demo-container">
                        <Title title="The fox jumped over the lazy dog" kind="default" />
                        <Title title="The fox jumped over the lazy dog" kind="primary" />
                        <Title title="The fox jumped over the lazy dog" kind="secondary" />
                        <Title title="The fox jumped over the lazy dog" kind="tertiary" />
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="subtitle"
                    title="Subtitle"
                    description="Secondary heading component with kind variants for different colors."
                    :code="subtitleCode">
                    <VGroup gap="2" class="demo-container">
                        <Subtitle subtitle="The fox jumped over the lazy dog" kind="default" />
                        <Subtitle subtitle="The fox jumped over the lazy dog" kind="primary" />
                        <Subtitle subtitle="The fox jumped over the lazy dog" kind="secondary" />
                        <Subtitle subtitle="The fox jumped over the lazy dog" kind="tertiary" />
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="text"
                    title="Text"
                    description="Standard text component with kind variants for different colors."
                    :code="textCode">
                    <VGroup gap="2" class="demo-container">
                        <Text text="The fox jumped over the lazy dog" kind="default" />
                        <Text text="The fox jumped over the lazy dog" kind="primary" />
                        <Text text="The fox jumped over the lazy dog" kind="secondary" />
                        <Text text="The fox jumped over the lazy dog" kind="tertiary" />
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="link"
                    title="Link"
                    description="Link component with kindHover variants for different hover colors."
                    :code="linkCode">
                    <VGroup gap="2" class="demo-container">
                        <Link href="#" label="The fox jumped over the lazy dog" kindHover="default" />
                        <Link href="#" label="The fox jumped over the lazy dog" kindHover="primary" />
                        <Link href="#" label="The fox jumped over the lazy dog" kindHover="secondary" />
                        <Link href="#" label="The fox jumped over the lazy dog" kindHover="tertiary" />
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="typography-variables"
                    title="Typography Variables"
                    description="CSS variables for font sizes, weights, and families that can be used in custom styles."
                    :code="typographyVariablesCode">
                    <VGroup gap="4" class="demo-container">
                        <VGroup gap="2">
                            <h4>Font Sizes</h4>
                            <div style="font-size: var(--font-size-headline)">The fox jumped over the lazy dog</div>
                            <div style="font-size: var(--font-size-larger)">The fox jumped over the lazy dog</div>
                            <div style="font-size: var(--font-size-large)">The fox jumped over the lazy dog</div>
                            <div style="font-size: var(--font-size)">The fox jumped over the lazy dog</div>
                            <div style="font-size: var(--font-size-small)">The fox jumped over the lazy dog</div>
                            <div style="font-size: var(--font-size-smaller)">The fox jumped over the lazy dog</div>
                        </VGroup>

                        <VGroup gap="2">
                            <h4>Font Weights</h4>
                            <div style="font-weight: var(--font-weight)">The fox jumped over the lazy dog</div>
                            <div style="font-weight: var(--font-weight-bold)">The fox jumped over the lazy dog</div>
                            <div style="font-weight: var(--font-weight-boldest)">The fox jumped over the lazy dog</div>
                        </VGroup>

                        <VGroup gap="2">
                            <h4>Font Families</h4>
                            <div style="font-family: var(--font-main)">The fox jumped over the lazy dog</div>
                            <div style="font-family: var(--font-monospace)">The fox jumped over the lazy dog</div>
                        </VGroup>
                    </VGroup>
                </ComponentDemo>
            </section>

            <!-- Form Components -->
            <section id="forms" class="Section">
                <h2 class="Section-title">
                    <Icon name="fas fa-edit" />
                    Form Components
                </h2>
                <p class="Section-description">Interactive form elements and buttons.</p>

                <ComponentDemo
                    id="btn"
                    title="Button"
                    description="Versatile button component with multiple color variants (primary, secondary, tertiary, default, success, warning, danger) and states."
                    :code="btnCode">
                    <VGroup gap="3" class="demo-container">
                        <!-- State Controls -->
                        <HGroup gap="3" style="flex-wrap: wrap; align-items: center;">
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" v-model="btnDisabled">
                                <span>Disabled</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" v-model="btnFocus">
                                <span>Focus</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" v-model="btnHover">
                                <span>Hover</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" v-model="btnActive">
                                <span>Active</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" v-model="btnRound">
                                <span>Round</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" v-model="btnOutline">
                                <span>Outline</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" v-model="btnSmall">
                                <span>Small</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" v-model="btnIcon">
                                <span>Icon</span>
                            </label>
                        </HGroup>

                        <!-- All Color Variants -->
                        <HGroup gap="2" style="flex-wrap: wrap;">
                            <Btn kind="default" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Default</Btn>
                            <Btn kind="primary" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Primary</Btn>
                            <Btn kind="secondary" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Secondary</Btn>
                            <Btn kind="tertiary" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Tertiary</Btn>
                            <Btn kind="success" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Success</Btn>
                            <Btn kind="warning" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Warning</Btn>
                            <Btn kind="danger" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Danger</Btn>
                        </HGroup>

                        <!-- Link-style Variants -->
                        <HGroup gap="2" style="flex-wrap: wrap;">
                            <Btn kind="link-default" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Default</Btn>
                            <Btn kind="link-primary" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Primary</Btn>
                            <Btn kind="link-secondary" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Secondary</Btn>
                            <Btn kind="link-tertiary" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Tertiary</Btn>
                            <Btn kind="link-success" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Success</Btn>
                            <Btn kind="link-warning" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Warning</Btn>
                            <Btn kind="link-danger" :disabled="btnDisabled" :round="btnRound" :outline="btnOutline" :size="btnSmall ? 'small' : undefined" :pseudo-focus="btnFocus" :pseudo-hover="btnHover" :pseudo-active="btnActive">Danger</Btn>
                        </HGroup>
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="inputtext"
                    title="InputText"
                    description="Text input component with various states."
                    :code="inputTextCode">
                    <VGroup gap="2" class="demo-container">
                        <InputText v-model="inputValue1" placeholder="Default input" />
                        <InputText v-model="inputValue2" placeholder="Small input" size="small" />
                        <InputText placeholder="Disabled input" :disabled="true" />
                    </VGroup>
                </ComponentDemo>
            </section>

            <!-- UI Elements -->
            <section id="ui-elements" class="Section">
                <h2 class="Section-title">
                    <Icon name="fas fa-star" />
                    UI Elements
                </h2>
                <p class="Section-description">Various UI elements and decorative components.</p>

                <ComponentDemo
                    id="icon"
                    title="Icon"
                    description="Icon component using FontAwesome icons."
                    :code="iconCode">
                    <HGroup gap="2" class="demo-container">
                        <Icon name="fas fa-star" />
                        <Icon name="fas fa-heart" />
                        <Icon name="fas fa-cog" />
                        <Icon name="fab fa-github" />
                    </HGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="divider"
                    title="Divider"
                    description="Simple divider line for separating content."
                    :code="dividerCode">
                    <VGroup gap="2" class="demo-container">
                        <Text>Content above divider</Text>
                        <Divider />
                        <Text>Content below divider</Text>
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="circle"
                    title="Circle"
                    description="Simple circular element for avatars or decorative purposes. Available sizes: normal, large, larger."
                    :code="circleCode">
                    <HGroup gap="3" class="demo-container" style="align-items: center;">
                        <Circle size="normal" style="background: var(--color-primary-2);" />
                        <Circle size="large" style="background: var(--color-secondary-2);" />
                        <Circle size="larger" style="background: var(--color-tertiary-2);" />
                    </HGroup>
                </ComponentDemo>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import ComponentDemo from '../components/ComponentDemo.vue';

const inputValue1 = ref('');
const inputValue2 = ref('');

// Button demo state
const btnDisabled = ref(false);
const btnFocus = ref(false);
const btnHover = ref(false);
const btnActive = ref(false);
const btnRound = ref(false);
const btnOutline = ref(false);
const btnSmall = ref(false);
const btnIcon = ref(false);

// Code examples
const vgroupCode = `<VGroup gap="2">
  <Title>VGroup Example</Title>
  <Text>This is a vertical group with gap="2"</Text>
  <Btn variant="primary">Button 1</Btn>
  <Btn variant="secondary">Button 2</Btn>
</VGroup>`;

const hgroupCode = `<HGroup gap="2">
  <Btn variant="primary">Button 1</Btn>
  <Btn variant="secondary">Button 2</Btn>
  <Btn variant="default">Button 3</Btn>
</HGroup>`;

const hstackCode = `<HStack>
  <Text>Left content</Text>
  <Text>Right content</Text>
</HStack>`;

const titleCode = `<VGroup gap="2">
  <Title title="The fox jumped over the lazy dog" kind="default" />
  <Title title="The fox jumped over the lazy dog" kind="primary" />
  <Title title="The fox jumped over the lazy dog" kind="secondary" />
  <Title title="The fox jumped over the lazy dog" kind="tertiary" />
</VGroup>`;

const subtitleCode = `<VGroup gap="2">
  <Subtitle subtitle="The fox jumped over the lazy dog" kind="default" />
  <Subtitle subtitle="The fox jumped over the lazy dog" kind="primary" />
  <Subtitle subtitle="The fox jumped over the lazy dog" kind="secondary" />
  <Subtitle subtitle="The fox jumped over the lazy dog" kind="tertiary" />
</VGroup>`;

const textCode = `<VGroup gap="2">
  <Text text="The fox jumped over the lazy dog" kind="default" />
  <Text text="The fox jumped over the lazy dog" kind="primary" />
  <Text text="The fox jumped over the lazy dog" kind="secondary" />
  <Text text="The fox jumped over the lazy dog" kind="tertiary" />
</VGroup>`;

const linkCode = `<VGroup gap="2">
  <Link href="#" label="The fox jumped over the lazy dog" kindHover="default" />
  <Link href="#" label="The fox jumped over the lazy dog" kindHover="primary" />
  <Link href="#" label="The fox jumped over the lazy dog" kindHover="secondary" />
  <Link href="#" label="The fox jumped over the lazy dog" kindHover="tertiary" />
</VGroup>`;

const typographyVariablesCode = `<!-- Font Sizes -->
<div style="font-size: var(--font-size-headline)">Headline (42px)</div>
<div style="font-size: var(--font-size-larger)">Larger (20px)</div>
<div style="font-size: var(--font-size-large)">Large (18px)</div>
<div style="font-size: var(--font-size)">Default (16px)</div>
<div style="font-size: var(--font-size-small)">Small (14px)</div>
<div style="font-size: var(--font-size-smaller)">Smaller (12px)</div>

<!-- Font Weights -->
<div style="font-weight: var(--font-weight)">Regular (400)</div>
<div style="font-weight: var(--font-weight-bold)">Bold (500)</div>
<div style="font-weight: var(--font-weight-boldest)">Boldest (800)</div>

<!-- Font Families -->
<div style="font-family: var(--font-main)">Main Font</div>
<div style="font-family: var(--font-monospace)">Monospace Font</div>`;

const btnCode = `<VGroup gap="3">
  <HGroup gap="2">
    <Btn kind="primary">Primary</Btn>
    <Btn kind="secondary">Secondary</Btn>
    <Btn kind="tertiary">Tertiary</Btn>
    <Btn kind="default">Default</Btn>
  </HGroup>
  <HGroup gap="2">
    <Btn kind="success">Success</Btn>
    <Btn kind="warning">Warning</Btn>
    <Btn kind="danger">Danger</Btn>
  </HGroup>
  <HGroup gap="2">
    <Btn kind="primary" size="small">Small</Btn>
    <Btn kind="primary">Default</Btn>
    <Btn kind="primary" size="large">Large</Btn>
  </HGroup>
  <HGroup gap="2">
    <Btn kind="primary" :disabled="true">Disabled</Btn>
    <Btn kind="primary" outline>Outline</Btn>
    <Btn kind="primary" round>Round</Btn>
  </HGroup>
</VGroup>`;

const inputTextCode = `<VGroup gap="2">
  <InputText placeholder="Default input" v-model="inputValue" />
  <InputText placeholder="Small input" size="small" v-model="inputValue" />
  <InputText placeholder="Disabled input" :disabled="true" />
</VGroup>`;

const iconCode = `<HGroup gap="2">
  <Icon name="fas fa-star" />
  <Icon name="fas fa-heart" />
  <Icon name="fas fa-cog" />
  <Icon name="fab fa-github" />
</HGroup>`;

const dividerCode = `<VGroup gap="2">
  <Text>Content above divider</Text>
  <Divider />
  <Text>Content below divider</Text>
</VGroup>`;

const circleCode = `<HGroup gap="3">
  <Circle size="normal" style="background: var(--color-primary-2);" />
  <Circle size="large" style="background: var(--color-secondary-2);" />
  <Circle size="larger" style="background: var(--color-tertiary-2);" />
</HGroup>`;
</script>

<style scoped>
.Components {
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

.Section {
    margin-bottom: var(--sp8);
}

.Section-title {
    display: flex;
    align-items: center;
    gap: var(--sp2);
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
    margin: 0 0 var(--sp2) 0;
    color: var(--color-text-0);
    border-bottom: 2px solid var(--color-base-2);
    padding-bottom: var(--sp2);
    background: linear-gradient(135deg, var(--color-primary-3), var(--color-secondary-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.Section-description {
    color: var(--color-text-1);
    margin: 0 0 var(--sp4) 0;
    font-size: var(--font-size-large);
}

.demo-container {
    padding: var(--sp3);
    background: var(--color-base-1);
    border: 1px solid var(--color-base-2);
    border-radius: 8px;
}
</style>
