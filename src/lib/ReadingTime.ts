export function calculateReadingTime(content: string) {
  const wordsPerMinute = 200

  const text = content.replace(/[#_*>\-\n]/g, " ")
  const words = text.trim().split(/\s+/).length

  const minutes = Math.ceil(words / wordsPerMinute)

  return `${minutes} min read`
}