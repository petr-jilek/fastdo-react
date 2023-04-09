import { isTrueInLocalStorage, setTrueInLocalStorage } from "./commonService"

export const cookiesSetKey = "cookiesSet"
export const allCookiesAcceptedKey = "allCookiesAccepted"
export const analyticalCookiesAcceptedKey = "analyticalCookiesAccepted"

export const setCookiesSet = () => setTrueInLocalStorage(cookiesSetKey)
export const getCookiesSet = () => isTrueInLocalStorage(cookiesSetKey)

export const setValue = (key: string, value: boolean) => {
  localStorage.setItem(key, value.toString())
  setCookiesSet()
}

export const setAccept = (key: string) => {
  setTrueInLocalStorage(key)
  if (key === allCookiesAcceptedKey) {
    localStorage.removeItem(analyticalCookiesAcceptedKey)
  }
  setCookiesSet()
}

export const setDecline = (key: string) => {
  localStorage.removeItem(key)
  localStorage.removeItem(allCookiesAcceptedKey)
  setCookiesSet()
}

export const getAccept = (key: string) => {
  if (isTrueInLocalStorage(allCookiesAcceptedKey)) return true
  return isTrueInLocalStorage(key)
}

export const setAllAccepted = () => setAccept(allCookiesAcceptedKey)
export const getAllAccepted = () => getAccept(allCookiesAcceptedKey)
