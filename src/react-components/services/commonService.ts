export const isTypeOf = () => true

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
