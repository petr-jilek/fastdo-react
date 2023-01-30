import { isTrueInLocalStorage, setFalseInLocalStorage, setTrueInLocalStorage } from "./commonService"

export const cookiesSetKey = "cookiesSet"
export const allCookiesAcceptedKey = "allCookiesAccepted"

export const analyticalCookiesAcceptedKey = "analyticalCookiesAccepted"

export const setCookiesSet = () => setTrueInLocalStorage(cookiesSetKey)

export const acceptAllCookies = () => {
  setTrueInLocalStorage(allCookiesAcceptedKey)
  setCookiesSet()
}

export const cookiesSet = () => isTrueInLocalStorage(cookiesSetKey)
export const allCookiesAccepted = () => isTrueInLocalStorage(allCookiesAcceptedKey)

export const analyticalCookiesAccept = () => setTrueInLocalStorage(analyticalCookiesAcceptedKey)
export const analyticalCookiesDecline = () => {
  setFalseInLocalStorage(analyticalCookiesAcceptedKey)
  setFalseInLocalStorage(allCookiesAcceptedKey)
}

export const analyticalCookiesAccepted = () => isTrueInLocalStorage(analyticalCookiesAcceptedKey)
