import { createContext, useContext } from 'react'

export interface IThemeContext {
  isDark: boolean
  setTheme: (dark: boolean) => void
}

export const defaultThemeContext: IThemeContext = {
  isDark: false,
  setTheme: () => {}
}

export const ThemeContext = createContext<IThemeContext>(defaultThemeContext)

export const useThemeContext = (): IThemeContext => useContext(ThemeContext)

export const setThemeLS = (dark: boolean): void => {
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

export const isDarkThemeLS = (): boolean => {
  const theme = localStorage.getItem('theme')
  return theme === 'dark'
}
