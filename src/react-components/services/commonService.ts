export const isTypeOf = () => true

export const splitNumberBy3Digits = (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

export const appendToStringWithSpace = (value: string, append: string) => value + " " + append

export const appendKc = (value: string) => appendToStringWithSpace(value, " Kč")

export const toCzCurrencyString = (value: number) => appendKc(splitNumberBy3Digits(value))
