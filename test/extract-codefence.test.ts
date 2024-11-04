import { expect, test } from "bun:test"
import { extractCodefence } from "../index"

test("extractCodefence 1", () => {
  expect(extractCodefence("```tsx\nconsole.log('hello')\n```")).toBe("console.log('hello')")
})

test("extractCodefence 2", () => {
  expect(extractCodefence("```\nconsole.log('hello')\n```")).toBe("console.log('hello')")
})
