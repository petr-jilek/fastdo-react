export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export const enumToArray = (enumme: any) => {
  return Object.keys(enumme).map((key) => enumme[key])
}

export const reload = () => {
  window.location.reload()
}
