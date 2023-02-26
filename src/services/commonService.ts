export const removeAllWhitespaces = (value: string) => value.replaceAll(/\s/g, "")

export const splitNumberBy3Digits = (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

export const appendToStringWithSpace = (value: string, append: string) => value + " " + append

export const appendKc = (value: string) => appendToStringWithSpace(value, " Kč")

export const toCzCurrencyString = (value: number) => appendKc(splitNumberBy3Digits(value))

export const downloadFile = (data: any, name: string) => {
  const href = URL.createObjectURL(new Blob([data]))

  // create "a" HTLM element with href to file & click
  const link = document.createElement("a")
  link.href = href
  link.setAttribute("download", name) //or any other extension
  document.body.appendChild(link)
  link.click()

  // clean up "a" element & remove ObjectURL
  document.body.removeChild(link)
  //URL.revokeObjectURL(url);
}

export const isMobile = () => (window?.innerWidth ?? 0) < 600

export const isTrueInLocalStorage = (key: string): boolean => {
  const stringValue = localStorage.getItem(key)
  if (stringValue) return stringValue === true.toString()
  return false
}

export const setTrueInLocalStorage = (key: string) => localStorage.setItem(key, true.toString())
export const setFalseInLocalStorage = (key: string) => localStorage.setItem(key, false.toString())

export const openUrlInNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer")
}

export const redirect = (url: string) => {
  window.location.replace(url)
}

export const redirectTop = (url: string) => {
  if (window.top) window.top.location.replace(url)
}

export const newTab = (url: string) => {
  window.open(url, "_blank", "noreferrer")
}

export const getNumberValuesFromEnum = (enumObject: any): number[] => {
  const enumValues = Object.values(enumObject)
  return enumValues.filter((v) => typeof v === "number") as number[]
}

export const isDevelopment = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") return true
  else return false
}