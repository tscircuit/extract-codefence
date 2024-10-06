import { expect, test } from "bun:test"
import { extractCodefence } from "../index"

test("extractCodefence", () => {
  expect(extractCodefence("```tsx\nconsole.log('hello')\n```")).toBe("console.log('hello')")
})
