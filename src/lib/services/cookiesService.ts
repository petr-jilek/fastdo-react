export const analyticalCookiesKey = "analyticalCookies"

export const setAnalyticalCookiesConsent = (value: boolean) => localStorage.setItem(analyticalCookiesKey, value.toString())

export const getAnalyticalCookiesConsent = (): boolean => {
  var cookieConsentString = localStorage.getItem(analyticalCookiesKey)
  if (cookieConsentString) return cookieConsentString === true.toString()
  return false
}

export const acceptAllCookies = () => {
  setAnalyticalCookiesConsent(true)
}

export const cookiesSettingsSet = () => {
  if (localStorage.getItem(analyticalCookiesKey) === null) return false
  return true
}
