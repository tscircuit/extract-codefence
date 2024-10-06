export const extractCodefence = (text: string) => {
  const codefence = text.match(/```(tsx?|typescript)([\s\S]*?)```/)
  return codefence?.[2].trim()
}
