# OutCSS

OutCSS is a modern CSS-in-JS library designed to generate static CSS files during build time. It seamlessly combines the power of dynamic styling with the efficiency of precompiled CSS, ensuring optimal performance and maintainability.

### With OutCSS, you can:

• Write your styles using template literals in JavaScript or TypeScript.
• Automatically generate and output clean, reusable CSS files.
• Avoid runtime styling overhead for blazing-fast rendering.

Perfect for developers who want the convenience of CSS-in-JS without sacrificing the benefits of traditional CSS.

### Key Features:

• Static CSS generation for better performance.
• Full PostCSS support, including nesting, variables, and modern CSS features.
• Hassle-free integration with popular tools like Webpack, Vite, or esbuild.

OutCSS makes styling effortless, efficient, and future-proof.

## Installation

To install the library, run the following command:

```bash
npm install outcss
```

```bash
pnpm install outcss
```

## Usage

Here’s a simple example of how to use the library:

```typescript
import { css } from '@outcss';
import '@outcss/styles.css'; // Import the generated CSS

const buttonClass = css`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

const App = () => {
  return <button className={buttonClass}>Click me</button>;
};

export default App;
```
