import { createContext, useContext } from 'react'

export interface ILocalizationConfig {
  supportedLangs: string[]
  defaultLang: string
  defaultTranslations: ITranslations
}

export const localizationConfig: ILocalizationConfig = {
  supportedLangs: ['en', 'cz'],
  defaultLang: 'en',
  defaultTranslations: {}
}

export type ITranslations = Record<string, string>

export interface ILocalizationContext<T extends ITranslations> {
  lang: string
  setLang: (lang: string) => void
  translations: T
}

export const defaultLocalizationContext = {
  lang: localizationConfig.defaultLang,
  setLang: () => {},
  translations: localizationConfig.defaultTranslations
}

export const LocalizationContext = createContext<ILocalizationContext<ITranslations>>(defaultLocalizationContext)

export const useLocalizationContext = (): ILocalizationContext<ITranslations> => useContext(LocalizationContext)

export const setLangLS = (lang: string): void => {
  lang = localizationConfig.supportedLangs.includes(lang) ? lang : localizationConfig.defaultLang
  localStorage.setItem('lang', lang)
}

export const getLangLS = (): string => {
  const lang = localStorage.getItem('lang')
  if (lang && localizationConfig.supportedLangs.includes(lang)) return lang
  return localizationConfig.defaultLang
}
