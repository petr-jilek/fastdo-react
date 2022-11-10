import { isTrueInLocalStorage, setFalseInLocalStorage, setTrueInLocalStorage } from "./commonService"

export const darkThemeKey = "darkTheme"

export const setDarkTheme = () => setTrueInLocalStorage(darkThemeKey)
export const setLightTheme = () => setFalseInLocalStorage(darkThemeKey)

export const toggleTheme = () => {
  if (isDarkTheme()) setLightTheme()
  else setDarkTheme()
}

export const isDarkTheme = () => isTrueInLocalStorage(darkThemeKey)
