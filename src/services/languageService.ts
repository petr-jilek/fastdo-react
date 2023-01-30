export const languageCodeKey = "lang"

export const setLanguage = (code: string) => {
  localStorage.setItem(languageCodeKey, code)
}

export const getLanguage = () => {
  return localStorage.getItem(languageCodeKey)
}
