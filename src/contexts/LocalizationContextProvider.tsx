import { useEffect, useState } from 'react'
import { isDevelopment, sleep } from '..'
import { ITranslations, LocalizationContext, getLangLS, localizationConfig, setLangLS } from './LocalizationContext'

export interface Props<T extends ITranslations> {
  getUrl: (lang: string) => string
  developmentSleep?: number
  children: React.ReactNode
}

export default function LocalizationContextProvider<T extends ITranslations>({
  getUrl,
  developmentSleep = 1000,
  children
}: Props<T>) {
  const [lang, setLang] = useState(getLangLS())
  const [translations, setTranslations] = useState<T>(localizationConfig.defaultTranslations as T)

  useEffect(() => {
    const get = async () => {
      if (isDevelopment()) await sleep(developmentSleep)

      const response = await fetch(getUrl(lang))
      if (response.ok) {
        const translations = await response.json()
        setTranslations(translations)
      }
    }

    setLangLS(lang)
    get()
  }, [lang])

  return <LocalizationContext.Provider value={{ lang, setLang, translations }}>{children}</LocalizationContext.Provider>
}
