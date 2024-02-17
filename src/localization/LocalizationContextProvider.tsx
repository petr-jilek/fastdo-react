import { LocalizationContext } from './LocalizationContext'
import { ITranslations, LocalizationModel } from './localization'

export interface Props {
  lang: string
  model: LocalizationModel
  children: React.ReactNode
}

export default function LocalizationContextProvider<T extends ITranslations>({ lang, model, children }: Props) {
  const translations = model[lang] as T

  return <LocalizationContext.Provider value={{ translations }}>{children}</LocalizationContext.Provider>
}
