import { isTrueInLocalStorage, setFalseInLocalStorage, setTrueInLocalStorage } from "./commonService"

export const cookiesSetKey = "cookiesSet"
export const allCookiesAcceptedKey = "allCookiesAccepted"
export const analyticalCookiesAcceptedKey = "analyticalCookiesAccepted"

export const setCookiesSet = () => setTrueInLocalStorage(cookiesSetKey)
export const getCookiesSet = () => isTrueInLocalStorage(cookiesSetKey)

export const setValue = (key: string, value: boolean) => localStorage.setItem(key, value.toString())

export const setAccept = (key: string) => {
  setTrueInLocalStorage(key)
  if (key === allCookiesAcceptedKey) {
    localStorage.removeItem(analyticalCookiesAcceptedKey)
  }
  setCookiesSet()
}

export const setDecline = (key: string) => {
  setFalseInLocalStorage(key)
  setFalseInLocalStorage(allCookiesAcceptedKey)
  setCookiesSet()
}

export const getAccept = (key: string) => isTrueInLocalStorage(key)
