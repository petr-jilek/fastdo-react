import { createContext, useContext } from 'react'

import { ITranslations } from './localization'

export interface ILocalizationContext<T extends ITranslations> {
  translations: T | null
}

export const defaultLocalizationContext: ILocalizationContext<ITranslations> = {
  translations: null
}

export const LocalizationContext = createContext<ILocalizationContext<ITranslations>>(defaultLocalizationContext)

export const useLocalizationContext = <T extends ITranslations>(): ILocalizationContext<T> =>
  useContext(LocalizationContext) as ILocalizationContext<T>

export const useT = <T extends ITranslations>() => useLocalizationContext().translations! as T
