/**
 * @description
 * Formats a full name by lowercasing it, splitting it into words, taking the last word and the first word,
 * joining them without spaces, and then trimming the result.
 * @param fullName a string containing a full name
 * @returns a formatted username string
 */
export const formatFullName = (fullName: string) => {
  const words = fullName.toLowerCase().split(' ').filter(Boolean)
  return (words[words.length - 1] + words[0]).trim()
}
