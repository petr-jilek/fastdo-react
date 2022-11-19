export const themeKey = "theme"

export const setTheme = (value: boolean) => localStorage.setItem(themeKey, value.toString())

export const getTheme = (): boolean => {
  var themeString = localStorage.getItem(themeKey)
  if (themeString) return themeString === true.toString()
  return false
}
