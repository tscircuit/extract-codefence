export const extractCodefence = (text: string) => {
  const codefence = text.match(/```[ \t]*(\w+)?[ \t]*\r?\n([\s\S]*?)```/)
  return codefence?.[2].trim()
}
