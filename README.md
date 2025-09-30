# NalaUI

Vue UI library & design system based on Manju UI ([nalaui](https://github.com/krisvs/nalaui)).

Adds blocks and sections to the library to experiment with quicker landing page and website building.

These add ons are very experimental and still under development. So please use at your own risk.

## Installation

### NPM Package (when published)
```bash
npm install nalaui
```

### Local Development / Monorepo Usage
For monorepo setups or local development, you can use a file reference in your `package.json`:

```json
{
  "dependencies": {
    "nalaui": "file:../../libs/nalaui"
  }
}
```

Then run:
```bash
npm install
```

## Usage

### 1. Import Components and Styles

```javascript
// In your main app file (e.g., app.ts or main.ts)
import * as nalauiComponents from 'nalaui';

// Import nalaui styles
import 'nalaui/stylesheets/variables.css';
import 'nalaui/stylesheets/baseline.css';

// Register components globally (Vue 3 example)
const app = createApp(App);

for (const [name, component] of Object.entries(nalauiComponents.components || {})) {
    app.component(name, component);
}
```

### 2. Use Components in Templates

```vue
<template>
  <VGroup gap="2">
    <Title>Welcome to nalaui</Title>
    <Text>A Vue UI library for rapid development</Text>
    <Divider />
    <HGroup gap="1">
      <Btn>Primary</Btn>
      <Btn variant="secondary">Secondary</Btn>
    </HGroup>
  </VGroup>
</template>
```

### 3. Available Components

- **Layout**: `VGroup`, `HGroup`, `HStack`, `Sizer`
- **Typography**: `Title`, `Subtitle`, `Text`, `Link`
- **Form**: `InputText`, `InputBase`
- **UI Elements**: `Btn`, `Tab`, `TabCap`, `Icon`, `Image`, `Circle`, `Divider`

### 4. Styling

nalaui uses CSS custom properties for theming. The main style files to import are:

- `nalaui/stylesheets/variables.css` - Core design tokens
- `nalaui/stylesheets/baseline.css` - Base styles and resets
- `nalaui/stylesheets/full.css` - Complete stylesheet (alternative to importing separately)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build library
npm run build

# Lint code
npm run lint
```

## Acknowledgments

This project is based on the [Nightshade library](https://github.com/inca/nightshade) by [Boris Okunskiy](https://github.com/inca).

Name is inspired by Manjū, my [German Shepherd dog](https://youtube.com/shorts/tMCEoOB6cY0?si=rrYvELgXdk4O1uuI).
