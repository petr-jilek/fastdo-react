export const isRedirect = (statusCode: number): boolean => {
  return statusCode >= 300 && statusCode < 400
}
