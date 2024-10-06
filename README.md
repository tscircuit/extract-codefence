# extract-codefence

A lightweight utility to extract code from codefence blocks in markdown-like text.

## Installation

```bash
npm install extract-codefence
```

or if you're using Bun:

```bash
bun add extract-codefence
```

## Usage

```typescript
import { extractCodefence } from 'extract-codefence';

const markdownText = `
# Example

Here's some code:

\`\`\`tsx
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`
`;

const extractedCode = extractCodefence(markdownText);
console.log(extractedCode);
// Output: const greeting = "Hello, World!";
//         console.log(greeting);
```

## API

### extractCodefence(text: string): string | undefined

Extracts the code from the first codefence block in the given text.

- `text`: The input text containing codefence blocks.
- Returns: The extracted code as a string, or `undefined` if no codefence block is found.

## Development

To set up the project for development:

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Run tests:

```bash
bun test
```

4. Build the project:

```bash
bun run build
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
