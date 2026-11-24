import { expect, test } from "bun:test"
import { extractCodefence } from "../index"

test("extractCodefence 1", () => {
  expect(extractCodefence("```tsx\nconsole.log('hello')\n```")).toBe("console.log('hello')")
})

test("extractCodefence 2", () => {
  expect(extractCodefence("```\nconsole.log('hello')\n```")).toBe("console.log('hello')")
})

test("extractCodefence strips non-ts language tags", () => {
  expect(extractCodefence("```js\nconsole.log('hello')\n```")).toBe("console.log('hello')")
  expect(extractCodefence("```python\nprint('hello')\n```")).toBe("print('hello')")
  expect(extractCodefence("```bash\nnpm install\n```")).toBe("npm install")
})
