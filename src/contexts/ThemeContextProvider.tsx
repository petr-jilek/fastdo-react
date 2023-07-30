import { useState } from 'react'
import { ThemeContext, setThemeLS } from './ThemeContext'

export default function ThemeContextProvider(props: any) {
  const [isDark, setIsDark] = useState(false)

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
