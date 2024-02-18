import { getUrlGetParam } from "../services/commonService"

export type LocalizationModel = Record<string, ITranslations>
export type ITranslations = Record<string, string>

export enum LangSaveType {
  url,
  getParam,
  localStorage
}

export interface ISettings {
  langs: string[]
  default: string
  type: LangSaveType
}

export const localizationSettings: ISettings = {
  langs: ['cs', 'en'],
  default: 'cs',
  type: LangSaveType.url
}

export const getLangPrefix = (lang: string | null = null) => {
  lang = lang ?? getLang()
  if (lang === localizationSettings.default) return ''

  return lang
}

export const getLangFromUrl = () => {
  const url = window.location.pathname.split('/')[1]

  if (localizationSettings.langs.includes(url)) return url

  return localizationSettings.default
}

export const getLangFromGetParam = () => {
  const lang = getUrlGetParam('lang') ?? localizationSettings.default

  if (localizationSettings.langs.includes(lang)) return lang

  return localizationSettings.default
}

export const getLangFromLocalStorage = () => {
  const lang = localStorage.getItem('lang') ?? localizationSettings.default

  if (localizationSettings.langs.includes(lang)) return lang

  return localizationSettings.default
}

export const getLang = () => {
  switch (localizationSettings.type) {
    case LangSaveType.url:
      return getLangFromUrl()
    case LangSaveType.getParam:
      return getLangFromGetParam()
    case LangSaveType.localStorage:
      return getLangFromLocalStorage()
  }
}

export const buildLocalizedPath = (path: string, lang: string | null = null) => {
  lang = lang ?? getLang()
  if (lang === localizationSettings.default) return path

  var builtPath = ''
  switch (localizationSettings.type) {
    case LangSaveType.url:
      builtPath = `/${lang}${path}`
      break
    case LangSaveType.getParam:
      builtPath = `${path}?lang=${lang}`
      break
    case LangSaveType.localStorage:
      builtPath = path
      break
  }

  if (builtPath.endsWith('/')) builtPath = builtPath.slice(0, -1)

  return builtPath
}
