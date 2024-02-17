import { useEffect, useState } from 'react'
import { LocalizationAsyncContext, defaultLocalizationAsyncContext } from './LocalizationAsyncContext'
import { ITranslations } from './localization'

export interface Props {
  lang: string
  getTranslations: (lang: string) => Promise<ITranslations>
  children: React.ReactNode
}

export default function LocalizationAsyncContextProvider<T extends ITranslations>({
  lang,
  getTranslations,
  children
}: Props) {
  const [value, setValue] = useState(defaultLocalizationAsyncContext)

  useEffect(() => {
    const get = async () => {
      setValue((prev) => ({ ...prev, loading: true }))

      try {
        const translations = (await getTranslations(lang)) as T
        setValue({
          loading: false,
          error: false,
          translations
        })
      } catch {
        setValue({
          loading: false,
          error: true,
          translations: null
        })
      }
    }
    get()
  }, [lang, getTranslations])

  return <LocalizationAsyncContext.Provider value={value}>{children}</LocalizationAsyncContext.Provider>
}
