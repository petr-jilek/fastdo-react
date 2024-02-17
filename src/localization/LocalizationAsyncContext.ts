import { createContext, useContext } from 'react'
import { ITranslations } from './localization'

export interface ILocalizationAsyncContext<T extends ITranslations> {
  loading: boolean
  error: boolean
  translations: T | null
}

export const defaultLocalizationAsyncContext: ILocalizationAsyncContext<ITranslations> = {
  loading: true,
  error: false,
  translations: null
}

export const LocalizationAsyncContext = createContext<ILocalizationAsyncContext<ITranslations>>(
  defaultLocalizationAsyncContext
)

export const useLocalizationAsyncContext = <T extends ITranslations>(): ILocalizationAsyncContext<T> =>
  useContext(LocalizationAsyncContext) as ILocalizationAsyncContext<T>

export const useT = <T extends ITranslations>() => useLocalizationAsyncContext().translations! as T
