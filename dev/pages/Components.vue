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
                    description="Main heading component with size variants."
                    :code="titleCode">
                    <VGroup gap="2" class="demo-container">
                        <Title size="large">Large Title</Title>
                        <Title>Default Title</Title>
                        <Title size="small">Small Title</Title>
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="subtitle"
                    title="Subtitle"
                    description="Secondary heading component."
                    :code="subtitleCode">
                    <VGroup gap="2" class="demo-container">
                        <Title>Main Title</Title>
                        <Subtitle>This is a subtitle</Subtitle>
                        <Text>Some content follows the subtitle</Text>
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="text"
                    title="Text"
                    description="Standard text component with size variants."
                    :code="textCode">
                    <VGroup gap="2" class="demo-container">
                        <Text size="large">Large text</Text>
                        <Text>Default text</Text>
                        <Text size="small">Small text</Text>
                    </VGroup>
                </ComponentDemo>

                <ComponentDemo
                    id="link"
                    title="Link"
                    description="Link component with various styles."
                    :code="linkCode">
                    <VGroup gap="2" class="demo-container">
                        <Link href="#">Default link</Link>
                        <Link href="#" variant="primary">Primary link</Link>
                        <Link href="#" variant="secondary">Secondary link</Link>
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
                    description="Versatile button component with multiple variants and states."
                    :code="btnCode">
                    <VGroup gap="3" class="demo-container">
                        <HGroup gap="2">
                            <Btn variant="primary">Primary</Btn>
                            <Btn variant="secondary">Secondary</Btn>
                            <Btn variant="default">Default</Btn>
                        </HGroup>
                        <HGroup gap="2">
                            <Btn variant="primary" size="small">Small</Btn>
                            <Btn variant="primary">Default</Btn>
                            <Btn variant="primary" size="large">Large</Btn>
                        </HGroup>
                        <HGroup gap="2">
                            <Btn variant="primary" :disabled="true">Disabled</Btn>
                            <Btn variant="primary" outline>Outline</Btn>
                            <Btn variant="primary" round>Round</Btn>
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
  <Title size="large">Large Title</Title>
  <Title>Default Title</Title>
  <Title size="small">Small Title</Title>
</VGroup>`;

const subtitleCode = `<VGroup gap="2">
  <Title>Main Title</Title>
  <Subtitle>This is a subtitle</Subtitle>
  <Text>Some content follows the subtitle</Text>
</VGroup>`;

const textCode = `<VGroup gap="2">
  <Text size="large">Large text</Text>
  <Text>Default text</Text>
  <Text size="small">Small text</Text>
</VGroup>`;

const linkCode = `<VGroup gap="2">
  <Link href="#">Default link</Link>
  <Link href="#" variant="primary">Primary link</Link>
  <Link href="#" variant="secondary">Secondary link</Link>
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
    <Btn variant="primary">Primary</Btn>
    <Btn variant="secondary">Secondary</Btn>
    <Btn variant="default">Default</Btn>
  </HGroup>
  <HGroup gap="2">
    <Btn variant="primary" size="small">Small</Btn>
    <Btn variant="primary">Default</Btn>
    <Btn variant="primary" size="large">Large</Btn>
  </HGroup>
  <HGroup gap="2">
    <Btn variant="primary" :disabled="true">Disabled</Btn>
    <Btn variant="primary" outline>Outline</Btn>
    <Btn variant="primary" round>Round</Btn>
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
