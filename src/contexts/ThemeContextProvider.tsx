import { useState } from 'react'
import { ThemeContext, isDarkThemeLS, setThemeLS } from './ThemeContext'

export default function ThemeContextProvider(props: any) {
  const [isDark, setIsDark] = useState(isDarkThemeLS())

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      <ThemeContext.Provider
        value={{
          isDark,
          setTheme: (dark) => {
            setIsDark(dark)
            setThemeLS(dark)
          }
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </div>
  )
}
