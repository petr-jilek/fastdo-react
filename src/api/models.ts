export interface ApiResponse<T> {
  success: boolean
  value?: T | undefined
  error?: ErrorModel | undefined
}

export interface ErrorModel {
  message?: string | undefined
  errorCode?: ErrorCode | undefined
  detail?: string | undefined
}

export interface ErrorCode {
  block: number
  code: number
}

export interface ErrorMiddlewareProps {
  response: Response
  statusCode: number
  error?: ErrorModel
}

export interface FetchModel<T> {
  loading: boolean
  response: ApiResponse<T> | undefined
}
