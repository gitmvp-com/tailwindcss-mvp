# Tailwind CSS MVP

A minimal implementation of Tailwind CSS demonstrating the core utility-first CSS generation concept.

## Features

✨ **Utility-First CSS Generation**: Scans HTML files and generates only the CSS utilities that are actually used.

### Supported Utilities

- **Colors**: `text-{color}`, `bg-{color}`, `border-{color}`
- **Spacing**: `p-{size}`, `m-{size}`, `px-{size}`, `py-{size}`, `mx-{size}`, `my-{size}`
- **Typography**: `text-{size}`, `font-{weight}`, `text-{align}`
- **Layout**: `flex`, `block`, `inline`, `grid`, `hidden`
- **Flexbox**: `items-{align}`, `justify-{align}`, `flex-{direction}`
- **Sizing**: `w-{size}`, `h-{size}`, `max-w-{size}`
- **Borders**: `border`, `border-{width}`, `rounded`, `rounded-{size}`
- **Display**: `block`, `inline-block`, `flex`, `grid`, `hidden`

## Installation

```bash
npm install
npm run build
```

## Usage

### CLI

```bash
node dist/cli.js <input.html> -o <output.css>
```

### Example

```bash
npm run demo
```

This will scan `demo/index.html` and generate `demo/output.css` with only the utilities used in the HTML.

### Programmatic Usage

```typescript
import { TailwindMVP } from 'tailwindcss-mvp'

const generator = new TailwindMVP()
const html = '<div class="bg-blue-500 text-white p-4">Hello</div>'
const css = generator.generate(html)
```

## How It Works

1. **Scan HTML**: Extracts all class names from HTML files
2. **Match Utilities**: Identifies which classes match utility patterns
3. **Generate CSS**: Creates minimal CSS with only the used utilities
4. **Output**: Writes optimized CSS file

## Example HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind MVP Demo</title>
  <link rel="stylesheet" href="output.css">
</head>
<body class="bg-gray-100">
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">Tailwind CSS MVP</h1>
    <div class="bg-white rounded-lg p-6 border border-gray-200">
      <p class="text-gray-700">A minimal utility-first CSS framework.</p>
    </div>
  </div>
</body>
</html>
```

## Key Differences from Full Tailwind CSS

This MVP focuses on the core concept:

- ✅ Utility class extraction from HTML
- ✅ CSS generation based on usage
- ✅ Common utility patterns
- ❌ No configuration file
- ❌ No plugins or extensions
- ❌ No JIT compilation
- ❌ No variants (hover, focus, responsive)
- ❌ No custom themes

## License

MIT
